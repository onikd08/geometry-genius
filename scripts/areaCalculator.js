function getInputValue(inputFiledId) {
  const inputField = document.getElementById(inputFiledId);
  const value = inputField.value;
  if (value !== "") {
    return parseFloat(value);
  }
}

function setArea(areaId, value) {
  const textField = document.getElementById(areaId);
  textField.innerText = value;
}

function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if (base && height) {
    const area = 0.5 * base * height;
    setArea("triangle-area", area);
  }
}

function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  if (width && length) {
    const area = width * length;
    setArea("rectangle-area", area);
  }
}
