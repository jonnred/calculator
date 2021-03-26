/****** number 1 to 10 and some plus**********/
    var firstNumber = ""; 
    var secondNumber = "";
    const numbersFunc = (num) =>{
        const numbers = document.querySelectorAll(".num");
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            element.addEventListener("click" , (e) => {
                firstNumber = firstNumber.concat(e.target.innerText);
                console.log(firstNumber)           
            })
        }
            operatorFunc();    

    }
        // OPERATOR PLUS MINUS DIVIDE MULTIPLY
    const operatorFunc = () => {

        const operator = document.querySelectorAll(".operator");
            for (let index = 0; index < operator.length; index++) {
                operator[index].addEventListener("click" , function(){
                    if (this.id=="minus"){
                    console.log('Subtraction');
                    }
                    else if (this.id=="result"){
                    console.log('Result');
                    }
                    else if (this.id=="ac"){
                    console.log('AC');
                    }
                    else if (this.id=="del"){
                    console.log('Delete');
                    }
                    else if (this.id=="dot"){
                    console.log('dot');
                    }
                    firstNumber = secondNumber;
                    console.log("firstN = " +firstNumber)
                    console.log(secondNumber)
                })
                            console.log(' im working');
        }
    }

        //  EQUALS BUTTON
        // const result = document.querySelector("#result");
    numbersFunc();

    // const fNumbers = document.querySelectorAll(".first-output")[0];
    // let firstNum = fNumbers.innerHTML;
    // console.log(firstNum);

    // const sNumbers = document.querySelectorAll(".second-output")[0];
    // let secondNum = sNumbers.innerHTML;
    // console.log(secondNum);

    // let answer = firstNum + secondNum;
    // answer = eval(answer)

    // console.log(answer)





// var a = '100';
// var b = '10';
// var o = "+";
// var at = parseInt(a);
// var bt = parseInt(b);
    
// var c = at +o + bt;

//     console.log("var C = "+ c);

//     console.log(a);
//     console.log(b);
    
//     console.log(at);
//     console.log(bt);
    
//     console.log(parseInt(a+b));
//     console.log(parseInt(a+b));

    
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