const items = [
    'Macan Cisewu',
    'Kursi TAman',
    'Ular Tangga',
    'Sandal Jepit',
    'Buku Sidu',
    'Papan Tulis',
    'Calisrox',
    'Mimi peri',
    'Timothy Ronald',
    'Maaf kurang beruntung',
    'Minyak Tanah',
    'Setrika',
    'Kompor Listrik',
    'Sandal Selop',
    'Burung Angsa',
    'Macan Betawi',
    'Tuyul Mulet',
    'Saber Roam',
    'Andi Cobra'];


export function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
