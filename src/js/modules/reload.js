export function clear(){
  const b=document.querySelector('.clear-button');
  
  b.addEventListener('click',()=>{
    location.reload();
  });
  
}