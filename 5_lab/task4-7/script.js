//  task 4
//  Присвойте каждому игроку четырехзначный идентификатор (id может принимать значения в диапазоне [1, 9999])
//  и сохраните количество набранных им баллов за последнюю игру.
//  Для имитации набранных баллов используйте методы генерации случайных чисел.

//  task 5
//  Составьте список игроков, занявших 1-е, 2-е, 3-е места в результате последней игры.

//  task 6
//  Реализуйте возможность сохранять результаты последних 10 игр.
//  Использование какой структуры данных здесь рационально?

//  task 7
//  Увеличьте число игроков до n (n задает преподаватель) и определите победителей по результатам каждой игры.

class User{
    constructor(name, id) {
        this.userName = name;
        this.id = id;
    }
    userName = "";
    rating = 0;

    toString(){
        return `${this.userName} (${this.id}): ${this.rating}`;
    }
}

const users = new Set();

function RegisterUser() {
    const countRegister = +prompt('input count registers: ', '1');

    if (!numberChek(countRegister)){
        throw new Error('Incorrect value');
    }

    for (let i = 0; i < countRegister; i++) {
        let userName = prompt('Enter your nickname:');

        if (!stringEmptyChek(userName)) {
            throw new Error('Incorrect value');
        }

        if (IsUserNameExist(userName)) {
            alert('This name has been existing!');
        } else if (!IsUserNameExist(userName)) {
            users.add(new User(userName, parseInt(Math.random() * 10000)));
            document.getElementById('UsersList').innerHTML = '';

        }
    }

    alert('Welcome! You can to start.');
}

function IsUserNameExist(userName) {
    let result = false;

    users.forEach(function(value) {
        if (value.userName === userName){
            result = true;
        }
    });

    return result;
}

let count = 1;

function StartGame() {
    document.getElementById('Winners').innerHTML = '';
    if (users.size === 0)
        return;
    if (count > 10) {
        document.getElementById('UsersList').innerHTML = '';
        count = 1;
    }

    document.getElementById('UsersList').innerHTML += `Game #${count}`;
    users.forEach(value => {
        value.rating = parseInt(Math.random() * 100);
        const usersList = document.getElementById('UsersList');
        usersList.innerHTML += `
            <li>
                <span style="color: #65c889; font-weight: bold;">${value.userName}</span>
                (${value.id}): ${value.rating}
            </li>`;
    });

    count++;

    let winnersRating = new Array();
    for(let item of users.values()) {
        winnersRating.push(item.rating);
    }

    winnersRating.sort().reverse();
    for (let i = 0; i < 3; i++) {
        const rating = winnersRating[i];
        for(let user of users.values()){
            if (user.rating === rating){
                document.getElementById('Winners').innerHTML += `
                    ${i+1}: ${user}<br>
                `;
                break;
            }
        }
    }
}

function numberChek(data) {
    if (typeof (data) === 'number' &&
        !isNaN(data) &&
        data > 0) {
        return true;
    } else {
        return false;
    }
}

function stringEmptyChek(data) {
    if (data.trim() === '') {
        return false;
    } else {
        return true;
    }
}