// task 3
// Создайте функцию вычисления суммы s двух чисел a и b.
// a передается в качестве аргумента функции, b на 1 больше a – рассчитывается в функции.
// Функция выводит сумму s.
// Чему будет равен LexicalEnvironment на каждом шаге выполнения функции (укажите в комментариях)?

/*
 globalLE: null
 */

function task3(a){
    console.group('task 3')

    let b; // {b: undefined, globalLE}
    b = a; // {b: a, globalLE}
    b += 1; // {b: a+1, globalLE}
    let s; // {b: a+1, s: undefined, globalLE}
    s = a + b; // {b: a+1, s: a+b, globalLE}
    console.log('s : ' + s);

    console.groupEnd();
}

task3(9)