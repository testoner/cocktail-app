export type PrefixedKeys<T, P extends string> = {
  [K in keyof T]: K extends `${P}${number}` ? K : never;
}[keyof T];

export function pickValuesByPrefix<
  T extends Record<string, unknown>,
  P extends string,
>(obj: T, prefix: P): Array<T[PrefixedKeys<T, P>] | null> {
  const keys = (Object.keys(obj) as Array<PrefixedKeys<T, P>>).filter((key) =>
    key.startsWith(prefix),
  );

  return keys.map((key) => obj[key] ?? null);
}
