import { OrderModel } from '../../models/order.model.js'; 

export const createOrder = async (req, res) => {
  const { userId, foodOrderItems } = req.body; 
  try {
    // Validate input
    if (!userId || !foodOrderItems || foodOrderItems.length === 0) {
      return res.status(400).json({ message: "User ID and food items are required." });
    }

    // Calculate total price
    const totalPrice = foodOrderItems.reduce((total, item) => {
      return total + (item.price * item.quantity); 
    }, 0);

    // Create a new order
    const newOrder = new OrderModel({
      user: mongoose.Types.ObjectId(userId),
      totalPrice,
      foodOrderItems: foodOrderItems.map(item => ({
        foodItem: mongoose.Types.ObjectId(item.foodItem),
        quantity: item.quantity,
      })),
    });

    // Save the order to the database
    await newOrder.save();

    res.status(201).json({ message: "Order successfully placed!", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
