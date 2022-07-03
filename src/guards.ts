export function notNullish<T>(val: T | null | undefined): val is NonNullable<T> {
    /* eslint-disable-next-line */
    return val != null;
}
