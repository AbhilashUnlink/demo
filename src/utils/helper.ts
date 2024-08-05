export function updateObjectInArray(array: any, key: string, id: any, newProperties: any) {
    return array.map((item: any) => {
        if (item[key] === id) {
            return { ...item, ...newProperties };
        }
        return item;
    });
}