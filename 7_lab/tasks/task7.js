// task 7
// Создайте декоратор decorator(func, ms), который задерживает каждый вызов func на ms миллисекунд.
// Т.е., decorator(func, ms) возвращает вариант func с задержкой на ms мс.
// В приведённом примере func –
// функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function task7() {
    function decorator(f, ms) {

        return function(...args) {
            let savedThis = this;
            setTimeout(function() {
                f.apply(savedThis, args);
            }, ms);
        };
    }

    function f() {
        let array = new Array();
        for (let i = 0; i < arguments.length; i++) {
            array[i] = arguments[i];
        }

        alert(array);
    }

    let f1000 = decorator(f, 1000);
    let f1500 = decorator(f, 1500);

    f1000(1, 3, 4); // показывает после 1000 мс
    f1500('test'); // показывает после 1500 мс
}