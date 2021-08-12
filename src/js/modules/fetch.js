

//  async function fetchApi() {
  const API = "https://apex.oracle.com/pls/apex/nutrition/food/food"
  const res        = await fetch(API);
  // , { mode: 'cors',credentials: 'include' }
  const json       = await res.json();
  export const food_lists = await json.items;
  console.log(food_lists);

  let m =[];
  food_lists.forEach(food_list => {
    const name=food_list.food_name;
    m.push(name);
  });
  console.log(m);
$(function(){
  $("#food").autocomplete({
  source:m,
});
});
// return food_lists;
// }
