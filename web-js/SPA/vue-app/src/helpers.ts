export function normalizeLength(value: string, length: number = 20) {
    return value.substring(0, length);
}

export function uuidv4() {
    return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
        // eslint-disable-next-line no-mixed-operators
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}