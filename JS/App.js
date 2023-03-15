const form = document.getElementById('form')
const radiosOne = document.getElementsByName('a1')
const radiosTwo = document.getElementsByName('a2')
const radiosThree = document.getElementsByName('a3')
const radiosFour = document.getElementsByName('a4')
const radiosFive = document.getElementsByName('a5')
const radiosSix = document.getElementsByName('a6')
const radiosSeven = document.getElementsByName('a7')
const radiosEight = document.getElementsByName('a8')
const radiosNine = document.getElementsByName('a9')
const thanks = document.getElementById('thanks')
const container = document.querySelector('.container')

form.addEventListener('submit', async (action) => {
    action.preventDefault()

    try {
        const answer = await fetch('https://sheet.best/api/sheets/5a9b2005-6b82-4aef-b6d2-3ce5c1f82305', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "USERNAME": form.username.value,
                "QUESTION 1": answerOne(),
                "QUESTION 2": answerTwo(),
                "QUESTION 3": answerThree(),
                "QUESTION 4": answerFour(),
                "QUESTION 5": answerFive(),
                "QUESTION 6": answerSix(),
                "QUESTION 7": answerSeven(),
                "QUESTION 8": answerEight(),
                "QUESTION 9": answerNine(),
                "QUESTION 10": form.a10.value
            })
        })

        const content = await answer.json()
        console.log(content)

    } catch (error) {
        console.log(error)
    }

    /*
    DELETE METHOD
    try {
        const answer = await fetch('https://sheet.best/api/sheets/5a9b2005-6b82-4aef-b6d2-3ce5c1f82305/0', {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }*/

    container.classList.remove('active')
    thanks.classList.add('active')

})

function answerOne() {
    let selectedValue;
    for (const radio of radiosOne) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerTwo() {
    let selectedValue;
    for (const radio of radiosTwo) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerThree() {
    let selectedValue;
    for (const radio of radiosThree) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerFour() {
    let selectedValue;
    for (const radio of radiosFour) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerFive() {
    let selectedValue;
    for (const radio of radiosFive) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerSix() {
    let selectedValue;
    for (const radio of radiosSix) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerSeven() {
    let selectedValue;
    for (const radio of radiosSeven) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerEight() {
    let selectedValue;
    for (const radio of radiosEight) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}

function answerNine() {
    let selectedValue;
    for (const radio of radiosNine) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    console.log(selectedValue);
    return selectedValue
}