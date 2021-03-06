function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const rank = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  let next = grandNode.children[0]

  while (next) {
    grandNode = next
    next = grandNode.children[0]
  }
  return grandNode
}
