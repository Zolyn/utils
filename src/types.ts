export type Func = (...args: any[]) => any;

export type ArrayFilter<T> = (element: T, index: number, array: T[]) => any;

export type Nullable<T> = T | null | undefined;
