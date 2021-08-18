
import { food_lists } from "./nutrition.json.js";
//  async function fetchApi() {
  // const API = "https://apex.oracle.com/pls/apex/nutrition/food/food"
  // const res        = await fetch(API);
  // ,credentials: 'include'
  // , { mode: 'no-cors' }
  // const json       = await res.json();
  // export const food_lists = await json.items;
  // console.log(food_lists);

  // console.log(food_lists);
  let m =[];
  food_lists.forEach(food_list => {
  console.log(food_list);
    const name=food_list["food-name"];
    m.push(name);
  });
  console.log(m);
$(function(){
  $("#food").autocomplete({
  source:m,
});
});

