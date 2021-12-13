export function notBlank(str: string): boolean {
    if (str) {
        return str.trim().length != 0;
    }
    return false;
};