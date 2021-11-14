// Для создания кнопок разработайте класс Button, который позволяет:
// - создать, удалить кнопку;
// - устанавливать размеры кнопки;
// - устанавливать фон кнопки;
// - устанавливать текст кнопки.

// Класс Product должен позволять:
// - добавлять товар на страницу;
// - удалять конкретный товар (например, по коду);
// - устанавливать изображение товара (ссылку на изображение можно передавать в качестве параметры метода);
// - устанавливать название товара;
// - устанавливать стоимость товара;


const goodsList = document.getElementById("list");

class Button{

    constructor(title, size, bg){
        this.title = title;
        this.size = size;
        this.bg = bg;
    }

    toString(){
        return `
            <button class="good__cart" style="background-color: ${this.bg};width:${this.size.width}px;height:${this.size.height}px;">${this.title}</button>
        `;
    }
    
    setSize(size){
        this.size = size;
    }

    setBg(bg){
        this.bg = bg;
    }

    setTitle(title){
        this.title = title;
    }

}

class Product {

    constructor(id, title, price, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.image = image;
    }

    static storage = new Array();

    toString() {
        const btn = new Button("В корзину", {width: 120, height: 40}, "#e1541f");
        return `
            <div class="good__item">
                <span class="id">${this.id}</span>
                <img class="good__img" src="img/${this.image}" alt="">
                <h2 class="good__title">${this.title}</h2>
                <h3 class="good__price">${this.price}</h3>
                ${btn.toString()}
            </div>
        `;
    }

    static add(obj) {
        Product.storage.push(
            new Product(obj.id, obj.title, obj.price, obj.image
            ));
    }

    static remove(id) {
        Product.storage = this.storage.filter(good => {
            return good.id != id;
        })
    }

    static setTitle(id, newTitle) {
        const goods = document.getElementsByClassName("good__item");
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].childNodes[1].textContent == id) {
                goods[i].childNodes[5].textContent = newTitle;
              
            }
        }
    }

    static setPrice(id, newPrice) {
        const goods = document.getElementsByClassName("good__item");
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].childNodes[1].textContent == id) {
                goods[i].childNodes[7].textContent = "$" + newPrice;
            }
        }
    } 

    static setImage(id, newImage) {
        const goods = document.getElementsByClassName("good__item");
        for (let i = 0; i < goods.length; i++) {
            if (goods[i].childNodes[1].textContent == id) {
                goods[i].childNodes[3].src = `img/${newImage}`;
            }
        }
    }

    static printGoods() {
        Product.storage.forEach((good, index) => {
            goodsList.innerHTML += good;
        });
    }
}


Product.add({
    id: 1,
    title: "Iphone 13",
    price: "$1.499.00",
    image: "iphone-13.png",
});
// Product.add({
//     id: 2,
//     title: "Realme 8",
//     price: "$459.00",
//     image: "realme-8.jpg"
// });
Product.add({
    id: 3,
    title: "Realme 8",
    price: "$459.00",
    image: "realme-8.jpg"
});
Product.add({
    id: 4,
    title: "Samsung Galaxy 21",
    price: "$1.199.00",
    image: "samsung-galaxy.webp"
});
Product.add({
    id: 5,
    title: "Nokia 3310",
    price: "бесценно",
    image: "nokia.png"
});

Product.printGoods();

// После того как все товары добавлены на страницу, 
// найдите все нечетные товары и задайте им серый фон.

for (let i = 0; i < document.getElementsByClassName("good__item").length; i++) {
    if (i % 2 === 0) {
        document.getElementsByClassName("good__item")[i].style.backgroundColor = "lightgray";
    }
}