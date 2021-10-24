// task 4
// Определите классы двух компонентов на выбор, например, кнопка, прелоадер, пагинация,
// всплывающая подсказка (tooltip) и др. Каждый компонент должен включать не менее
// четырех вариантов отображения элементов (т.е. не менее трех наследующих классов от базового).
// Элементы должны отличаться не только по внешнему виду, но по функциональности.

class Input {
    constructor() {
        this.element = document.createElement('input');
        this.element.setAttribute('placeholder', 'элемент')
        this.element.setAttribute('type', 'text');
    }

    show() {
        this.element.style.visibility = 'visible';
        document.body.append(this.element);
    }

    hide() {
        this.element.style.visibility = 'hidden';
    }
}

class Blue extends Input {
    constructor() {
        super();
        Object.assign(this.element.style, {
            padding: '20px 40px',
            backgroundColor: 'blue',
            color: '#fff'
        });
        this.element.setAttribute('type', 'password');
    }

}

class Calendar extends Input {
    constructor() {
        super();
        Object.assign(this.element.style, {
            padding: '5px',
            border: '3px dashed #000'
        });
        this.element.setAttribute('type', 'date');
    }

}

class File extends Input {
    constructor() {
        super();
        Object.assign(this.element.style, {
           padding: '70px',
           backgroundColor: '#124511'
        });
        this.element.setAttribute('type', 'file');
    }
}

class Button {

    constructor() {
        this.element = document.createElement('button');
        this.element.innerHTML = 'button';
        this.element.setAttribute('type', 'submit');
    }

    show() {
        this.element.style.visibility = 'visible';
        document.body.append(this.element);
    }

    hide() {
        this.element.style.visibility = 'hidden';
    }
}

class Red extends Button {
    constructor() {
        super();
        Object.assign(this.element.style, {
            backgroundColor: 'red',
            border: '3px solid #000'
        });
        this.element.setAttribute('type', 'button');
    }
}

class Extension extends Button {
    constructor() {
        super();
        Object.assign(this.element.style, {
            padding: '20px 40px',
            backgroundColor: '#000',
            color: '#fff'
        })
    }
}

class Disabled extends Button {
    constructor() {
        super();
        Object.assign(this.element.style, {
            padding: '20px',
            margin: '5px'
        });
        this.element.setAttribute('disabled', 'disabled');
    }

}

const btn = new Button();
const btn_2 = new Red();
const btn_3 = new Extension();
const btn_4 = new Disabled();
btn.show();
btn_2.show();
btn_3.show();
btn_4.show();

const input = new Input();
const input_2 = new Blue();
const input_3 = new Calendar();
const input_4 = new File();
input.show();
input_2.show();
input_3.show();
input_4.show();