// function getFirstSelector(selector){
//   return document.querySelector(selector);
// }

const nestedTarget = () => document.querySelector('#nested .target');
const deepestChild = () => document.querySelector('#grand-node div div div div');
const getFirstSelector = (selector) => document.querySelector(selector); 
const increaseRankBy = (n) => {
    const rankedLists = document.querySelectorAll('.ranked-list');
    for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}