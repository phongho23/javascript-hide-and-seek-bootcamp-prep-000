function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('ul.ranked-list li');
 
for (var i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
}
}

function deepestChild(){
 var divGrand = document.getElementById("grand-node").getElementsByTagName('div');
 
return divGrand[3];

  
  
}

//return document.getElementById("grand-node").getElementsByTagName('div')[3]

//Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)