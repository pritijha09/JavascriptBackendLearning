import mongoose from "mongoose"

const orderitemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    qantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderitemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enam: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }
}, {timeStamps: true})

export const Order = mongoose.model("Order", orderSchema)