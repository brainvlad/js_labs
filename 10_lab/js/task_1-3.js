// task 1
// Создайте класс описывающий веб-компонент.
// Конструктор этого класса принимает селектор.
// Класс содержит методы, один из них показывает, другой – скрывает компонент.

// task 2
// Создайте класс описывающий блочный элемент.
// Класс наследуется от веб-компонента и принимает  options – объект свойств блочного элемента:
// селектор, размер, цвет.
// Создайте два блочных элемента: первый – красного цвета размером 100х100px,
// второй – синего цвета размером 120х120px.

// task 3
// Создайте класс, наследующий от блочного элемента, который создает круг.
// Создайте зеленый круг с диаметром 90px.

const redDiv = {
    backgroundColor: 'red',
    width: '100px',
    height: '100px'
}
const blueDiv = {
    backgroundColor: 'blue',
    width: '120px',
    height: '120px'
}
const greenDiv = {
    backgroundColor: 'green',
    width: '90px',
    height: '90px'
}

class Component {

    constructor(selector) {
        this.selector = selector;
        this.element = document.createElement(selector);
    }

    show() {
        this.element.style.visibility = 'visible';
        document.body.append(this.element);
    }

    hide() {
        this.element.style.visibility = 'hidden';
    }
}

class Division extends Component {

    constructor(selector, options) {
        super(selector);
        Object.assign(this.element.style, options);
        this.options = options;
    }

}

class Circle extends Division {

    constructor(selector, options) {
        super(selector, options);
        this.element.style.borderRadius = '50%';
    }

}

const component_1 = new Division('div', redDiv);
const component_2 = new Division('div', blueDiv);
const component_3 = new Circle('div', greenDiv);
component_1.show()
component_2.show()
component_3.show()


