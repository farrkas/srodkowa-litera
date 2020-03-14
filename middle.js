/*
You are going to be given a word. Your job is to return the middle character of the word. 
If the word's length is odd, return the middle character. 
If the word's length is even, return the middle 2 characters.
*/

function middle(text) {
    if (text.length <= 0) console.log("wpisz jakiś text");
    else if (text.legth == 1) console.log(text);
    else {

        let pol = text.length / 2;

        if (text.length % 2 == 0) {
            let m = Math.ceil(pol);
            let l = m - 1;

            console.log(text[l] + text[m]);
        }
        else {

            console.log(text[Math.floor(pol)]);
        }
    }
}
middle("")