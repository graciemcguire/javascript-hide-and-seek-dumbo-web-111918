function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let ranked = document.querySelectorAll('ul.ranked-list li')
  
  for(let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
    
  }
}


function deepestChild(){
  let kids = document.querySelectorAll('#grand-node div');
  
  for (let i = 0; i < kids.length; i++){
    if (!kids.length){
    return false;
  }
  return kids[kids.length-1];
 }
}