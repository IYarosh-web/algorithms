// Задача: поместить в рюкзак как можно больше ценных предметов
// Ёмкость рюкзака: 4
// Список товаров:
// Гитара - стоимость 1500$, размер - 1
// Ноутбук - стоимость 2000$, размер - 3
// Магнитофон - стоимость 3000$, размер - 4

const CAPACITY = 4;

const goods = [
  'guitar',
  'recorder',
  'laptop',
  'iphone',
];

const goodsPrices = {
  guitar: 1500,
  recorder: 3000,
  laptop: 2000,
  iphone: 2000,
}

const goodsSizes = {
  guitar: 1,
  recorder: 4,
  laptop: 3,
  iphone: 1,
}

const table = new Array(goods.length).fill(null).map(() => new Array(CAPACITY + 1).fill(0));

table.forEach((_, i, t) => {
  table[i].forEach((_, j) => {
    const good = goods[i];
    const price = goodsPrices[good];
    const size = goodsSizes[good];

    const prevMax = table[i-1]?.[j] || 0;
    const currMax = j >= size ? price + (table[i - 1]?.[j - size] || 0) : 0;

    t[i][j] = Math.max(prevMax, currMax);
  });
});

console.log(table);
