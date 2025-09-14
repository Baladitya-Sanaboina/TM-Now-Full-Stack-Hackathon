import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  RequesterName: { type: String, required: true },
  Department: {type: String, enum: ['HR', 'Finance', 'IT', 'Sales', 'Marketing'], required: true },
  items: { type: String, required: true },
  quantity: { type: Number, required: true },
  EstimatedUnitCost: { type: Number, required: true },
  BusinessJustification: { type: String, required: true },
  RequiredDate: { type: Date, required: true },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
