// task 7
// Какой будет результат выполнения кода?
// Изменится ли внешняя переменная value?
// Какими будут ответы, если из строки let value = false убрать let?

function task7() {
    console.group('task 7');

    let value = 0;

    function f() {
        if (1) {
            value = true;
        } else {
            let value = false;
            // value = false
            // function output : true
        }

        console.log(`value : ${value}`); // true
    }

    f();

    console.log(`outer value : ${value}`); // true

    console.groupEnd();
}

task7();