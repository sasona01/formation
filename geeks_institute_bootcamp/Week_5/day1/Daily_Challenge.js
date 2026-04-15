const mongoose = require('mongoose');

// 1. Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/taskmaster');
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ DB Connection Error:', err.message);
    process.exit(1);
  }
};

// 2. Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "You must provide a task title"]
  },
  description: String,
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// 3. Model
const Task = mongoose.model('Task', taskSchema);

const createTask = async () => {
  try {
    const newTask = await Task.create({
      title: "Learn Mongoose Validation",
      description: "Complete the daily challenge for MongoDB bootcamp"
    });

    console.log("✅ Task Created:", newTask);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};
const getAllTasks = async () => {
  const tasks = await Task.find();
  console.log("📋 Current Tasks:", tasks);
};
const completeTask = async (taskId) => {
  await Task.findByIdAndUpdate(taskId, { status: 'completed' });
  console.log("🚀 Task marked as completed!");
};
const run = async () => {
  await connectDB();

  await createTask();
  await getAllTasks();

  // optionally test:
  // await completeTask("TASK_ID_HERE");

  mongoose.connection.close();
};

run();