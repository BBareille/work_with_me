export function changeLetterRandom(ev, baseMessage)
{
    const message = ev.target.innerHTML

    let timePerLetter = 100 * (1/Math.log(message.length));
    console.log(timePerLetter)
    let arrayOfLetters = message.split('');
    const characters = "0123456789";


    for (let j=0; j+1<message.length; j++)
    {
         setTimeout(()=> {
             console.log(j)

             if(j > 0)
             {
                 arrayOfLetters[j-1] = message.charAt(j-1)
             }
            arrayOfLetters[j] = characters.charAt(Math.floor(Math.random() * characters.length));
            ev.target.innerHTML = arrayOfLetters.join('')
            arrayOfLetters[j+1] = characters.charAt(Math.floor(Math.random() * characters.length));
            ev.target.innerHTML = arrayOfLetters.join('')
        }, (timePerLetter * (j+1)))

    }

    setTimeout(() => {

        ev.target.innerHTML = baseMessage
    }, message.length * timePerLetter)

}
export function reverseChangeLetterRandom(ev, baseMessage)
{
    const message = ev.target.innerHTML

    let timePerLetter = 100 * (1/Math.log(message.length));
    let arrayOfLetters = message.split('');
    const characters = "0123456789";

    let u = 0;
    for (let j=message.length; j>0; j--)
    {
        u++
         setTimeout(()=> {
             if(j < message.length)
             {
                 arrayOfLetters[j+1] = message.charAt(j+1)
             }
            arrayOfLetters[j] = characters.charAt(Math.floor(Math.random() * characters.length));
            ev.target.innerHTML = arrayOfLetters.join('')
            arrayOfLetters[j-1] = characters.charAt(Math.floor(Math.random() * characters.length));
            ev.target.innerHTML = arrayOfLetters.join('')
            arrayOfLetters[j-2] = characters.charAt(Math.floor(Math.random() * characters.length));
            ev.target.innerHTML = arrayOfLetters.join('')

        }, (timePerLetter * u))

    }

    setTimeout(() => {

        ev.target.innerHTML = baseMessage
    }, message.length * timePerLetter)

}