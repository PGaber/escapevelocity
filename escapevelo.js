function getMassAndRadius() {
  const mass = document.querySelector('.mass-number-input');
  let massCoefficientValue = parseFloat(mass.value);

  const massExponent = document.querySelector('.mass-exponent-input');
  let massExponentValue = parseFloat(massExponent.value);

  const radius = document.querySelector('.radius-number-input');
  let radiusCoefficientValue = parseFloat(radius.value);

  const radiusExponent = document.querySelector('.radius-exponent-input');
  let radiusExponentValue = parseFloat(radiusExponent.value);
  
  if (!isNaN(massCoefficientValue) && !isNaN(massExponentValue)
  && !isNaN(radiusCoefficientValue) && !isNaN(radiusExponentValue)) {
    const massValue = Number(massCoefficientValue*(10**massExponentValue));
    const radiusValue = Number(radiusCoefficientValue*(10**radiusExponentValue));
    calculateEscapeVelocity(massValue, radiusValue);
  } else {
    document.querySelector('.js-escape-velo')
    .innerHTML = `Please Enter a number!`;
  }
}
function calculateEscapeVelocity(m, r) {
  const g = 6.674*10**(-11);
  let escapeVelocity = Math.sqrt((2*g*m)/r);
  escapeVelocity = Math.round(escapeVelocity*100);
  escapeVelocity = escapeVelocity/100;
  document.querySelector('.js-escape-velo')
    .innerHTML = `The approximate escape velocity of the object is ${escapeVelocity} m/s`;
}