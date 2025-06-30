let input = document.querySelector('.res'); // correct selector
let buttons = document.querySelectorAll('button');

let empstr = ""; // for storing result

let arr = Array.from(buttons); // make array of buttons

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            
                empstr = eval(empstr);
                input.value = empstr;
            
        } 
        
        else if (e.target.innerHTML === 'AC') {

            empstr = ""; // reset empstr
            input.value = empstr;
            
        } 
        
        else if (e.target.innerHTML === 'DEL') {
            empstr = empstr.slice(0, -1); // remove last character
            input.value = empstr;
        } 
        
        else {
            empstr += e.target.innerHTML; // append button value to empstr
            input.value = empstr;
        }
    });
});
