import { ArrayFilter } from './types';

export function partition<T>(arr: T[], filter: ArrayFilter<T>): [T[], T[]] {
    const positive: T[] = [];
    const negative: T[] = [];

    arr.forEach((e, idx, arr) => {
        if (filter(e, idx, arr)) {
            positive.push(e);
            return;
        }

        negative.push(e);
    });

    return [positive, negative];
}

export function excludeNullable<T>(arr: T[]): NonNullable<T>[] {
    return arr.filter(Boolean) as NonNullable<T>[];
}
