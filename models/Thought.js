const { Schema, model } = require("mongoose");
const reactionSchema = require("./ReactionSchema");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reactions: [reactionSchema],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
