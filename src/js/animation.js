

function toggleAnimation(event, animateElement, animateClass) {
  const i = document.querySelector(animateElement);
  i.addEventListener(event, () => {
    i.classList.toggle(animateClass);
  });
}
