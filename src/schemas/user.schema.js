import mongoose from "mongoose"

const { Schema, Model } = Mongoose

const userSchema  = Schema({
    name: { type: String, require: true, minLength: 2, maxLength: 15 },
    surname: { type: String, require: true, minLength: 4, maxLength: 50 },
    password: { type: String, require: true}
})

const userModel = Model("User", userSchema)

export default userModel