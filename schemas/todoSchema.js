/* 
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
 * Title: Todo todoSchema
 * Description: 
 * Author: Forhad Hossain ( callbackMind )
 * Date: 21th Nov 2023
 * ===   ===  ===   ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===  ===   ===  ===
*/

const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = todoSchema;
