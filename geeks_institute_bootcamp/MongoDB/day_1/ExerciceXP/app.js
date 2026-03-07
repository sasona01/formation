const connectDB = require("./config/db");
const student = require("./models/student");

async function main() {

  const db = await connectDB();

  const students = db.collection("students");

  await student.insertStudents(students);

  await student.findYoungStudents(students);

  await student.updateCity(students);

  await student.deleteStudent(students);

  await student.updateMajor(students);

  await student.showStudents(students);

}

main();