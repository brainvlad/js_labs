// task 1
// Реализуйте функцию без параметров.
// Вызовите ее с произвольным количеством аргументов.
// Если вы передали не более 3-х аргументов, то функция должна возвращать строку, состоящую из значений всех аргументов.
// Если вы передали более 3-х, но не более 5-ти аргументов – то типы аргументов.
// Если более 5-ти и не более 7-ми – то   количество аргументов.
// Если более 7-ми – то сообщение о том, что количество аргументов очень большое.

function task1() {
    console.group('task1');

    const countArguments = arguments.length;
    let arrayOfArguments = new Array();

    for (let i = 0; i < countArguments; i++) {
        arrayOfArguments[i] = arguments[i];
    }

    if (countArguments < 3) {
        console.group(`count of arguments (${countArguments}). string:\n`)

        let stringFromArguments = new String();
        arrayOfArguments.forEach(element => {
           stringFromArguments += element;
        });

        console.log(stringFromArguments);
        console.groupEnd();
    } else if (countArguments < 5) {
        console.group(`count of arguments (${countArguments}). types:\n`)

        arrayOfArguments.forEach(element => {
           console.log(element + ' : ' + typeof(element));
        });

        console.groupEnd();
    } else if (countArguments < 7) {
        console.group(`count of arguments (${countArguments}). count:\n`)
        console.log(countArguments);
        console.groupEnd()
    } else {
        console.group(`count of arguments (${countArguments}). message:\n`);
        console.log('the number of arguments is very large');
        console.groupEnd();
    }

    console.groupEnd();
}

task1(12, '12');
task1(12, 'qwe', true, function (){});
task1(12, 'qwe', true, function (){}, 1234, 'gsgsre');
task1(12, 'qwe', true, function (){}, 1234, 'gsgsre', '123', 123, 435, 543);