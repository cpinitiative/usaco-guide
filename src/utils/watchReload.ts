import { useRouter } from 'next/router';

let es: EventSource | null = null;

export function initWatchReload(router: ReturnType<typeof useRouter>) {
  es = new EventSource('http://localhost:3001');
  es.onmessage = () =>
    router.replace(router.asPath, undefined, { scroll: false });
  es.onerror = () => {};
  return () => {
    if (es) {
      es.close();
      es = null;
    }
  };
}
