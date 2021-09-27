// task 11
// Пользователь совершает покупку (вводит сумму стоимости товаров).
// Если сумма покупки превышает 200 рублей, то пользователь получает скидку 10%, если более 400 р – 20%.
// Реализуйте функцию discount(), которая принимает параметр «размер скидки».
// Параметр S – сумма покупки.

function task11() {
    console.group('task 11');

    function discount(amountOfDiscount) {
        return function (s) {
            if (s > 200 &&
                s < 400) {
                s = s - (s * (0.1 + amountOfDiscount));
                console.log(`final s : ${s}`);
            } else if (s > 400) {
                s = s - (s * (0.2 + amountOfDiscount));
                console.log(`final s : ${s}`);
            } else {
                s = s - (s * amountOfDiscount);
                console.log(`final s : ${s}`);
            }
        }
    }

    const s = +prompt('input total sum: ', '100');
    if (!numberChek(s)) {
        throw new Error('Incorrect value');
    }

    let sale = discount(0.1);
    sale(s);

    console.groupEnd();
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