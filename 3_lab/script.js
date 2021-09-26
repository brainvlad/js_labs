//  task 1
//  Пользователь вводит данные.
//  Если он ввел число, то преобразуйте его в 16-ричную систему счисления (вывод в верхнем регистре).
//  Если число дробное – округлите его до целого.
//  Если пользователь ввел текст, то преобразуйте его к верхнему и нижнему регистру.

function task1() {
    console.log('task 1:')

    let userData = prompt('input data: ', '0');

    if (isNaN(userData)) {
        const userDataUpper = userData.toUpperCase();
        const userDataLower = userData.toLowerCase();

        console.log(`is String\n` +
                    `upper string: ${userDataUpper}\n` +
                    `lower string: ${userDataLower}`);
    } else {
        userData = +userData;

        if (Number.isInteger(userData)) {
            let hexString = userData.toString(16).toUpperCase();

            if (hexString.length % 2) {
                hexString =('0' + hexString);
            }

            console.log(`is Integer\n` +
                        `HEX: ${hexString}`)
        } else {
            const intUserData = userData.toFixed();

            console.log(`is Float\n` +
                        `fixed: ${intUserData}`);
        }
    }

}