const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert(`Button ${button.innerText} clicked`);
    });
  });