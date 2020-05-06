function addItem() {
    const firstTextField = document.getElementById('newItemText');
    const secondTextField = document.getElementById('newItemValue');
    const newOption = document.createElement('option');
    newOption.textContent = firstTextField.value;
    newOption.value = secondTextField.value;
    document.getElementById('menu').appendChild(newOption);
    firstTextField.value = '';
    secondTextField.value = '';
}