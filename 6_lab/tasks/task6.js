// task 6
// Функция sum принимает параметра a и b и выводит их значения.
// Дополните функцию чтобы была возможность рассчитать сумму чисел вне функции и записать результат в свойство функции s.

function task6() {
    console.group('task 6');

    function sum (a, b) {
        this.s = a + b;
        console.log(`a : ${a}\nb : ${b}`);
    }

    sum(2, 3);

    sum.s = 3 + 4;
    console.log(`sum.s : ${sum.s}`);

    console.groupEnd();
}

task6();