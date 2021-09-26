// task 1
// Вы – модератор на форуме о собаках.
// Существуют определённые правила модерации комментариев пользователей:
// длина комментария не более n символов;
// запрещается использовать слова с корнем «кот» – он заменяется на символ *;
// слова с корнем «собак» должны быть с большой буквы;
// перед словом «пес» обязательно должно быть слово «многоуважаемый».
// Выполните модерацию комментария пользователя и опубликуйте на форуме, правильный комментарий.

function task1() {
    console.log('task 1:');

    let userComment = prompt('input your comment: ', 'comment');

    console.log(`original string: ${userComment}`);

    userComment = userComment.substring(0, 100);
    userComment = userComment.replaceAll('кот', '*');
    userComment = userComment.replaceAll('собак', 'Собак');
    userComment = userComment.replaceAll('пес', 'многоуважаемый пес');
    userComment = userComment.replaceAll('многоуважаемый многоуважаемый', 'многоуважаемый');

    console.log(`change string: ${userComment}`);
}

// task 2
// Пользователь вводит свое имя, которое может состоять из одного или нескольких слов.
// Выведите  имя следующим образом:
// если оно состоит из одного слова, то слева и справа добавляются по 3 символа *;
// если из нескольких слов – то каждое слово на отдельной строке и все слова выравнены по правому краю.

function task2() {
    console.log('task 2:')

    const space = ' ';
    const division = document.getElementById('task-2');
    let userNickname = prompt('input your nickname: ', 'nickname').trim().split(space);

    if (userNickname.length === 1) {
        userNickname = `***${userNickname}***`;

        division.style.textAlign = 'left';
        division.textContent = userNickname;
    } else {
        division.textContent = '';

        division.style.textAlign = 'right';
        userNickname.forEach(str => {
            division.append(str + '\n');
        });
    }

    console.log('task 2 competed');
}

// task 3
// По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
// Используйте объект. Выведите все нечетные дни (номер и название) и их количество.

function task3() {
    console.log('task 3:')

    const weekDays = {
        1 : 'понедельник',
        2 : 'вторник',
        3 : 'среда',
        4 : 'четверг',
        5 : 'пятница',
        6 : 'суббота',
        7 : 'воскресенье'
    };

    let presentDay = new Date(Date.now()).getDay();
    const daysOfWeek = Object.keys(weekDays);
    let countOddDays = 0;

    if (presentDay === 0) {
        presentDay = 7;
    }

    daysOfWeek.forEach(day => {
        if (day % 2 !== 0) {
            console.log(weekDays[day]);
            countOddDays++;
        }
    });

    console.log(`count odd days: ${countOddDays}`);
    console.log(`present Day: ${weekDays[presentDay]}`);
}