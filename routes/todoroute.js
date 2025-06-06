import express from 'express';
import todomodel from '../models/todomodel.js';

const todoroute = express.Router();


todoroute.post('/new', async (req, res) => {
  const { taskId, taskValue } = req.body;

  try {
    const result = await todomodel.create({ taskId, taskValue });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

todoroute.get('/:id', async (req, res) => {
  const { taskId } = req.params;

  try {
    const result = await todomodel.find({ taskId });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

export default todoroute;
