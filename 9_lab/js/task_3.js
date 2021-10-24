// task 3
// Реализовать класс Student (имя, фамилия, факультет, № зачетки).
// Конструктор,
// метод getFullName() вывод имени и фамилии студента,
// метод getCourse(), выводит текущий курс студента, вычисляя его из номера зачетки,
// метод getDev(), который выводит количество студентов специальности ДЭВИ.
//
// Пример:
// Номер зачетки 71201300, где 7 – шифр факультета (7- ФИТ, 6- ИД),
// далее одна цифра шифр специальности (1-ПОИТ, 2-ИСИТ, 3-ДЭВИ, 4- ПОИБМС),
// 20 – две последние цифры года поступления,
// далее одна цифра – 1-бюджет, 2- платники, и три цифры- порядковый номер.
//
// Создать массив из 10 студентов, вывести в табличной форме по курсам.

class Student {

    constructor(firstName, lastName, department, studentNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.studentNumber = studentNumber;
    }

    get department() {
        return this._department;
    }
    get studentNumber() {
        return this._studentNumber;
    }

    set department(value) {
        if (value !== 6 &&
            value !== 7) {
            throw new Error("incorrect department");
        } else {
            this._department = value;
        }
    }
    set studentNumber(value) {
        const regExpSerial = /^\d{8}$/;
        if (regExpSerial.test(value)) {
            this._studentNumber = value;
        } else {
            throw new Error("incorrect student number");
        }
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getCourse() {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const year = String(currentYear).slice(0,2) + this.studentNumber.slice(2,4);
        return currentMonth > 7 ? (+currentYear) - (+year) + 1 : (+currentYear) - (+year);
    }

    static getDev(arr) {
        let count  = 0;
        arr.forEach((item) => {
            if (item.studentNumber[1] === '3')
                count++;
        });
        return count;
    }
}

const student_1 = new Student('Владислав', 'Баранов', 7, '73191300');
const student_2 = new Student('Ольга', 'Бабич', 6, '61201300');
const student_3 = new Student('Анастасия', 'Ковтик', 7, '71201300');
const student_4 = new Student('Александр', 'Радкевич', 7, '71201300');
const student_5 = new Student('Настя', 'Сахновская', 6, '63201300');
const student_6 = new Student('Ксения', 'Боболя', 7, '73201300');
const student_7 = new Student('Милана', 'Данильченко', 7, '71201300');
const student_8 = new Student('Кирилл', 'Синькевич', 6, '61201300');
const student_9 = new Student('Софья', 'Кускова', 7, '73191300');
const student_10 = new Student('Яна', 'Хаврукова', 6, '63191300');

const arrStudents = [
    student_1,
    student_2,
    student_3,
    student_4,
    student_5,
    student_6,
    student_7,
    student_8,
    student_9,
    student_10
];

const specialties = {
    6: 'ИД',
    7: 'ФИТ'
}

console.group('task 3');

for (let department = 6; department <= 7; department++) {
    console.group(specialties[department]);
    for (let course = 1; course <= 4; course++) {
        console.group('Курс ' + course);
        arrStudents.forEach(element => {
            if (element.department === department) {
                if (element.getCourse() === course) {
                    console.log(element.getFullName());
                }
            }
        });
        console.groupEnd();
    }
    console.groupEnd();
}
console.log('Количество студентов на ДЭВИ : ' + Student.getDev(arrStudents));
console.groupEnd();

