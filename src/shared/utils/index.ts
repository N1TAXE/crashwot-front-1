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