import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  taskId: { type: Number },
  taskValue: { type: String },
});

export default mongoose.model("Task", taskSchema);
