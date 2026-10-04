export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const IS_STATIC_EXPORT = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

export const withBase = (path: string) => `${BASE_PATH}${path}`;
