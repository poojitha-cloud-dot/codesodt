const display=document.getElementById('display');
const buttons=document.querySelectorAll('button');
let current='';
buttons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const val=btn.textContent;
    if(val==='C'){current='';display.value='';}
    else if(val==='='){try{display.value=eval(current)||'';current=display.value;}catch{display.value='Error';current='';}}
    else{current+=val;display.value=current;}
  });
});
