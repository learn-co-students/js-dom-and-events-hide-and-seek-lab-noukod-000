function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested')
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
function increaseRankBy(n) {
  let numbers = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = (parseInt(numbers[i].innerHTML) + n).toString()
  }
}
