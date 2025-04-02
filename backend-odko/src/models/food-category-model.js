
import mongoose from "mongoose";

const FoodCategorySchema = mongoose.Schema({
    categoryName: { type: String, required: true },
    foods:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }],
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
})

export const FoodCategoryModel = mongoose.models['foodCategory'] || mongoose.model('foodCategory', FoodCategorySchema)
