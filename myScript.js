
var restart=document.querySelector('.btn');
//GRAB ALL THE SQUARES
var squares=document.querySelectorAll('td');

//CLEAR ALL THE SQUARES
function clearAll(){
  for(var i=0;i<9;i++){
    squares[i].textContent='';
  }
}

  
restart.addEventListener('click',clearAll); 



function tictak(){

  if (this.textContent=='') {
    this.textContent='X';
    
  } else  if( this.textContent=='X'){
    this.textContent='O'
    
  }
  else{
    this.textContent=''
  }
}
for(i=0;i<9;i++){
  
squares[i].addEventListener('click',tictak);
}




