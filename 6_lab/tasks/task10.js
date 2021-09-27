// task 10
// Реализуйте каррированную функцию, которая рассчитывает объем прямоугольного параллелепипеда.
// Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, у которых одно ребро одинаковой длины.

function task10() {
    console.group('task 10');

    function curry(f) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return f(a ,b, c);
                }
            }
        }
    }

    const p = (a, b, c) => {
        return a * b * c;
    };

    let carriedP = curry(p);
    let pFixedA = carriedP(2);

    console.log(`curry output (a = 2) : ${pFixedA(2)(3)}`);
    console.log(`curry output (a = 2): ${pFixedA(2)(3)}`);
    console.log(`regular output : ${p(2,2,3)}`);

    console.groupEnd();
}

task10();