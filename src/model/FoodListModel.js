export class FoodListModel{
  constructor(items=[]){
    this.items=items;
  }
  
  getFoodCount(){
    return this.items.length;
  }

  addFood(foodItem){
    this.items.push(foodItem);
}

  deleteFood({ id }) {
    this.items = this.items.filter(todo => {
        return todo.id !== id;
    });
  }
}