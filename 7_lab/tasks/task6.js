// task 6
// Создайте декоратор decorator(func), который должен возвращать обёртку,
// которая сохраняет все вызовы функции func() в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.

console.group('task 6');

function decorator(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    console.log(`a + b : ${a + b}`);
}

work = decorator(work);

work(1, 2);
work( 4, 5);

for (let args of work.calls) {
    console.log(`call : ${args.join()}`);
}

console.groupEnd();