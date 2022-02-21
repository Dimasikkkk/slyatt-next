import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imageMain: {type: String, required: true},
    imageHover: {type: String, required: true},
    description: {type: String, required: true},
    id: {type: Number, required: true},
    productUrl: {type: String, required: true, unique: true},
    countInStock: {type: Number, required: true, default: 0},
},
{
  timestamps: true,
}
);

// console.log(mongoose)

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
console.log(Product);
export default Product;