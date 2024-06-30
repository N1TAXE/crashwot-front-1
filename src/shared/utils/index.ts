export function GetRarityName(id: number) {
    switch (id) {
        case 7: return 'special';
        case 6: return 'covert';
        case 5: return 'classfield';
        case 4: return 'restricted';
        case 3: return 'rare';
        case 2: return 'uncommon';
        case 1: return 'common';
    }
}

export function getRandomElements<T>(array: T[], count: number): T[] {
    const result: T[] = [];

    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * array.length);
        result.push(array[randomIndex]);
    }

    return result;
}

export function replaceFromEnd<T>(array: T[][], positionFromEnd: number, newItems: T[]): T[][] {
    return array.map((subArray, index) => {
        const indexFromEnd = subArray.length - positionFromEnd;
        if (indexFromEnd >= 0 && indexFromEnd < subArray.length) {
            const newSubArray = [...subArray];
            newSubArray[indexFromEnd] = newItems[index];
            return newSubArray;
        } else {
            throw new Error("Position from end is out of bounds");
        }
    });
}