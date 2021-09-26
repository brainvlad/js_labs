//  task 1
//  Пользователи регистрируются в игре, вводя свое имя.
//  Проверьте является ли имя пользователя уникальным.

let users = new Array();
console.log('task 1:');

function task1() {
    let userNickname = prompt('input nickname: ', 'nickname');

    if (userNickname.trim() === '') {
        throw new Error('Value is Empty');
    }

    if (!users.includes(userNickname)) {
        users.push(userNickname);
    } else {
        console.log(`name ${userNickname} has been busy`)
    }

    console.log('all nicknames:\n' + users);
}

//  task 2
//  Реализуйте возможность сортировки списка игроков по алфавиту в прямом и обратном порядке;
//  поиск игроков по длине имени;
//  поиск игроков по первой букве имени.

function task2() {
    console.log('task 2:')

    const nicknameLength = +prompt('input length nickname:', '5');
    const nicknameFirstSymbol = prompt('input first symbol:', 'a');
    let usersFromLength = new Array();
    let usersFromFirstSymbol = new Array();

    if (typeof(nicknameLength) === 'number' &&
        !isNaN(nicknameLength)) {
        usersFromLength = users.map((element, index, array) => {
            if (element.length === nicknameLength) {
                return element;
            }
        });
        usersFromLength = usersFromLength.filter(element => {
            return element != null;
        });
    } else {
        throw new Error('Incorrect value');
    }

    if (nicknameFirstSymbol.length === 1) {
        usersFromFirstSymbol = users.map((element, index, array) => {
           if (element[0] === nicknameFirstSymbol) {
               return element;
           }
        });
        usersFromFirstSymbol = usersFromFirstSymbol.filter(element => {
            return element != null;
        });
    } else {
        throw new Error('Incorrect value');
    }

    console.log('users alphabetically sort:\n' + users.sort());
    console.log('users alphabetically reverse sort:\n' + users.reverse());
    console.log(`users from length (${nicknameLength}):\n` + usersFromLength);
    console.log(`users from first symbol (${nicknameFirstSymbol}):\n` + usersFromFirstSymbol);
}