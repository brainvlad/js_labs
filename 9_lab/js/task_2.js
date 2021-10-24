// task 2
// Реализуйте класс Validator, который будет проверять строки. Разработать следующие методы:
// А) isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false.
//    Предусмотреть полную проверку, а не только на наличие символа @
// Б) isDomain для проверки домена (.by, .бай)
// В) isDate для проверки даты
// Г) isPhone для проверки телефона оператора А1( 29ххххххх, 44ххххххх)

class Validator {
    isEmail(email) {
        const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExpEmail.test(String(email).toLowerCase());
    }

    isDomain(domain) {
        const regExpDomain = /\.(by|бай)$/;
        return regExpDomain.test(domain);
    }

    isDate(date) {
        // dd-mm-yyyy
        const regExpDate = /(\d{2}\-)+\d{2}\-+\d{4}/g;
        return regExpDate.test(date);
    }

    isPhone(phone) {
        const regExpPhone = /((29|44)\d{7})/g;
        return regExpPhone.test(phone);
    }
}

console.group('task 2');

const validator = new Validator();

console.group('emails:');
console.log('example@example.com : ' + validator.isEmail('example@example.com'));
console.log('exampleexample.com : ' + validator.isEmail('exampleexample.com'));
console.log('example@examplecom : ' + validator.isEmail('example@examplecom'));
console.log('example@examplecom. : ' + validator.isEmail('example@examplecom.'));
console.groupEnd();

console.group('domains:');
console.log('.by : ' + validator.isDomain('.by'));
console.log('yandex. : ' + validator.isDomain('example.'));
console.log('yandex.by : ' + validator.isDomain('example.by'));
console.log('яндекс.бел : ' + validator.isDomain('example.бел'));
console.log('.бай : ' + validator.isDomain('.бай'));
console.log('example.ба : ' + validator.isDomain('example.ба'));
console.log('exampleбай : ' + validator.isDomain('exampleбай'));
console.log('example.бaй : ' + validator.isDomain('example.бай'));
console.groupEnd();

console.group('dates:');
console.log('12-11-2000 : ' + validator.isDate('12-11-2000'));
console.log('0ch.zero6.2000 : ' + validator.isDate('0ch.zero6.2000'));
console.log('012.44/2000 : ' + validator.isDate('012.44/2000'));
console.log('11-23-2000 : ' + validator.isDate('11-23-2000'));
console.groupEnd();

console.group('phones');
console.log('445555555 : ' + validator.isPhone('445555555'));
console.log('120438821 : ' + validator.isPhone('120438821'));
console.log('291343251 : ' + validator.isPhone('291343251'));
console.log('44123 : ' + validator.isPhone('44123'));
console.groupEnd();

console.groupEnd();