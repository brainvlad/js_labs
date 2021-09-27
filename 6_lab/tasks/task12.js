// task 12
// Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down.
// Объект совершает 10 шагов в заданном направлении
// (т.е. высчитываются и выводятся в консоль соответствующие координаты) и запрашивает новую команду.
// Разработайте генератор, который возвращает координаты объекта, согласно заданному направлению движения.

function task12() {
    console.group('task 12');

    const point = {
        x: 0,
        y: 0
    }

    function* getLocation() {
        let direction = '';

        console.group('coordinates of point: ');
        for (let i = 0; i < 10; i++) {
            direction = prompt('Direction? (left, right, up, down)', 'up');

            switch (direction) {
                case 'left':
                    point.x -= 10;
                    console.log(point);
                    break;
                case 'right':
                    point.x += 10;
                    console.log(point);
                    break;
                case 'up':
                    point.y += 10;
                    console.log(point);
                    break;
                case 'down':
                    point.y -= 10;
                    console.log(point);
                    break;
                default:
                    console.error('incorrect value');
                    i--;
            }
        }
        console.groupEnd();
    }

    while(!getLocation().next().done) {
        console.log(getLocation().next().value);
    }

    console.groupEnd();
}