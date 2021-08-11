const API = "https://apex.oracle.com/pls/apex/nutrition/food/food"

 async function fetchApi() {
  const res        = await fetch(API);
  const json       = await res.json();
  const food_lists = await json.items;
  // console.log(food_lists);

  let m =[];
  food_lists.forEach(food_list => {
    const name=food_list.food_name;
    m.push(name);
  });
  // console.log(m);
$(function(){
  $("#food").autocomplete({
  source:m,
});
});





const calculateButton = document.querySelector('.button');
  const num    = document.querySelector('#number');
  const table  = document.querySelector('#table');

  const rows   = table.rows;
  const cells  = table.rows[1].cells;

  calculateButton.addEventListener('click', () => {
    const textbox = document.getElementById("food");
    const value   = textbox.value;

    let food_list = food_lists.filter((item) => {
      return (value == item.food_name);
    });


    const kcal = food_list[0].enerc_kcal * (num.value / 100);
    const prot = food_list[0].prot_ * (num.value / 100);
    const fat  = food_list[0].fat_ * (num.value / 100);
    const na    = food_list[0].na * (num.value / 100);
    const k    = food_list[0].k * (num.value / 100);
    const ca   = food_list[0].ca * (num.value / 100);
    const mg   = food_list[0].mg * (num.value / 100);
    const p   = food_list[0].p * (num.value / 100);
    const fe   = food_list[0].fe * (num.value / 100);
    const ze   = food_list[0].zn * (num.value / 100);
    const cu   = food_list[0].cu * (num.value / 100);
    const vA   = food_list[0].retol * (num.value / 100);
    const vD   = food_list[0].vitd * (num.value / 100);
    const vK   = food_list[0].vitk * (num.value / 100);
    const  vE = food_list[0].tocpha * (num.value / 100);
    const vB1  = food_list[0].thia * (num.value / 100);
    const vB2  = food_list[0].ribf * (num.value / 100);
    const vB6  = food_list[0].vitb6 * (num.value / 100);
    const vB12  = food_list[0].vitb12 * (num.value / 100);
    const niasin  = food_list[0].ne * (num.value / 100);
    const pantoten  = food_list[0].pantac * (num.value / 100);
    const yousan  = food_list[0].fol * (num.value / 100);
    const vC   = food_list[0].vitc * (num.value / 100);
    const fib  = food_list[0].fib_ * (num.value / 100);
    const alc  = food_list[0].alc * (num.value / 100);

    const round = (index, nutrition, decimal) => {
      return cells[index].innerHTML = nutrition.toFixed(decimal);
    }
    round(0, kcal, 0);
    round(1, prot, 1);
    round(2, fat, 1);
    round(3, ca, 0);
    round(4, fe, 1);
    round(5, k, 0);
    round(6, ze, 1);
    round(7, vA, 2);
    round(7, vD, 2);
    round(7, vK, 2);
    round(7, vE, 2);
    round(8, vB1, 2);
    round(9, vB2, 2);
    round(10, vC, 2);
    round(11, fib, 1);
    round(12, alc, 1);
  });
}
fetchApi();