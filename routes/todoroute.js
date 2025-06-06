import express from 'express';
import todomodel from '../models/todomodel.js';

const todoroute = express.Router();

// Create new task
todoroute.post('/new', async (req, res) => {
  const { taskId, taskValue } = req.body;

  try {
    const result = await todomodel.create({ taskId, taskValue });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Get all tasks
todoroute.get('/', async (req, res) => {
  try {
    const tasks = await todomodel.find({});
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Get task by ID
todoroute.get('/:id', async (req, res) => {
  try {
    const task = await todomodel.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

// Update task
todoroute.put('/:id', async (req, res) => {
  try {
    const updated = await todomodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete task
todoroute.delete('/:id', async (req, res) => {
  try {
    await todomodel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

export default todoroute;
