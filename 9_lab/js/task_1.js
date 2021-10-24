// task 1
// Представьте фигуры на картинке в виде объектов. Обратите внимание, фигуры имеют одинаковые параметры.
// Выведите: свойства, которые отличают фигуру «зеленый круг»; свойства, которые описывают фигуру «треугольник с
// тремя линиями»; есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры.

console.group('task 1')

const bgYellow = {
    bgColor: "yellow"
}

const radius = {
    radius: 10
}

const edgeLength = {
    length: 10
}

const bigSquare = {
    __proto__: bgYellow,
    size: 5
}

const smallSquare = {
    __proto__: bgYellow,
    size: 10
}

const whiteCircle = {
    __proto__: radius,
    bgColor: "white"
}

const greenCircle = {
    __proto__: radius,
    bgColor: "green"
}

const triangleFromOneLine = {
    __proto__: edgeLength,
    countLines: 1
}
const triangleFromThreeLine = {
    __proto__: edgeLength,
    countLines: 3
}

const figures = {
    bigSquare,
    smallSquare,
    whiteCircle,
    greenCircle,
    triangleFromOneLine,
    triangleFromThreeLine
}

console.log(figures)

console.group('green circle:');
for (let prop in greenCircle) {
    console.log(prop);
}
console.groupEnd();

console.group('triangle from three lines:');
for (let prop in triangleFromThreeLine) {
    console.log(prop);
}
console.groupEnd();

console.group('own property small square:');
console.log(Object.keys(smallSquare));
console.groupEnd();

console.groupEnd();