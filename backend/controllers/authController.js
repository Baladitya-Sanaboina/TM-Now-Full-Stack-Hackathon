
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
  const { email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: 'User exists' });
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashedPassword, role: 'user' });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
};




export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token });
};


export const adminLogin = async (req, res) => {
  if (!req.body || !req.body.email || !req.body.password) return res.status(400).json({ message: 'Email and password required' });
  const adminEmail = 'admin@technmantranow.com';
  const adminPassword = 'admin';
  let admin = await User.findOne({ email: adminEmail });
  if (!admin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    admin = await User.create({ email: adminEmail, password: hashedPassword, role: 'admin' });
  }
  const match = await bcrypt.compare(req.body.password, admin.password);
  if (admin.email !== req.body.email || !match) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET);
  res.json({ token });
};


