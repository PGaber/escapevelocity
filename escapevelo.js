function getMassAndRadius() {
  const resultElement = document.querySelector('.js-escape-velo');

  const massCoefficientValue = parseFloat(document.querySelector('.mass-number-input').value.trim());
  const massExponentValue = parseFloat(document.querySelector('.mass-exponent-input').value.trim());
  const radiusCoefficientValue = parseFloat(document.querySelector('.radius-number-input').value.trim());
  const radiusExponentValue = parseFloat(document.querySelector('.radius-exponent-input').value.trim());

  if (isNaN(massCoefficientValue) || isNaN(massExponentValue) ||
      isNaN(radiusCoefficientValue) || isNaN(radiusExponentValue)) {
    resultElement.innerHTML = `Please enter valid numbers in all fields!`;
    return;
  }

  if (massCoefficientValue <= 0 || radiusCoefficientValue <= 0) {
    resultElement.innerHTML = `Please enter positive numbers only!`;
    return;
  }

  const massValue = massCoefficientValue*(10**massExponentValue);
  const radiusValue = radiusCoefficientValue*(10**radiusExponentValue);

  calculateEscapeVelocity(massValue, radiusValue);
}
function calculateEscapeVelocity(m, r) {
  const resultElement = document.querySelector('.js-escape-velo');

  resultElement.innerHTML = `Calculating...`;
  const g = 6.674*10**(-11);
  let escapeVelocity = Math.sqrt((2*g*m)/r);
  escapeVelocity = escapeVelocity.toFixed(2);
  resultElement.innerHTML = `The approximate escape velocity of the object is ${escapeVelocity} m/s`;
}

function clearInput() {
  document.querySelector('.mass-number-input').value = '';
  document.querySelector('.mass-exponent-input').value = '';
  document.querySelector('.radius-number-input').value = '';
  document.querySelector('.radius-exponent-input').value = '';
  document.querySelector('.js-escape-velo').innerHTML = '';
}
