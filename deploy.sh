#!/bin/bash

# =============================================================================
# deploy.sh — wsabor.dev | OCI Deploy Script
# Uso: bash deploy.sh
# =============================================================================

set -e  # Aborta se qualquer comando falhar

# --- Cores para output ---
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

log()     { echo -e "${GREEN}[deploy]${NC} $1"; }
warn()    { echo -e "${YELLOW}[aviso]${NC}  $1"; }
error()   { echo -e "${RED}[erro]${NC}   $1"; exit 1; }

# --- Configurações ---
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"  # Diretório do script
PM2_APP_NAME="wsabor"  # Nome do processo no PM2 (ajuste se necessário)
BRANCH="main"          # Branch de produção

# =============================================================================
log "Iniciando deploy em $(date '+%d/%m/%Y %H:%M:%S')"
log "Diretório: $APP_DIR"
# =============================================================================

# 1. Git pull
log "Puxando atualizações do repositório..."
cd "$APP_DIR"
git fetch origin "$BRANCH"

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL" = "$REMOTE" ]; then
  warn "Nenhuma atualização encontrada. O código já está na versão mais recente."
  warn "Forçar o deploy mesmo assim? (s/N)"
  read -r REPLY
  if [[ ! "$REPLY" =~ ^[Ss]$ ]]; then
    log "Deploy cancelado."
    exit 0
  fi
fi

git pull origin "$BRANCH"
log "Git pull concluído. Commit: $(git rev-parse --short HEAD)"

# 2. Instalar dependências (apenas se package.json mudou)
if git diff HEAD@{1} HEAD --name-only 2>/dev/null | grep -q "package-lock.json\|package.json"; then
  log "Mudanças em dependências detectadas. Rodando npm ci..."
  npm ci --omit=dev
else
  log "Sem mudanças em dependências. Pulando npm install."
fi

# 3. Build
log "Rodando build..."
npm run build

# 4. Restart PM2
log "Reiniciando processo PM2 '$PM2_APP_NAME'..."

if pm2 describe "$PM2_APP_NAME" > /dev/null 2>&1; then
  pm2 restart "$PM2_APP_NAME" --update-env
else
  warn "Processo '$PM2_APP_NAME' não encontrado. Iniciando com 'pm2 start'..."
  pm2 start npm --name "$PM2_APP_NAME" -- start
fi

# 5. Salvar estado do PM2 (garante que sobrevive a reboots)
pm2 save

# 6. Status final
log "Deploy concluído com sucesso! ✓"
echo ""
pm2 show "$PM2_APP_NAME" | grep -E "status|uptime|restarts|version"