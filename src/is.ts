import { Func } from './types';

export function isNumber(val: any): val is number {
    return typeof val === 'number';
}

export function isBoolean(val: any): val is boolean {
    return typeof val === 'boolean';
}

export function isString(val: any): val is string {
    return typeof val === 'string';
}

export function isFunction<T extends Func>(val: any): val is T {
    return typeof val === 'function';
}

export function isObject(val: any): val is object {
    return Object.prototype.toString.call(val) === '[object Object]';
}
