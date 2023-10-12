import mongoose from "mongoose"

const { Schema, Model } = mongoose

const userSchema  = Schema({
    _id: { type: String, _id: false },
    name: { type: String, require: true, minLength: 2, maxLength: 15 },
    surname: { type: String, require: true, minLength: 4, maxLength: 50 },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true, minLength: 10, maxLength: 25}
})

const userModel = Model("User", userSchema)

export default userModel