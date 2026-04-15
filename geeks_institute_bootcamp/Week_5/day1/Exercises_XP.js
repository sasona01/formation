const mongoose = require('mongoose');

// Main function to control execution order
const start = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/collegeDB');
    console.log('✅ Connection Successful! Node.js is talking to MongoDB.');

    // 2. Schema (Blueprint)
    const studentSchema = new mongoose.Schema({
      name: { 
        type: String, 
        required: [true, 'Name is mandatory'] 
      },
      email: { 
        type: String, 
        required: [true, 'Email is mandatory'], 
        unique: true 
      },
      age: { 
        type: Number, 
        min: [18, 'Students must be at least 18 years old'] 
      }
    });

    // 3. Model
    const Student = mongoose.model('Student', studentSchema);

    // 4. Test Validation
    const student = new Student({
      name: "Omar",
      email: "omar@school.com",
      age: 16 
    });

    await student.save();

  } catch (error) {
    console.log("❌ Validation Error Caught:");

    // Show detailed validation errors
    if (error.errors) {
      for (let field in error.errors) {
        console.log(`- ${error.errors[field].message}`);
      }
    } else {
      console.log(error.message);
    }

  } finally {
    mongoose.connection.close(); // Always close connection
  }
};


start();