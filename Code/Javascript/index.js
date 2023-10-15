let increasenumber = document.getElementById('increase')
let numberelement = document.getElementById('number')

count = 0;

function clicked() {
  count++
  numberelement.textContent = count
}

function sub() {
  if (count > 0) {
    count--
    numberelement.textContent = count
  }
}

function deleteall() {
  count = 0;
  numberelement.textContent = count
}