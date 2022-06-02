function handleSubmit(e) {
    e.preventDefault();
}

function clear() {
    const textArea = document.getElementsByTagName(textArea);
    textArea.value = '';
    const  allInputs = document.querySelectorAll('input') ;
    for (let index = 0; index < allInputs.length; index += 1) {
        allInputs[index].value = '';
        allInputs[index].checked = false; 
    }
}

window.onload = function(){
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', handleSubmit)
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', clear)
}

