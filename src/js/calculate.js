import { food_lists } from "./fetch.js";

const calculateButton =document.querySelector('.button');
const edibleWeight    =document.querySelector('#weight');
const enteredFoodName =document.querySelector('#food');
const outPutWeight    =table.rows[1].cells;
function nutritionCalculate(nutrition,cellIndex,decimalPoint){
  return outPutWeight[cellIndex].innerHTML = nutrition.toFixed(decimalPoint);
}

calculateButton.addEventListener('click', () => {
let searchedFood= food_lists.filter((food_list) => {
  return (enteredFoodName.value == food_list.food_name);
});
console.log(searchedFood);

const kcal    =searchedFood[0].enerc_kcal*(edibleWeight.value / 100);
const suger   =searchedFood[0].choavlm*(edibleWeight.value / 100);
const prot    =searchedFood[0].prot_*(edibleWeight.value / 100);
const fat     =searchedFood[0].fat_*(edibleWeight.value / 100);
const na      =searchedFood[0].na*(edibleWeight.value / 100);
const k       =searchedFood[0].k*(edibleWeight.value / 100);
const ca      =searchedFood[0].ca*(edibleWeight.value / 100);
const mg      =searchedFood[0].mg*(edibleWeight.value / 100);
const p       =searchedFood[0].p*(edibleWeight.value / 100);
const fe       =searchedFood[0].fe*(edibleWeight.value / 100);
const zn      =searchedFood[0].zn*(edibleWeight.value / 100);
const cu      =searchedFood[0].cu*(edibleWeight.value / 100);
const vA      =searchedFood[0].retol*(edibleWeight.value / 100);
const vD      =searchedFood[0].vitd*(edibleWeight.value / 100);
const vK      =searchedFood[0].vitk*(edibleWeight.value / 100);
const vE      =searchedFood[0].tocpha*(edibleWeight.value / 100);
const vB1     =searchedFood[0].thia*(edibleWeight.value / 100);
const vB2     =searchedFood[0].ribf*(edibleWeight.value / 100);
const vB6     =searchedFood[0].vitb6a*(edibleWeight.value / 100);
const vB12    =searchedFood[0].vitb12*(edibleWeight.value / 100);
const niasin  =searchedFood[0].ne*(edibleWeight.value / 100);
const pantoten=searchedFood[0].pantac*(edibleWeight.value / 100);
const yousan  =searchedFood[0].fol*(edibleWeight.value / 100);
const vC      =searchedFood[0].vitc*(edibleWeight.value / 100);
const fib     =searchedFood[0].fib_*(edibleWeight.value / 100);
const alc     =searchedFood[0].alc*(edibleWeight.value / 100);

  nutritionCalculate(kcal    ,0 ,0);
  nutritionCalculate(suger   ,1 ,1);
  nutritionCalculate(prot    ,2 ,1);
  nutritionCalculate(fat     ,3 ,1);
  nutritionCalculate(na      ,4 ,0);
  nutritionCalculate(k       ,5 ,0);
  nutritionCalculate(ca      ,6 ,0);
  nutritionCalculate(mg      ,7 ,0);
  nutritionCalculate(p       ,8 ,0);
  nutritionCalculate(fe      ,9 ,1);
  nutritionCalculate(zn      ,10,1);
  nutritionCalculate(cu      ,11,2);
  nutritionCalculate(vA      ,12,2);
  nutritionCalculate(vD      ,13,1);
  nutritionCalculate(vK      ,14,0);
  nutritionCalculate(vE      ,15,2);
  nutritionCalculate(vB1     ,16,2);
  nutritionCalculate(vB2     ,17,2);
  nutritionCalculate(vB6     ,18,1);
  nutritionCalculate(vB12    ,19,2);
  nutritionCalculate(niasin  ,20,1);
  nutritionCalculate(pantoten,21,2);
  nutritionCalculate(yousan  ,22,0);
  nutritionCalculate(vC      ,23,2);
  nutritionCalculate(fib     ,24,1);
  nutritionCalculate(alc     ,25,1);

});
