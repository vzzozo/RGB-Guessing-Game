let n, s;
document.querySelector('.diff2').addEventListener('click', () => {
    //2x2
    n = 2
    s = 2
    for (let i = 0; i < n; i++) {
        document.querySelector('.randomColoredBtns').innerHTML += "<br>"
        for (let j = 0; j < n; j++) {
            document.querySelector('.randomColoredBtns').innerHTML += `<button class="coloredBtn"></button>`
        }
    }

    let coloredButton = document.querySelectorAll('.coloredBtn')
    let colors = []
    let guessingRgbCode = document.querySelector('.random-rgb-color')
    let btnSize = 90 / n + '%';
    function randomColorGenerator() {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`
    }
    document.querySelector('.score').textContent = s;
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].style.backgroundColor = randomColorGenerator();
        colors[i] = window.getComputedStyle(coloredButton[i]).backgroundColor;
        coloredButton[i].style.width = btnSize
        coloredButton[i].style.height = btnSize
    }

    let rndColorFromArray = (Math.floor(Math.random() * colors.length) + 1) - 1
    guessingRgbCode.textContent = colors[rndColorFromArray]
    console.log(rndColorFromArray);
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].addEventListener('click', () => {
            if (window.getComputedStyle(coloredButton[i]).backgroundColor === guessingRgbCode.textContent) {
                guessingRgbCode.textContent = 'You WON!!!'
                document.querySelector('body').style.backgroundColor = '#60b347'
                document.querySelector(".message").textContent = "Congratz!💥"
            }
            else {
                s--;
                document.querySelector('.score').textContent = s;
                if (s === 0) {
                    document.querySelector(".message").textContent = "Maybe next time..."
                    document.querySelector('body').style.backgroundColor = '#B72424'
                    document.querySelector('.answer').style.display = " block"
                    document.querySelector('.answer').innerHTML +=
                        `<button class="answerButton">${guessingRgbCode.textContent}</button>`
                    let answer = document.querySelector('.answerButton')
                    answer.style.backgroundColor = guessingRgbCode.textContent
                    guessingRgbCode.textContent = 'You lost!!!'
                }
            }
        })
    }
})
document.querySelector('.diff3').addEventListener('click', () => {
    //3x3
    n = 3
    s = 4
    for (let i = 0; i < n; i++) {
        document.querySelector('.randomColoredBtns').innerHTML += "<br>"
        for (let j = 0; j < n; j++) {
            document.querySelector('.randomColoredBtns').innerHTML += `<button class="coloredBtn"></button>`
        }
    }

    let coloredButton = document.querySelectorAll('.coloredBtn')
    let colors = []
    let guessingRgbCode = document.querySelector('.random-rgb-color')
    let btnSize = 90 / n + '%';
    function randomColorGenerator() {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`
    }
    document.querySelector('.score').textContent = s;
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].style.backgroundColor = randomColorGenerator();
        colors[i] = window.getComputedStyle(coloredButton[i]).backgroundColor;
        coloredButton[i].style.width = btnSize
        coloredButton[i].style.height = btnSize
    }

    let rndColorFromArray = (Math.floor(Math.random() * colors.length) + 1) - 1
    guessingRgbCode.textContent = colors[rndColorFromArray]
    guessingRgbCode.style.fontSize = "2.5rem"
    guessingRgbCode.style.color = "black"
    console.log(rndColorFromArray);
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].addEventListener('click', () => {
            if (window.getComputedStyle(coloredButton[i]).backgroundColor === guessingRgbCode.textContent) {
                guessingRgbCode.textContent = 'You WON!!!'
                document.querySelector('body').style.backgroundColor = '#60b347'
                document.querySelector(".message").textContent = "Congratz!💥"
            }
            else {
                s--;
                document.querySelector('.score').textContent = s;
                if (s === 0) {
                    document.querySelector(".message").textContent = "Maybe next time..."
                    document.querySelector('body').style.backgroundColor = '#B72424'
                    document.querySelector('.answer').style.display = " block"
                    document.querySelector('.answer').innerHTML +=
                        `<button class="answerButton">${guessingRgbCode.textContent}</button>`
                    let answer = document.querySelector('.answerButton')
                    answer.style.backgroundColor = guessingRgbCode.textContent
                    guessingRgbCode.textContent = 'You lost!!!'
                }
            }
        })
    }
})
document.querySelector('.diff5').addEventListener('click', () => {
    //5x5
    n = 5
    s = 10
    for (let i = 0; i < n; i++) {
        document.querySelector('.randomColoredBtns').innerHTML += "<br>"
        for (let j = 0; j < n; j++) {
            document.querySelector('.randomColoredBtns').innerHTML += `<button class="coloredBtn"></button>`
        }
    }

    let coloredButton = document.querySelectorAll('.coloredBtn')
    let colors = []
    let guessingRgbCode = document.querySelector('.random-rgb-color')
    let btnSize = 90 / n + '%';
    function randomColorGenerator() {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${color}`
    }
    document.querySelector('.score').textContent = s;
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].style.backgroundColor = randomColorGenerator();
        colors[i] = window.getComputedStyle(coloredButton[i]).backgroundColor;
        coloredButton[i].style.width = btnSize
        coloredButton[i].style.height = btnSize
    }

    let rndColorFromArray = (Math.floor(Math.random() * colors.length) + 1) - 1
    guessingRgbCode.textContent = colors[rndColorFromArray]
    guessingRgbCode.style.fontSize = "2.5rem"
    guessingRgbCode.style.color = "black"
    console.log(rndColorFromArray);
    for (let i = 0; i < coloredButton.length; i++) {
        coloredButton[i].addEventListener('click', () => {
            if (window.getComputedStyle(coloredButton[i]).backgroundColor === guessingRgbCode.textContent) {
                guessingRgbCode.textContent = 'You WON!!!'
                document.querySelector('body').style.backgroundColor = '#60b347'
                document.querySelector(".message").textContent = "Congratz!💥"
            }
            else {
                s--;
                document.querySelector('.score').textContent = s;
                if (s === 0) {
                    document.querySelector(".message").textContent = "Maybe next time..."
                    document.querySelector('body').style.backgroundColor = '#B72424'
                    document.querySelector('.answer').style.display = " block"
                    document.querySelector('.answer').innerHTML +=
                        `<button class="answerButton">${guessingRgbCode.textContent}</button>`
                    let answer = document.querySelector('.answerButton')
                    answer.style.backgroundColor = guessingRgbCode.textContent
                    guessingRgbCode.textContent = 'You lost!!!'
                }
            }
        })
    }
})

