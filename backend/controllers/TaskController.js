import Task from '../models/Task.js';

export const createTask = async (req, res) => {
   
  const { RequesterName, items, quantity, EstimatedUnitCost, BusinessJustification } = req.body;
  try {
    if (!RequesterName || !items || !quantity || !EstimatedUnitCost || !BusinessJustification) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const task = await Task.create({ RequesterName, items, quantity, EstimatedUnitCost, BusinessJustification });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};
export const getUserTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user._id });
    try {
      const tasks = await Task.find({ createdBy: req.user._id });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find().populate('createdBy', 'email');
    try {
      const tasks = await Task.find().populate('createdBy', 'email');
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
    
  const { RequesterName, Department, items, quantity,
    EstimatedUnitCost, BusinessJustification, RequiredDate
   } = req.body;
  const task = await Task.findByIdAndUpdate(id, { RequesterName, Department, items, quantity,
    EstimatedUnitCost, BusinessJustification, RequiredDate
   }, { new: true });
    try {
      const task = await Task.findByIdAndUpdate(id, { RequesterName, Department, items, quantity,
    EstimatedUnitCost, BusinessJustification, RequiredDate
  }, { new: true });
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
    try {
      const task = await Task.findByIdAndDelete(id);
      if (!task) return res.status(404).json({ message: 'Task not found' });
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
};
