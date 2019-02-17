import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const menu = MenuService.fetchMenu();
    return res.status(200).json({
      status: 'success',
      data: menu,
    });
  },

  setupMenu(req, res) {
    const meals = MenuService.setMenu();
    return res.status(201).json({
      status: 'success',
      data: meals,
    });
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const addedMeal = MenuService.addAMeal(newMeal);
    if (Object.entries(addedMeal).length !== 0) {
      return res.status(201).json({
        status: 'success',
        data: addedMeal,
      });
    }
    return res.status(400).json({
      status: 'Error',
      message: 'Bad request',
    });
  },
};

export default MenuController;
