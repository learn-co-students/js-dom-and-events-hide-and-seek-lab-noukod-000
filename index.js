function getFirstSelector(selector){
  return  document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(rank){
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + rank;
}
}

    function deepestChild(){
      return document.querySelector('#grand-node').querySelectorAll('div')[3]
}
