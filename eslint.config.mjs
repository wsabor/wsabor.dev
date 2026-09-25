import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

// ESLint 9: eslint-plugin-react (usado pelo eslint-config-next) ainda não suporta o 10.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Por último: desliga regras de formatação que conflitam com o Prettier
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
