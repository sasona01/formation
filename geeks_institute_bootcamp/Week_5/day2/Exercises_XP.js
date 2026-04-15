const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/lab');
//ex1;
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', postSchema);

const run = async () => {
  await Post.deleteMany();
  await User.deleteMany();

  // 1. Create user
  const admin = await User.create({
    name: 'Lina',
    email: 'lina@test.com'
  });

  // 2. Create post linked to user
  await Post.create({
    title: 'Mongoose is Awesome',
    content: 'Learning populate is powerful',
    author: admin._id
  });

  // 3. Retrieve + populate
  const postWithData = await Post.findOne({
    title: 'Mongoose is Awesome'
  }).populate('author');

  console.log(`Post Title: ${postWithData.title}`);
  console.log(`Author Name: ${postWithData.author.name}`);
};

run();

//ex2;

const studentSchema = new mongoose.Schema({
  name: String,
  updatedAt: Date
});

// Middleware
studentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();

});

const Student = mongoose.model('Student', studentSchema);

const run = async () => {
  await Student.deleteMany();

  // Create student
  const student = await Student.create({
    name: 'Ahmed'
  });

  console.log('Created:', student);

  // Update student (triggers pre-save again)
  student.name = 'Ahmed Updated';
  await student.save();

  console.log('Updated:', student);
};

run();