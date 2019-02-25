import MealModel from '../models/meal.model';
import dummyData from '../utils/dummyData';

const OrderService = {

  // fetching all the orders
  getAllOrders() {
    
    return dummyData.meals.map((order) => {
      const orders = new MealModel();
      orders.id = order.id;
      orders.name = order.name;
      orders.size = order.size;
      orders.price = order.price;
      return orders;
    });
  },

  // getting order by id
  getSingleOrder(id) {
    const orders = dummyData.meals.find(order => order.id == id);
    return orders || {};
  },

  // adding to order list
  addToOrder(order) {
    const orderLength = dummyData.meals.length;

    // checking if the array is empty to avoid undefined errors.
    if (orderLength === undefined || orderLength == 0) {
      order.id = 1;
      dummyData.meals.push(order);
    } else {
      const lastId = dummyData.meals[orderLength - 1].id;
      const newId = lastId + 1;
      order.id = newId;
      dummyData.meals.push(order);
    }
    return order;
  },

  // updating order
  updateOrder(id, updateOrder) {
    // checking for meal id, deleting and updating the array
    const orderId = dummyData.meals.find(order => order.id == id);
    updateOrder.id = orderId.id;
    dummyData.meals.splice(orderId.id - 1, 1, updateOrder);
    return updateOrder;
  },

  // delete order by id
  deleteOrder(id) {
    // checking for order id and deleting it from the array
    const order = dummyData.meals.find(order => order.id == id);
    dummyData.meals.splice(order.id - 1, 1);
    return {};
  },

};

export default OrderService;