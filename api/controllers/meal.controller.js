import MealsService from '../services/meal.service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealsService.fetchMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealsService.addMeal(newMeal);
    return res.status(201).json({
      status: 'success',
      data: createdMeal,
    });
  },

  getSingleMeal(req, res) {
    const {id} = req.params;
    const foundMeal = MealsService.getAMeal(id);
    
    return res.json({
      status: 'success',
      data: foundMeal,
    }).status(200);
  },

  deleteSingleMeal(req, res) {
    const { id } = req.params;
    const deletedMeal = MealsService.deleteAMeal(id);

    if(!deletedMeal) res.status(404).send('The meal with the given ID was not found.')
    if (Object.entries(deletedMeal).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: deletedMeal,
      });
    }
   
  },

  editAMeal(req, res) {
    const { id } = req.params;
    const newMeal = req.body;
    const editedMeal = MealsService.editAMeal(id, newMeal);
    if (Object.entries(editedMeal).length !== 0) {
      return res.status(200).json({
        status: 'success',
        data: editedMeal,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'No meal with that id found',
    });
  },
};

export default MealController;
