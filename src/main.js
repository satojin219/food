const API = "https://apex.oracle.com/pls/apex/nutrition/food/food"
fetch(API)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const food_lists = data.items;

    const req = {
      target: "food",
      key: "food_name",
      values: food_lists

    };
    var suggestrap = new Suggestrap(req);





    const button = document.querySelector('.button');
    const composition = document.querySelector('.food_composition');
    const num=document.querySelector('#number');
    button.addEventListener('click', () => {
      const textbox =document.getElementById("food");
      const value=textbox.value;

      let food_list = food_lists.filter((item) => {
        return (value == item.food_name);
      });

     
      
      const nutrition = `<ul>
<li>食品名:${food_list[0].food_name} </li>
<li>カロリー:${food_list[0].enerc_kcal*(num.value/100)}kcal </li>
<li>たんぱく質:${food_list[0].prot_*(num.value/100)}g </li>
<li>脂質:${food_list[0].fat_*(num.value/100)}g </li>
<li>カルシウム:${food_list[0].ca*(num.value/100)}mg </li>
<li>鉄:${food_list[0].fe*(num.value/100)}mg </li>
<li>カリウム:${food_list[0].k*(num.value/100)}mg </li>
<li>亜鉛:${food_list[0].zn*(num.value/100)}mg </li>
<li>ビタミンA:${food_list[0].retol*(num.value/100)}㎍ </li>
<li>ビタミンB₁:${food_list[0].thia*(num.value/100)}mg</li>
<li>ビタミンB₂:${food_list[0].ribf*(num.value/100)}mg</li>
<li>ビタミンC:${food_list[0].vitc*(num.value/100)}mg</li>
<li>食物繊維:${food_list[0].fib_*(num.value/100)}g</li>
<li>食塩相当量:${food_list[0].alc*(num.value/100)}g</li>
</ul>`;

      composition.innerHTML = nutrition;

      console.log();
    });

  })