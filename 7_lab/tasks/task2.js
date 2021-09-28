// task 2
// В результате решения задачи 10 из ЛР №2 создан объект slider с набором свойств.
// Добавьте возможность задавать и получать имя слайдера через методы объекта.
// Создайте несколько экземпляров слайдера и выведите их имена.

function task2() {
    console.group('task 2:');

    let Slider = {
        title: 'Slider-1',
        hideBtnControls: true,
        sizeBtnControls: 50,
        countSlidesInRow: 5,
        marginSlides: 5,
        height: 300,
        width: 1000 + (this.sizeBtnControls * 2),
        widthFullSlider: (this.width - (this.sizeBtnControls * 2) -
            (this.countSlidesInRow * (this.marginSlides * 2))) /
            (this.countSlidesInRow),

        setName(newName) {
            this.title = newName;
        },

        getName() {
            return this.title;
        }
    }

    let Slider2 = Object.assign({}, Slider);
    let Slider3 = Object.assign({}, Slider);

    Slider2.setName('Slider-2');
    Slider3.setName('Slider-3');

    console.log(`name slider : ${Slider.getName()}`);
    console.log(`name slider : ${Slider2.getName()}`);
    console.log(`name slider : ${Slider3.getName()}`);

    console.groupEnd();
}

task2();