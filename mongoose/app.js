const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose-test");
const validator = require("validator");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (!validator.isEmail(value)) throw new Error("this is not an Email");
      }
    }
  },
  password: { type: String, required: true, trim: true },
  age: { type: Number, default: 0 }
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   name: "kim",
//   email: "kim@1234.com",
//   password: "         abcd"
// });

// newUser.save().then((value) => console.log("value", value));

// User.find().then((value) => console.log("all data", value));
User.find({ name: "kim" })
  .select("name -_id")
  .then((value) => console.log("data", value));
