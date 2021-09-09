// task 1
// Напишите функцию, которая рассчитывает площадь, диаметр и длину окружности круга.
// Радиус круга вводит пользователь.

function getCircleInfo() {
    const radiusCircle = +prompt('input radius: ', '1');

    if (typeof(radiusCircle) === 'number' &&
        !isNaN(radiusCircle)) {
        const areaCircle = Math.PI * Math.pow(radiusCircle, 2);
        const diameterCircle = radiusCircle * 2;
        const circumferenceCircle = 2 * Math.PI * radiusCircle;
        alert(`area : ${areaCircle}\n` +
              `diameter : ${diameterCircle}\n` +
              `circumference : ${circumferenceCircle}`);
    } else {
        throw new Error('Incorrect value, придурок');
    }
}

// task 2
// Реализуйте функцию, которая сообщает пользователю, что его заказ на сумму s принят.
// Пользователь добавляет товары в корзину (вводит стоимость каждого товара в окно prompt).
// Если сумма стоимости товаров превысила денежные средства на банковской карте покупателя,
// сообщите об этом пользователю и предупредите, что последний товар он купить не может,
// поэтому он должен либо завершить покупку, либо выбрать товар с меньшей стоимостью,
// которая не превышает остаток n на карте. Чтобы завершить покупку пользователь должен ввести «0».

function addGoods() {
    const moneyUser = +prompt('input your money : ', '10');

    if (typeof(moneyUser) === 'number' &&
        !isNaN(moneyUser)) {

        let priceGood;
        let priceAll = 0;

        while (priceGood !== 0) {
            priceGood = +prompt('input price good :', '5')
            if (typeof(priceGood) === 'number' &&
                !isNaN(priceGood)) {
                if (priceAll + priceGood > moneyUser) {
                    alert('insufficient funds. select another product or complete the purchase')
                } else {
                    priceAll += priceGood;
                }
            } else {
                throw new Error('Incorrect value, придурок');
            }
        }

        alert(`you purchased goods ${priceAll}/${moneyUser}`);
    } else {
        throw new Error('Incorrect value, придурок');
    }

}

// task 3
// Реализуйте функцию с тремя параметрами.
// Первый параметр по умолчанию.
// Третий параметр вводит пользователь.
// Функция возвращает строку из трех параметров.

const string = (num1 = 10, num2, num3 = +prompt('input number :', '')) => {
    return new String(`num1 : ${num1}\n` +
                            `num2 : ${num2}\n` +
                            `num3 : ${num3}`);
}

// task 4
// Реализуйте функцию, которая рассчитывает количество присутствующих студентов.
// Имена присутствующих студентов пользователь вводит в модальное окно.

function countOfStudents() {
    const studentsList = new Array();
    let nameStudent = new String();

    while(true) {
        nameStudent = prompt("input student name : ", '');
        if (nameStudent) {
            studentsList.push(nameStudent);
        } else {
            break;
        }
    }

    return alert(`count of students : ${studentsList.length}`);
}

// task 5
// Известны стороны четырехугольника a и b.
// Если это квадрат, то функция params() возвращает его периметр, если прямоугольник –  то площадь.
// Создайте params() как Function Declaration и Function Expression.
// Вызовите ее при создании («на месте»).

function getParams() {
    const sideA = +prompt('input side A : ', '1');
    const sideB = +prompt('input side B : ', '1');

    if (typeof(sideA) === 'number' &&
        typeof(sideB) === 'number' &&
        !isNaN(sideA) &&
        !isNaN(sideB)) {

        /* Function Declaration */
        alert(params(sideA, sideB))
        function params(sideA, sideB) {
            return sideA === sideB ? sideA * 4 : sideA * sideB;
        }

        /* Function Expression */
        // const params = (sideA, sideB) => {
        //     return sideA === sideB ? sideA * 4 : sideA * sideB;
        // }
        // alert(params(sideA, sideB));


    } else {
        throw new Error('Incorrect value, придурок');
    }
}

// task 6
// Вы забыли пароль от электронной почты.
// Вы помните, что он состоит из 8 символов нижнего регистра.
// Первые 5 – это буквы английского алфавита, последние 3 – цифры.
// Один пароль вы успеваете ввести за 3 секунды.
// Сколько максимум времени вам понадобится, чтобы подобрать пароль?
// Выведите результат в виде строки «y лет m месяцев d дней h часов min минут s секунд».
// Для простоты решения можно принять, что в месяце 30 дней.

function getPasswordSearchTime() {
    const countPasswordVariant = Math.pow(26, 5) * Math.pow(10, 3);
    const secondsAll = countPasswordVariant * 3;

    const date = new Date();
    const dateFinal = new Date();

    dateFinal.setSeconds(dateFinal.getSeconds() + secondsAll);

    const year = Math.trunc(secondsAll / (3600 * 24 * 30 * 12));
    const month = Math.trunc((secondsAll - year * 3600 * 24 *30 * 12) / (3600 * 24 * 30));
    const day = Math.trunc((secondsAll - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30) / (3600 * 24));
    const hour = Math.trunc((secondsAll - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24) / 3600);
    const min = Math.trunc((secondsAll - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24 - hour *3600) / 60);
    const sec = secondsAll - year * 3600 * 24 * 30 * 12 - month * 3600 * 24 * 30 - day * 3600 * 24 - hour * 3600 - min * 60;

    const answer = new String(`now : ${date}\n` +
                                    `final : ${dateFinal}\n` +
                                    `${year} years ${month} months ${day} days ${hour} hours ${min} minutes ${sec} seconds`);

    return answer;
}