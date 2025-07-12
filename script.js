const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    if (!isFinite(result)) {
      throw new Error("Math Error");
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
