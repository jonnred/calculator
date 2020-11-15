/****** number 1 to 10 **********/
var givenA = 0 ;
var givenB = 0;
const output = document.querySelector('#output');

const digits = document.querySelectorAll(".digit");
for (let index = 0; index < digits.length; index++) {
    const element = digits[index];
    element.addEventListener("click" , (e) => {
    toString(e.target.innerText);
    if (givenA == '0') {    
        givenA += e.target.innerText;
        output.innerText = givenA;
    }
    else{
        givenB += e.target.innerText;
        output.innerText = givenB;
    
    }
    
    
    const plus = document.querySelector('#plus');
    plus.addEventListener('click' , (e) =>{
        output.innerText = '';
        toString(e.target.innerText);
        givenB += e.target.innerText;
        console.log(e.target.innerText);
        answer = givenA + givenB;  
    });
    const equals = document.querySelector("#result");
    equals.addEventListener("click" , () => {

    })
});}

const givenAFunction = (e)=>{
    
};
const calculate = ()=>{

};
const update = ()=>{
    

};
/* 
1.click number
    1-a . convert into a string 
    1-b . get the number then append then get 
    1-c . show the number final number
2.click operator
    2-b . can't click if there is no number
    2-b . cant click twice in a row
    2-b . 
    2-b . 
3.click number
    3-a . get the number then append then get 
    3-b . show the number final number
4.click equals
    4-a . get the fist number convert into float 
    4-b . get the second number convert into float
    4-b . run the operators function
    4-b . get the answer 
    4-b . 
5.display the calculated value
    4-b . get the answer 
    4-b . convert into a string 
    4-b . display into the screen
6.repeat all
    4-b . click AC then repeat steps
    4-b . 
    4-b . 

*/