"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// false no servidor e na hidratação, true depois no cliente.
// Substitui o padrão useState + useEffect(() => setMounted(true)).
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
