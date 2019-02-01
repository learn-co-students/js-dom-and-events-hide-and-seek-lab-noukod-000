function getFirstSelector(select) {
    return document.querySelector(select);
  }

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const nodeList = document.querySelectorAll('.ranked-list li')
  
    for (let i = 0 ; i < nodeList.length; i++) {
        nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n
  }
}

function deepestChild() {
    let node = document.getElementById('grand-node')
  
    while (node.children[0]) {
      node = node.children[0];
    }
  
    return node;
}