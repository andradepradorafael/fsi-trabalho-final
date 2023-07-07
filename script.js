// Conversão Decimal para Binário e Hexadecimal
const converterForm = document.getElementById('converter-form');
const decimalInput = document.getElementById('decimal-input');
const binaryResult = document.getElementById('binary-result');
const hexadecimalResult = document.getElementById('hexadecimal-result');

converterForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const decimalNumber = Number(decimalInput.value);

  // Conversão Decimal para Binário
  const binaryNumber = decimalNumber.toString(2);
  binaryResult.textContent = binaryNumber;

  // Conversão Decimal para Hexadecimal
  const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
  hexadecimalResult.textContent = hexadecimalNumber;
});


// Conversão entre Bases
const converterFormTwo = document.getElementById('converter-form-two');
const baseInput = document.getElementById('base-input');
const binaryConversion = document.getElementById('binary-conversion');
const decimalConversion = document.getElementById('decimal-conversion');
const hexadecimalConversion = document.getElementById('hexadecimal-conversion');

converterFormTwo.addEventListener('submit', (event) => {
  event.preventDefault();

  const baseNumber = baseInput.value;

  // Verificar a base do número inserido
  let base = 10;
  if (baseNumber.startsWith('0b')) {
    base = 2; // Binário
  } else if (baseNumber.startsWith('0x')) {
    base = 16; // Hexadecimal
  }

  // Conversão para Binário
  if (base === 2) {
    binaryNumber = baseNumber.slice(2); // Remover o prefixo "0b"
  } else {
    binaryNumber = parseInt(baseNumber, base).toString(2);
  }
  binaryConversion.textContent = binaryNumber;

  // Conversão para Decimal
  if (base === 2) {
    decimalNumber = parseInt(baseNumber.slice(2), 2);
  } else {
    decimalNumber = parseInt(baseNumber, base);
  }
  decimalConversion.textContent = decimalNumber;

  // Conversão para Hexadecimal
  const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
  hexadecimalConversion.textContent = hexadecimalNumber;
});


// Copiar Resultado
const copyButton = document.getElementById('copy-button');
const conversionResults = document.querySelectorAll('.second-conversion-result p');
const copyText = () => {
  let textToCopy = '';
  conversionResults.forEach((result) => {
    textToCopy += result.textContent + '\n';
  });

  navigator.clipboard.writeText(textToCopy);
};

copyButton.addEventListener('click', copyText);
