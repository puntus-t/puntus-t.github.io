"use strict";

window.addEventListener('DOMContentLoaded', function () {

    let btnB = document.querySelector('.wrap-block'),
        box = document.querySelector('.question-box'),
        close = document.querySelector('.close'),
        caption = document.querySelector('.caption'),
        answers = document.querySelector('.answers'),
        picture = document.getElementsByClassName('picture'),
        form = document.querySelector('form'),
        revolt = document.querySelector('.revolt'),
        oder = document.querySelector('.oder'),
        life = document.querySelector('.life'),
        main = document.querySelector('.main'),
        clickedButton = null,
        userAnswers = {},
        questions = {
            first: {
                title: 'В каком из этих рисунков больше разных оттенков красного?',
                color: 'red',
                answer: [
                    {link: 'images/test1.1.png', value:'1'}, 
                    {link: 'images/test1.2.png', value:'2'}
                ] 
            },
            second: {
                title: 'Какое из этих изображений больше всего похоже на человеческое лицо?',
                color: 'blue',
                answer: [
                    {link: 'images/test2.1.png', value: '1'}, 
                    {link: 'images/test2.2.png', value: '2'}, 
                    {link: 'images/test2.3.png', value: '3'},
                    {link: 'images/test2.4.png', value: '4'}, 
                    {link: 'images/test2.5.png', value: '5'}, 
                    {link: 'images/test2.6.png', value: '6'}
                ]
            },
            third: {
                title: 'Какой рисунок лучше других символизирует любовь и счастье?',
                color: 'pink',
                answer: [
                    {link: 'images/test3.1.png', value: '1'},
                    {link: 'images/test3.2.png', value: '2'},
                    {link: 'images/test3.3.png', value: '3'},
                    {link: 'images/test3.4.png', value: '4'},
                    {link: 'images/test3.5.png', value: '5'},
                    {link: 'images/test3.6.png', value: '6'}, 
                ]
            },
            fourth: {
                title: 'Какой из этих детских рисунков - наиболее тревожный?',
                color: 'gray',
                answer: [
                    {link: 'images/test4.1.png', value:'1'}, 
                    {link: 'images/test4.2.png', value:'2'}
                ] 
            },
            fifth: {
                title: 'Какое из этих изображений лучше всего иллюстрирует беспокойство?',
                color: 'violet',
                answer: [
                    {link: 'images/test5.1.png', value:'1'}, 
                    {link: 'images/test5.2.png', value:'2'}
                ]
            },
            sixth: {
                title: 'Какой из этих рисунков лучше отражает слово "жизнь"?',
                color: 'green',
                answer: [
                    {link: 'images/test6.1.png', value: '1'},
                    {link: 'images/test6.2.png', value: '2'},
                    {link: 'images/test6.3.png', value: '3'},
                    {link: 'images/test6.4.png', value: '4'},
                    {link: 'images/test6.5.png', value: '5'},
                    {link: 'images/test6.6.png', value: '6'} 
                ]
            },
            seventh: {
                title: 'Какое изображение лучше других отражает ваше понимание гармонии?',
                color: 'yellowgreen',
                answer: [
                    {link: 'images/test7.1.png', value: '1'},
                    {link: 'images/test7.2.png', value: '2'},
                    {link: 'images/test7.3.png', value: '3'}
                ]
            },
            eighth: {
                title: 'А какой лучше всего отражает путаницу, хаос?',
                color: 'brown',
                answer: [
                    {link: 'images/test8.1.png', value: '1'},
                    {link: 'images/test8.2.png', value: '2'}
                ]
            },
            ninth: {
                title: 'Кто из них выглядит наиболее невинным?',
                color: 'yellow',
                answer: [
                    {link: 'images/test9.1.png', value: '1'},
                    {link: 'images/test9.2.png', value: '2'},
                    {link: 'images/test9.3.png', value: '3'},
                    {link: 'images/test9.4.png', value: '4'},
                    {link: 'images/test9.5.png', value: '5'},
                    {link: 'images/test9.6.png', value: '6'}
                ]
            }
        };

    function deleteAllColors(element) {
        element.classList.remove('red');
        element.classList.remove('blue');
        element.classList.remove('pink');
        element.classList.remove('gray');
        element.classList.remove('violet');
        element.classList.remove('green');
        element.classList.remove('yellowgreen');
        element.classList.remove('brown');
        element.classList.remove('yellow');
    };

    btnB.addEventListener('click', (event) => {
        if (event.originalTarget.className.includes('btn')) {
            box.style.display = 'block';

            clickedButton = event.originalTarget;

            deleteAllColors(box);
            let id = event.originalTarget.getAttribute('data-id');
            box.classList.add(questions[id].color);
            caption.innerHTML = questions[id].title;

            questions[id].answer.forEach((singleAnswer) => {
                let newInput = document.createElement('input');
                newInput.type = "image";
                newInput.src = singleAnswer.link;
                newInput.classList.add('picture');
                newInput.value = singleAnswer.value;
                answers.appendChild(newInput);
            });

            close.onclick = function (event) {
                event.preventDefault();
                for (let i = picture.length - 1; i >= 0; --i) {
                    picture[i].remove();
                };
                box.style.display = 'none';
            };
        };        
    });

    form.addEventListener('submit', (e) => {
            
        e.preventDefault();

        let submitter = e.submitter;
        userAnswers[clickedButton.getAttribute('data-id')] = +submitter.value;

        function arraySum(userAnswers) {
            let sum = 0;
            
            for(var key in userAnswers){
                sum += userAnswers[key];
            }
            if ( sum <= 17) {
                alert('Спасибо за Ваш ответ! Результат ниже');
                revolt.style.display = 'block';
                main.style.height = '550px';

            }
            if (sum > 17 && sum <= 25) {
                alert('Спасибо за Ваш ответ! Результат ниже');
                oder.style.display = 'block';
                main.style.height = '550px';
            }
            if (sum > 25) {
                alert('Спасибо за Ваш ответ! Результат ниже');
                life.style.display = 'block';
                main.style.height = '550px';
            }
        }

        if(Object.keys(userAnswers).length >= 9){
            arraySum(userAnswers); 
        }
        

        for (let i = picture.length - 1; i >= 0; --i) {
            picture[i].remove();
        }
        box.style.display = 'none';

        clickedButton.classList.add('opened');
        
    });
});

// if (userAnswers.length == 9 && userAnswers >= 9){
//     alert('Спасибо, Ваш результат ниже!');
//     revolt.style.display = 'block';
// }
// if (userAnswers.length == 9 && userAnswers >=17){
//     alert('Спасибо, Ваш результат ниже!')
//     oder.style.display = 'block';
// };
// if (userAnswers.length == 9 && userAnswers >=26){
//     alert('Спасибо, Ваш результат ниже!')
//     life.style.display = 'block';
// };