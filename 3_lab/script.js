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
                hexString ='0' + hexString;
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

//  task 2
//  На сайте есть галерея. Ширина блока галереи 940px.
//  При добавлении фотографии пользователь указывает ее ширину в пикселях.
//  Блок галереи не имеет внутренних отступов, каждая фотография имеет внешние отступы по 5px.
//  Исключены левый отступ у левого крайнего изображения и правый – у правого крайнего.
//  Сколько фотографий поместить в ряд и какой размер отступов должен быть, если отступы должны быть одинаковыми?

function task2() {
    console.log('task 2:');

    const widthGallery = 940;
    let sumWidthPhotos = 0;
    let countPhotoInGallery = 0;

    while (true) {
        let userWidthPhoto = +prompt('input width photo: ', '10');

        if (typeof(userWidthPhoto) !== 'number' ||
            Math.sign(userWidthPhoto) !== 1) {
            throw new Error('Incorrect value');
        }

        if (countPhotoInGallery !== 0) {
            userWidthPhoto += 10;
        }

        if (sumWidthPhotos + userWidthPhoto <= widthGallery) {
            countPhotoInGallery++;
            sumWidthPhotos += userWidthPhoto;
        } else {
            break;
        }
    }

    const gapGallery = getGapGallery(widthGallery, sumWidthPhotos, countPhotoInGallery);

    console.log(`in gallery ${countPhotoInGallery} photos\n` +
                `gallery gap: ${gapGallery}`)

    // получаем расстаяние между элементами галереи
    function getGapGallery(width, sumWidthPhotos, count) {
        if (count === 0) {
            return 'gap does not exist';
        } else if (count === 1) {
            const padding = (width - sumWidthPhotos) / 2;
            return `photo in the center. padding: ${padding}`;
        } else {
            const gap = ((width - sumWidthPhotos) / (count - 1)) + 10;
            return `${gap}px`;
        }
    }
}

// task 3
// Пользователь ввел число.
// Округлите его до наибольшего, наименьшего и ближайшего целого.

function task3() {
    console.log('task 3:');

    const userNumber = +prompt('input number: ', '0');

    if (typeof(userNumber) === 'number' &&
        !isNaN(userNumber)) {
        const numFloor = Math.floor(userNumber);
        const numCeil = Math.ceil(userNumber);
        const numRound = Math.round(userNumber);

        console.log(`user number: ${userNumber}\n` +
            `floor: ${numFloor}\n` +
            `ceil: ${numCeil}\n` +
            `numRound: ${numRound}`);
    } else {
        throw new Error('Incorrect value');
    }
}


//  task 4
//  Пользователь хочет изменить цвет фона, для этого он вводит цвет в формате RGB.
//  Преобразуйте его в 16-ричную систему и предложите пользователю контрастный цвет текста (черный или белый).

function task4() {
    console.log('task 4:')

    let userBackgroundColorRGB = prompt('Enter RGB coordinates separated by commas (,):').split(',');
    const userBackgroundColorHEX = getHEX(userBackgroundColorRGB);

    if (userBackgroundColorHEX.length !== 7) {
        throw new Error('Incorrect value');
    }

    document.querySelector("body").style.backgroundColor = userBackgroundColorHEX;

    let userTextColor = confirm('Text color: OK - Black, Cancel - White');
    if(userTextColor){
        userTextColor = '#000000';
        document.querySelector("body").style.color = userTextColor;
    }else{
        userTextColor = '#ffffff';
        document.querySelector("body").style.color = userTextColor;
    }

    console.log(`background color: ${userBackgroundColorHEX}\n` +
                `text color: ${userTextColor}`);

    // получаем цвет в HEX
    function getHEX(RGB) {
        let HEX = '#';

        RGB.forEach(color => {
            let colorHEX = +color;

            if (colorHEX < 0 ||
                colorHEX > 255) {
                    return false;
            }

            colorHEX = colorHEX.toString(16);
            if (colorHEX.length % 2) {
                colorHEX = '0' + colorHEX;
            }

            HEX += colorHEX;
        });

        return HEX;
    }
}


//  task 5
//  Выпускник сдает ЦТ по русскому языку.
//  Ему дано словарное слово, необходимо ввести в текстовое поле правильный вариант ответа.
//  Проверьте его ответ и сообщите в каком символе он допустил ошибку, если она есть.

function task5() {
    console.log('task 5:');

    let vocabularyWord = 'дорога';
    let userWord = prompt('input word "дорога": ', 'word').toLowerCase();
    let countCorrect = 0;

    for (let i = 0; i < vocabularyWord.length; i++){
        if (vocabularyWord[i] !== userWord[i]){
            console.log(`${i+1} symbol incorrect\n`);
        }else{
            countCorrect++;
        }
    }
    if (vocabularyWord.length === userWord.length && vocabularyWord.length === countCorrect){
        console.log('correct!');
    } else {
        console.log('incorrect:(');
    }
}