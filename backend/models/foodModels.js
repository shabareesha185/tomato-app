import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
});

// if model(food) already exist than go with it else create new model
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
