const form = document.getElementById("form")

const chekForm = (form) => {
    const inputs = form.querySelectorAll('input')
    let flag = true

    inputs.forEach(input => {
        if (!input.value) {
            flag = false;
        }
    });
    return flag
}


const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    if (chekForm(form)) {
        console.log('Форма заполнена')
    } else {
        console.log('Форма НЕ заполнена')
    }
})