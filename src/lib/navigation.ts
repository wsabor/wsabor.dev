/** Link ativo no menu: a home só casa com "/", as demais também com subpáginas. */
export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
