let displayInput = '';

function input(value){
    displayInput += value;
    document.getElementById('display').value = displayInput;
}

function clearDisplay(){
    displayInput = '';
    document.getElementById('display').value = '';
}

function result(){
    try{
        displayInput = eval(displayInput);
        document.getElementById('display').value = displayInput;
    }catch(error){
        document.getElementById('display').value = 'Error';
        displayInput = '';
    }
}