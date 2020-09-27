import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 50},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true
        // , validate: [/* RegExp */ true, '{PATH} should contain numbers, lowercase character, uppercase character and special characters']
    },
    role: {type: String, default: 'User'},
    createdOn: {type: Date, default: Date.now}
});

export const User = mongoose.model("user", UserSchema);
