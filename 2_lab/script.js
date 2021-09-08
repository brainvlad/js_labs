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
