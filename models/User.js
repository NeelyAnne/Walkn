const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: "Please enter a valid username."
  },
  password: {
    type: String,
    required: "Please enter a valid password."
  }
});

UserSchema.methods.comparePassword = function(inputPass) {
  return bcrypt.compareSync(inputPass, this.password);
};

UserSchema.pre("save", function() {
  this.password = bcrypt.hashSync(this.password, 3);
  return next();
});

module.exports = mongoose.model("User", UserSchema);
