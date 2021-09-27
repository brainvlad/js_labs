// task 8
// Выведите имена всех функций из предыдущих задач.

function task8() {
    console.groupCollapsed('task8');

    Object.getOwnPropertyNames(window).filter((prop) => {
        return typeof window[prop] === 'function';
    }).forEach(item => {
        console.log(item);
    });

    console.groupEnd();
}

task8();