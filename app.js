'use strict'

const input1 = document.querySelector('.random-num-end');  // input ihtiyoriy raqam 1
const randomEndBtn = document.querySelector('.random-end-btn');  // button ok 1
const input = document.querySelector('.input');                  // input ihtiyoriy raqam 2
const inputBtn = document.querySelector('.inputBtn');            // button ok 2
const randomInput = document.querySelector('.randomInput');      // input ohiridagi
const box = document.querySelector('.result');                   // bosh div
const removeee = document.querySelector('.btn-1')                // bosh button
const boxEl = document.createElement('div');
input.disabled = true;
inputBtn.disabled = true;
removeee.disabled = true;

randomEndBtn.addEventListener('click', () => {

    const randomUntilEnd = input1.value;
    if (input1.value !== '') {
        input.disabled = false;
        inputBtn.disabled = false;
        removeee.disabled = false;
        input1.disabled = true;
        randomEndBtn.disabled = true;

        inputBtn.addEventListener('click', () => {
            const inputVal = input.value;
            if (inputVal !== '') {
                const pEl = document.createElement('p');
                pEl.classList.add('remove');



                let randomNum = setTimeout(() => {
                    return randomNum = Math.floor(Math.random() * randomUntilEnd + 1) // setTimeout malum voht kutib undan kigin bajarishni beradi
                }, 300);

                let randomNum1 = setTimeout(() => {
                    return randomNum1 = Math.floor(Math.random() * randomUntilEnd + 1)
                }, 600);

                let randomNum2 = setTimeout(() => {
                    return randomNum2 = Math.floor(Math.random() * randomUntilEnd + 1)
                }, 900);
                let randomNum3 = setTimeout(() => {
                    return randomNum3 = Math.floor(Math.random() * randomUntilEnd + 1)
                }, 1200);
                let randomNum4 = setTimeout(() => {
                    return randomNum4 = Math.floor(Math.random() * randomUntilEnd + 1)
                }, 1500);

                setTimeout(() => {
                    randomInput.value = randomNum;

                }, 300);
                setTimeout(() => {
                    randomInput.value = randomNum1;
                }, 600);
                setTimeout(() => {
                    randomInput.value = randomNum2;
                }, 900);
                setTimeout(() => {
                    randomInput.value = randomNum3;
                }, 1200);
                setTimeout(() => {
                    randomInput.value = randomNum4;
                }, 1500);

                setTimeout(() => {
                    function Promisify() {
                        return new Promise((resolve, reject) => {
                            if (inputVal > randomNum4) {
                                resolve(`Siz kiritgan ${inputVal} soni ${randomNum4} sonidan katta`);
                            } else {
                                reject(`Siz kiritgan ${inputVal} soni ${randomNum4} sonidan kichik`);
                            }
                        });
                    }


                    Promisify().then((data) => {
                            // console.log(data);
                            pEl.textContent = data;
                            pEl.style.color = '#00ff00';
                            boxEl.append(pEl)
                            box.append(boxEl);
                        })
                        .catch((data) => {
                            // console.log(data);
                            pEl.textContent = data;
                            pEl.style.color = 'red';
                            boxEl.append(pEl)
                            box.append(boxEl);
                        });

                }, 1500);

            }

            removeee.addEventListener('click', () => {
                boxEl.remove();
                console.log(boxEl);
            });
            input.value = '';
        });

    }

})



setTimeout(()=>{
    console.log('hello');
}, 3000)


// promiseda ikki hil asosiy narsa bor then va catch berilgan buyruq muaffaqiyatli amalga oshirilsa then ishildi yoki catch

const interval = true;
const getData = ()=> {
    return new Promise((resolve, reject)=>{
        
        // serverga so'rov jo'natamsz
        // agar muvaffaqiyatli amalga oshsa resolve ishga tushadi
        // agar muvaffaqiyatli amalga oshmasa reject ishga tushadi
    })
}



// resolf ishga tushganda aftamoatik tarzda then metodi ishga tushadi


// prototype
// var student1 = {
//     name: 'Abdulloh',
//     surname: 'Abdullayev'
// };

// var student2 = {
//     name: 'Abdulloh',
//     surname: 'Abdullayev'
// };

// var student3 = {
//     name: 'Abdulloh',
//     surname: 'Abdullayev'
// };

// Object.prototype.getFullname = function (){
//     return `$(this.name) $(this.surname)`
// }
// console.log(student1.getFullname);