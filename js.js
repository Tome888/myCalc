const buttons = document.querySelectorAll('button');
const display = document.getElementById('displayy');



buttons[0].addEventListener('click', function(){
    display.innerHTML = '';
});


buttons[1].addEventListener('click', function(){
    display.innerHTML = 'Nzz so praa tva kopce';
});

buttons[2].addEventListener('click', function(){
    display.innerHTML += '%';
});
buttons[3].addEventListener('click', function(){
    display.innerHTML += '/';
});
buttons[4].addEventListener('click', function(){
    display.innerHTML += '7';
});
buttons[5].addEventListener('click', function(){
    display.innerHTML += '8';
});
buttons[6].addEventListener('click', function(){
    display.innerHTML += '9';
});
buttons[7].addEventListener('click', function(){
    display.innerHTML += '*';
});
buttons[8].addEventListener('click', function(){
    display.innerHTML += '4';
});
buttons[9].addEventListener('click', function(){
    display.innerHTML += '5';
});
buttons[10].addEventListener('click', function(){
    display.innerHTML += '6';

    
});
buttons[11].addEventListener('click', function(){
    display.innerHTML += '-';

    
});
buttons[12].addEventListener('click', function(){
    display.innerHTML += '1';


});
buttons[13].addEventListener('click', function(){
    display.innerHTML += '2';


});
buttons[14].addEventListener('click', function(){
    display.innerHTML += '3';


});
buttons[15].addEventListener('click', function(){
    display.innerHTML += '+';


});
buttons[16].addEventListener('click', function(){
    display.innerHTML += '0';


});
buttons[17].addEventListener('click', function(){
    display.innerHTML += '.';


});
buttons[18].addEventListener('click', function(){
    equals = display.innerHTML;
    let evaluate = eval(equals);
    display.innerHTML = evaluate; 
});



