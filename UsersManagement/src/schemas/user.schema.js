import mongoose from "mongoose"

const { Schema, model } = mongoose

const UserSchema  = Schema({
    _id: { type: String, _id: false },
    name: { type: String, require: true, minLength: 2, maxLength: 15 },
    surname: { type: String, require: true, minLength: 4, maxLength: 50 },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true, minLength: 10, maxLength: 80}
})

const UserModel = model("User", UserSchema)

export default UserModel