(function aaa() {

    let buttons = document.querySelectorAll('.button')
    let equal = document.querySelector('.equal')
    let clear = document.querySelector('.clear')
    let display = document.querySelector('#display')
    let subDis = document.querySelector('.calc-operation')


    buttons.forEach((button) => {
        button.addEventListener('click', function(e) {
            let number = e.target.dataset.num;
            display.value += number;

        })
    })

    equal.addEventListener('click', function(e) {
        if (display.value === '') {
            display.setAttribute('placeholder', 'Pleace enter a value')
        } else {
            let ab = eval(display.value)
            display.value = ab

            subDis.innerHTML = `${ab}`
        }
    })

    clear.addEventListener('click', function(e) {
        display.value = ''
    })
})()