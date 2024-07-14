const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    
    switch (keyValue) {
      case '=':
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
        break;
      case 'C':
        display.value = '';
        break;
      default:
        display.value += keyValue;
    }
  });
});
