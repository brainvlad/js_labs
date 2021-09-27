// task 4
// Что будет выведено в окне?
// Почему не undefined?

function task4() {
    console.group('task 4');

    let s = 5;
    function sum() {
        console.log(s);
    }
    sum();

    console.groupEnd();
}

task4();