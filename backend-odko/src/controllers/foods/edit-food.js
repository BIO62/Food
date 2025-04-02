import { FoodModel } from '../../models/food.model.js';

export const editFood = async (req, res) => {
    const { id } = req.params; 
    const { foodName, price, image, ingredients, category } = req.body;

    try {
        const updatedFood = await FoodModel.findByIdAndUpdate(id, {
            foodName,
            price,
            image,
            ingredients,
            category
        }, { new: true }); // 

        if (!updatedFood) {
            return res.status(404).json({ message: "Food not found" });
        }

        res.status(200).json({ message: 'Success', food: updatedFood });
    } catch (err) {
        console.error("Error occurred while editing food:", err);
        res.status(403).json({ message: "Error occurred", error: err.message });
    }
};
