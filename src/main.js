const API = "https://apex.oracle.com/pls/apex/nutrition/food/food"
fetch(API)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    food_lists = data.items;

    req = {
      target: "food",
      key: "food_name",
      values: food_lists

    };
    option = {
      count: 10,
      id: "suggestrap_2"
    }
    suggestrap = new Suggestrap(req, option);

  });


const button = document.querySelector('.button');
const num = document.querySelector('#number');
const table = document.querySelector('#table');

const rows = table.rows;
const cells = table.rows[1].cells;

button.addEventListener('click', () => {
  const textbox = document.getElementById("food");
  const value = textbox.value;

  let food_list = food_lists.filter((item) => {
    return (value == item.food_name);
  });


  const kcal = food_list[0].enerc_kcal * (num.value / 100);
  const prot = food_list[0].prot_ * (num.value / 100);
  const fat = food_list[0].fat_ * (num.value / 100);
  const ca = food_list[0].ca * (num.value / 100);
  const fe = food_list[0].fe * (num.value / 100);
  const k = food_list[0].k * (num.value / 100);
  const ze = food_list[0].zn * (num.value / 100);
  const vA = food_list[0].retol * (num.value / 100);
  const vB1 = food_list[0].thia * (num.value / 100);
  const vB2 = food_list[0].ribf * (num.value / 100);
  const vC = food_list[0].vitc * (num.value / 100);
  const fib = food_list[0].fib_ * (num.value / 100);
  const alc = food_list[0].alc * (num.value / 100);

  cells[2].innerHTML = kcal.toFixed(0);
  cells[3].innerHTML = prot.toFixed(1);
  cells[4].innerHTML = fat.toFixed(1);
  cells[5].innerHTML = ca.toFixed(0);
  cells[6].innerHTML = fe.toFixed(1);
  cells[7].innerHTML = k.toFixed(0);
  cells[8].innerHTML = ze.toFixed(1);
  cells[9].innerHTML = vA.toFixed(2);
  cells[10].innerHTML = vB1.toFixed(2);
  cells[11].innerHTML = vB2.toFixed(2);
  cells[12].innerHTML = vC.toFixed(2);
  cells[13].innerHTML = fib.toFixed(1);
  cells[14].innerHTML = alc.toFixed(1);





});