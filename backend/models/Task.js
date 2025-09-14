import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  RequesterName: { type: String, required: true },
  Department: {type: String, enum: ['HR', 'Finance', 'IT', 'Sales', 'Marketing'] },
  status: {type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  items: { type: String, required: true },
  quantity: { type: Number, required: true },
  EstimatedUnitCost: { type: Number, required: true },
  BusinessJustification: { type: String, required: true },
  RequiredDate: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
