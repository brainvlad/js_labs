/**
 * 1.  Выполните форматирование кода, согласно рекомендациям
*/
function pow(x, n) {
    let result = 1;
    for(let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

x = prompt("Число x :", '');
n = prompt("Степень n :", '');

if (n < 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}else{
    alert(pow(x, n));
}

/** 2.	Объявите переменные и задайте им следующие значения: имя пользователя,
название города, год рождения, красный цвет, ответ пользователя (да/нет), бесконечность, 532,
периметр четырехугольника 120 мм, сообщение пользователю «Введенные данные неверны». */

let userName = "Pipirka";
let city = "Minsk";
let bYear = 2000;
let redColor = "#ff0000";
let userAnswer = false;
let inf = Infinity;
let num = 532;
let str = "периметр четырехугольника 120 мм";
let message = "Веденные данные неверны";

/**
 * 3.	Определите тип перменных:
 */
{
let a = 5; // Number
let name = "Name"; // String
let i = 0; // Number
let double = 0.23; // Number
let result = 1/0; // Nan
let answer = true; // Boolean
let no = null; // null
}

/**
 * 4.	 Вычислите площадь четырехугольника А,
 * если его стороны равны 45 мм и 21 мм.
 */
{
    console.log('task_4')

     function rectangleArea(a, b) {
        return a * b;
     }

     const sideRectangleA = 41;
     const sideRectangleB = 21;

     console.log(`answer : ${rectangleArea(sideRectangleA, sideRectangleB)} mm`);
}

 /**
  * 5.	Сколько квадратов В со сторонами 5 мм поместятся в четырехугольник А (45мм х 21мм). 
  */

{
    console.log('task_5')

    const sideRectangleA = 41;
    const sideRectangleB = 21;
    const sideSquare = 5;

    const insideQuantity = getInsideQuantity(sideRectangleA, sideRectangleB, sideSquare);
    console.log(`answer : ${insideQuantity}`);
}

function getInsideQuantity(sideRectangleA, sideRectangleB, sideSquare) {
    const countSideSquareA = Math.trunc(sideRectangleA / sideSquare);
    const countSideSquareB = Math.trunc(sideRectangleB / sideSquare);

    return countSideSquareA * countSideSquareB;
}

/**
 * 6.	Что больше а или b? 
 */
{
    console.log('task_6');

    let i = 2;
    const a = ++i;
    const b = i++;

    console.log(`a = ${a}\nb = ${b}`)
    console.log('answer : ')
    if (a > b){
        console.log('a > b');
    }else if(b > a){
        console.log('b > a');
    }else{
        console.log('a = b')
    }
}

/**
 * 7.	Что больше «Привет» или «привет»?
 * «Привет» или «Пока»?
 * 45 или «53»?
 * false или 3? true или «3»? 3 или «5мм»? null или undefined?
 */
{
    console.log('task_7');

    console.log('Привет' > 'привет'); // false
    console.log('Привет' > 'Пока'); // true
    console.log(45 > '53'); // false
    console.log(false > 3); // false
    console.log(true > 3); // false
    console.log(3 > '5мм'); // false
    console.log(null > undefined); // false
}

/**
 * 8.	Выведите сообщение о том, что введенные пользователем данные неверные.
 */

 {
     alert("Веденные данные неверны!")
 }

 /**
  * 9.	Проверьте ответ пользователя на секретный вопрос. Ответ вводит пользователь в окно prompt.
  */

  {
      const secretAnswer = prompt('Концовка анекдота про гвозди: ', '');
      if (secretAnswer === "А вот они"){
          alert(true);
      }else{
          alert(false);
      }
  }

  /**
   * 10.	Пользователь выполняет вход в личный кабинет (вводит логин и пароль в prompt).
   * Выведите соответствующее сообщение об
   * успешном/неуспешном входе в зависимости о правильности введенных данных.
   */

   {
       const user = {
           login: 'nagibator228',
           password: 'qwerty'
       }

       const userLogin = prompt('login :', '');
       const userPassword = prompt('password :');

       if (userLogin === user.login &&
           userPassword === user.password) {
           alert(true);
       }else{
           alert(false);
       }
   }


   /**
    * 11.	 У студента 3 экзамена: русский, математика, английский.
    * Если он сдаст все экзамены, то его переведут на следующий курс. Если он не сдаст ни одного экзамена, то его отчислят.
    * Если он не сдаст хотя бы один экзамен, то его ожидает пересдача. Иначе – остается на второй год.
    */

    {
        const russianIsCompleted = confirm('Русский');
        const mathIsCompleted = confirm('Математика');
        const englishIsCompleted = confirm('Англиский');

        if (russianIsCompleted && mathIsCompleted && englishIsCompleted) {
            alert('Перевод на следующий курс');
        } else if (russianIsCompleted || mathIsCompleted || englishIsCompleted) {
            alert('Пересдача');
        } else if (!(russianIsCompleted && mathIsCompleted && englishIsCompleted)) {
            alert('Вы отчислены! :-)')
        } else {
            alert('Остаетесь на 2-й год')
        }

    }

    /**
     * 12. Пользователь вводит число а и число b. Вычислите сумму чисел.
     */
    {
        const a = +(prompt('input a :', 0));
        const b = +(prompt('input b :', 0));
        const sum = a + b;
        alert(sum);
    }

    /**
     * 13. Вычислите и поясните:
     */

     {
         console.log('task_13');

         console.log(true + true);
         console.log(0 + "5");
         console.log(5 + "mm");
         console.log(8/Infinity);
         console.log(9 * "\n9");
         console.log(null - 1);
         console.log("5" - 2);
         console.log("5px" - 3);
         console.log(true - 3);
         console.log(7 || 0);
     }

     /**
      * 14. К каждому четному числу в диапазоне [1, 10]
      * прибавьте 2, а каждое нечетное число преобразуйте
      * к виду «Xмм».
      * Выведите результат.
      */

      {
          console.log('task_14');

          let range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

          console.log(range);
          range = range.map((element,index,array) => {
              if (element % 2 === 0) {
                  element += 2;
              }else{
                  element = `${element}mm`;
              }
              return element;
          });
          console.log(range);
      }

      /**
       * 15.	 Пользователь может
       * вводить числа до тех пор, пока
       * введенное число меньше 100.
       */

       {
           let num = 0;
           while(num < 100){
               num = +(prompt(`${num} < 100`, 0));
           }
       }

       /**
        * 16.   По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
        * Номер дня вводит пользователь.
        */

        {
            console.log('task_16');

            const userNumDay = prompt('Введите номер дня недели:', '');
            switch(userNumDay) {
                case 1:console.log('Понедельник'); break;
                case 2:console.log('Вторник'); break;
                case 3:console.log('Среда'); break;
                case 4:console.log('Четверг'); break;
                case 5:console.log('Пятница'); break;
                case 6:console.log('Суббота'); break;
                case 7:console.log('Воскресенье'); break;
                default: console.log('Зачем ты вводишь что-то не то? А?');
            }
        }