// const buttons = document.querySelectorAll('button');

// let currentEntry = '';

// function showEntry(entry) {
//     const displayElement = document.getElementById('display');
//     displayElement.innerText = entry || '0'; // Muestra '0' si no hay entrada
// }

// function addNum(num) {
//     currentEntry += num; 
//     showEntry(currentEntry);
// }

// function addOperator(op) {
//     // Evitar múltiples operadores seguidos
//     if (currentEntry.length > 0 && !isNaN(currentEntry.slice(-1))) {
//         currentEntry += op;
//         showEntry(currentEntry);
//     }
// }

// function evaluateExpression() {
//     try {
//         // Cambiamos el formato de la expresión para usar eval sin eval
//         const expression = currentEntry.replace(/([0-9]+)([+\-*/])/g, '$1 $2 ').trim();
//         const result = Function(`'use strict'; return (${expression})`)();
//         showEntry(result);
//         currentEntry = result.toString(); // Almacena el resultado para usar en operaciones posteriores
//     } catch (error) {
//         showEntry('Error');
//         currentEntry = ''; // Resetea la entrada en caso de error
//     }
// }

// function clearEntry() {
//     currentEntry = ''; // Limpia la entrada
//     showEntry(); // Muestra '0' en la pantalla
    
// }


// // Asignar eventos a los botones
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const buttonText = button.innerText;

//         if (button.classList.contains('number')) {
//             addNum(buttonText);
//         } else if (button.classList.contains('operator')) {
//             addOperator(buttonText);
//         } else if (button.classList.contains('equal')) {
//             evaluateExpression();
//         } else if (button.classList.contains('clear')) {
//             clearEntry(); // Llama a la función para limpiar
//         }
//     });
// });

const buttons =  document.querySelectorAll('button');

let currentEntry = '';

function showEntry(entry) {
  const elementDisplay = document.getElementById('display');
  elementDisplay.innerText = entry || '0';
}

function addNum(num) {
  currentEntry += num;
  showEntry(currentEntry);
}

function addOperator(op) {
  if (currentEntry.length > 0 && !isNaN(currentEntry.slice(-1))) {
    currentEntry += op;
    showEntry(currentEntry);
  }
}

function evaluateExpression() {
  try {
    const expression = currentEntry.replace(/([0-9]+) ([+\-*/])/g,).trim();
    const result = Function(`'use strict'; return (${expression})`)();
    showEntry(result);
    currentEntry = result.toString();
  } catch (error) {
    showEntry('Error');
    currentEntry = '';
  }
}

function clearEntry() {
  currentEntry = '';
  showEntry();
}

function deleCurrentEntry() {
  if  (currentEntry.length > 0) {
    currentEntry = currentEntry.slice(0, -1);
    showEntry(currentEntry);
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const buttonText = button.innerText;

    if (button.classList.contains('number')) {
      addNum(buttonText);
    }
    else if (button.classList.contains('operator')) {
      addOperator(buttonText);
    }
    else if (button.classList.contains('equal')) {
      evaluateExpression();
    }
    else if (button.classList.contains('clear')) {
      clearEntry();
    }
    else if (button.classList.contains('delete')) {
      deleCurrentEntry();
    }
  })
})