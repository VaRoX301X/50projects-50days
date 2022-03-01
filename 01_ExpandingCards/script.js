const panels = document.querySelectorAll('.panel');

/*
panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((element) => {
    element.classList.remove('active');
  });
}
*/
var i = 0;

var intervalID = window.setInterval(myCallback, 3000);

function myCallback() {
  removeActiveClasses();
  panels[i].classList.add('active');
  i++;
  if (i > panels.length - 1) {
    i = 0;
  }
}

function removeActiveClasses() {
  panels.forEach((element) => {
    element.classList.remove('active');
  });
}
