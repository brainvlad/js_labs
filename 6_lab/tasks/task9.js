// task 9
// Пользователь проходит анкетирование, отвечая на вопросы да/нет.
// Следующий вопрос появляется в окне только после ответа на текущий.
// Всего n вопросов.
// Ответы пользователя сохраняются в объекте, который содержит также имя пользователя и его рейтинг –  разница ответов «да» и «нет».
// После каждого ответа пользователь видит количество своих ответов «да» и «нет» и текущий рейтинг.
// Разработайте функцию, которая возвращает конечный объект пользователя.
// Для решения задачи нельзя использовать циклы, глобальные переменные для значений и свойств объекта.

function task9() {
    console.group('task 9');

    let userAnswers = {
        name: 'Vladislav',
        yesCount: 0,
        noCount: 0,
        rating: 0,
        getAnswer() {
            if (confirm(`Vladislav [${this.yesCount}, ${this.noCount}, ${this.rating}]` +
                        '\n\nYour Answer:')) {
                this.yesCount++;
                this.rating++;
            } else {
                this.noCount++;
                this.rating--;
            }
            if (this.yesCount + this.noCount < questionsCount) {
                this.getAnswer();
            } else {
                console.group('final object:', this);
                console.groupEnd();
            }
        }
    }

    const questionsCount = +prompt('input count questions:', '5');
    userAnswers.getAnswer();

    console.groupEnd();
}