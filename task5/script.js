const insertText = document.querySelector('#insertText');
const buttonClear = document.querySelector('#buttonClear');
const duplicateField = document.querySelector('#duplicateField');

insertText.addEventListener('input', function() {
    duplicateField.textContent = insertText.value;
})

buttonClear.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(insertText.value);
    insertText.value = '';
    duplicateField.textContent = '';
    
})