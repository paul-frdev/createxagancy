import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function useQueryParams<T>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryParams = useMemo(() => {
    const params: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params as T;
  }, [searchParams]);

  const handleSearchInputChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setQueryParams('query', term);
  }, 500);

  const setQueryParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === null || value === undefined) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { queryParams, setQueryParams, handleSearchInputChange, searchParams };
}