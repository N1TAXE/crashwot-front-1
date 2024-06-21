export function GetRarityName(id: number) {
    switch (id) {
        case 1: return 'special';
        case 2: return 'covert';
        case 3: return 'classfield';
        case 4: return 'restricted';
        case 5: return 'rate';
        case 6: return 'uncommon';
        case 7: return 'common';
    }
}