// task 3
// Хранилище всего имеющегося товара в интернет-магазине представляет собой объект.
// Весь товар разделен на категории, одна из них «Обувь»,
// которая в свою очередь делится на виды «Ботинки», «Кроссовки», «Сандалии».
// О каждой паре обуви хранится следующая информация: уникальный номер товара, размер обуви, цвет, цена.
// Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету.
// Выведите номера товаров, соответствующих заданному условию (фильтру).

// task 4
// Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты.
// Учитывая это, каким образом мы можем оптимизировать создание нового товара в хранилище?
// Оптимизируйте объект-хранилище, при этом свойства «id»,
// «цвет» и «размер» должны быть доступны только для чтения, свойство «id» не может быть удалено.

// task 5
// Добавьте в описание товара новые свойства:
// «скидка» и «конечная стоимость» (стоимость с учетом скидки).
// Добавьте геттер и сеттер для свойства «конечная стоимость»,
// учитывая то, что свойства «скидка» и «конечная стоимость» взаимозависимые.

console.group('task 3, 4, 5');

function shoes(id, size, color, price) {
    this.id = id;
    this.size = size;
    this.color = color;
    this.price = price;

    Object.defineProperty(this, 'sale', {
        set (value) {
            Object.defineProperty(this, 'finalPrice', {
               get() {
                   return this.price - ((value / 100) * this.price);
               },
               set() {
                   return this.price;
               }
            });
        }
    });
}

const products = {
    shoesList: {
        sneakers: [
            new shoes(1, 42, 'black', 200),
            new shoes(2, 44, 'white', 300),
        ],
        bots: [
            new shoes(3, 42, 'red', 400),
            new shoes(4, 42, 'white', 300),
        ],
        sandals: [
            new shoes(5, 42, 'black', 300),
            new shoes(6, 40, 'red', 500),
        ]
    }
}

products[Symbol.iterator] = function() {
    const array = [...this.shoesList.bots, ...this.shoesList.sandals, ...this.shoesList.sneakers];
    return {
        index: 0,
        next() {
            if (this.index < array.length) {
                return {done: false, value: array[this.index++]};
            } else {
                return {done: true};
            }
        }
    }
}

Object.defineProperty(shoes, "id", {
    writable: false,
    configurable: false
});
Object.defineProperty(shoes, "size", {
    writable: false
});
Object.defineProperty(shoes, "color", {
    writable: false
});

products['getRange'] = function(from, to) {
    const array = new Array();
    for (let item of products) {
        if (item.price >= from &&
            item.price <= to) {
            array.push(item.id);
        }
    }
    return array;
};

products['getShoesBySize'] = function (size) {
    const array = new Array();
    for (let item of products) {
        if (item.size === size) {
            array.push(item.id);
        }
    }
    return array;
};

products['getShoesByColor'] = function (color) {
    const array = new Array();
    for (let item of products) {
        if (item.color === color) {
            array.push(item.id);
        }
    }
    return array;
};

products['addProduct'] = function (category, type, product) {
    products[category][type].push(product);
    return product;
}

products.addProduct('shoesList', 'bots', new shoes(7, 43, 'black', 400));

console.log(`products by size (42):\n${products.getShoesBySize(42)}`);
console.log(`products by range price (200-300):\n${products.getRange(200, 350)}`);
console.log(`products bt color (red):\n${products.getShoesByColor('red', 12)}`);

console.group(`shoes list:\n`, products['shoesList']);
console.groupEnd();

console.log(products.shoesList.bots[0].price);
products.shoesList.bots[0].sale = 20;
console.log(products.shoesList.bots[0].finalPrice);

console.group(`shoes list:\n`, products['shoesList']);
console.groupEnd();

console.groupEnd();