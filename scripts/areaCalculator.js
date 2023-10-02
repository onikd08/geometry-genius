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

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (base && height) {
    const area = base * height;
    setArea("parallelogram-area", area);
  }
}

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-diagonal-1");
  const d2 = getInputValue("rhombus-diagonal-2");
  if (d1 && d2) {
    const area = 0.5 * d1 * d2;
    setArea("rhombus-area", area);
  }
}

function calculatePentagonArea() {
  const p = getInputValue("pentagon-perimeter");
  const a = getInputValue("pentagon-apothem");
  if (p && a) {
    const area = 0.5 * p * a;
    setArea("pentagon-area", area);
  }
}
