import { food_lists } from "./modules/nutrition.json.js";
import { calculate } from "./modules/calculate.js";
import {clear} from"./modules/reload.js";
import '../css/style.scss';

let m =[];
food_lists.forEach(food_list => {
// console.log(food_list);
  const name=food_list["food-name"];
  m.push(name);
});
// console.log(m);
$(function(){
$("#food").autocomplete({
source:m,
});
});

clear();
calculate();

