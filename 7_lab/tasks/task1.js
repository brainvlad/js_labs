// task 1
// Преобразуйте счетчик таким образом, чтобы у него было больше возможностей:
// обнулить счетчик, установить значение, получить следующее значение.
// Для этого вместо функции (*) счетчик должен возвращать объект с соответствующими методами.
// Вызов методов соответственно изменится на  counter.getNext(), counter.set(), counter.reset().
// Теперь вызов счетчика вместо counter() осуществляется как counter.getNext()
// (где getNext() – метод, возвращающий следующее значение счетчика).
// Это неудобно.
// Вернитесь к вызову counter() и задайте ему соответствующие свойства
// (свойства функции counter()) для обнуления и установки значения счетчика.

function task1() {
    console.group('task 1');

    function makeCounter() {
         function counter() {
            return counter.currentCount++;
        }

        counter.currentCount = 0;

        return counter;
    }

    let counter = makeCounter();

    console.log(counter());
    console.log(counter());
    console.log(counter());

    counter.currentCount = 0;

    console.log(counter());
    console.log(counter());
    console.log(counter());

    counter.currentCount = 12;

    console.log(counter());
    console.log(counter());
    console.log(counter());

    console.groupEnd();
}

task1();