import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  taskId: { type: Number, required: true },
  taskValue: { type: String, required: true },
});

export default mongoose.model("Task", taskSchema);
