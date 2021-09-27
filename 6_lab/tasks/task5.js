// task 5
// Что выведет alert (console.log) в примерах?
// Поясните почему так?
// На что ссылается [[Environment]] функций?
// Что будет содержать LexicalEnvironment при запуске функций?
// Что хранится в counter? Когда будет вызвана функция (*)?

// Вариант 1

function task5_1() {
    console.group('task 5-1');
    function makeCounter() {
        let currentCount = 1;

        return function () { // (*)
            return currentCount++;
        }
    }
    let counter = makeCounter();

    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3

    let counter2 = makeCounter();
    console.log(counter2()); // 1

    console.groupEnd();
}


// Вариант 2

function task5_2() {
    console.group('task 5-2')

    let currenCount = 1;

    function makeCounter() {
        return function () {
            return currenCount++;
        }
    }

    let counter = makeCounter();
    let counter2 = makeCounter();

    console.log(counter());     // 1
    console.log(counter());     // 2

    console.log(counter2());    // 3
    console.log(counter2());    // 4

    console.groupEnd();
}

task5_1();
task5_2();