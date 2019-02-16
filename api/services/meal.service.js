import Meal from '../models/meal.model';
import dummyData from '../utils/dummyData';


class MealsService {
  fetchMeals() {
    return dummyData.meals.map((data) => {
      const meal = new Meal();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;

      return meal;
    });
  },

  addMeal(meal) {
    const mealsLength = dummyData.meals.length;
    const newId = dummyData.meals[mealsLength - 1].id + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const mealFound = dummyData.meals.find(c => c.id === id);
    return mealFound || {}
  },

  editAMeal(id, newMeal) {
    const index = dummyData.meals.findIndex(c => c.id === id);
    const toEdit = dummyData.meals[index];
    if (toEdit) {
      toEdit.name = newMeal.name;
      toEdit.price = newMeal.price;
      toEdit.size = newMeal.size;

      return toEdit;
    }
    return {};
  },

  deleteAMeal(id){
    const mealToDelete = dummyData.meals.findIndex(c => c.id === id);
    if(mealToDelete > -1) {
      dummyData.meals.splice(mealToDelete, 1);
      return dummyData.meals;
    }
    return {};
  }
}

export default MealsService;