import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        maxlength: [200, "Product name cannot exceed 200 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please enter a valid price"],
        maxlength: [5, "Price cannot exceed 99999"],
    },
    description: {
        type: String,
        required: [true, "Please enter the product description."]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    categories: {
        tyre: String,
        required: [true, "Please enter the product category."],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Food",
                "Books",
                "Sports",
                "Outdoors",
                "Home"
            ],
            message: "Please select a valid category."
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter the seller of the product."]
    },
    stock: {
        type: Number,
        required: [true, "Enter the stock units"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        createdAt: Date.now
    }
},
{timestamps: true}
)

export default mongoose.model("Product", productSchema)