async function insertStudents(collection) {

  await collection.insertMany([
    { name: "Yassine", age: 19, city: "Rabat", major: "AI" },
    { name: "Sophia", age: 26, city: "Paris", major: "Cybersecurity" },
    { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
    { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
    { name: "Marcus", age: 24, city: "New York", major: "AI" }
  ]);

  console.log("Students inserted");
}

async function findYoungStudents(collection) {

  const students = await collection.find({
    age: { $gte: 18, $lte: 25 }
  }).toArray();

  console.log("Young students:", students);
}

async function updateCity(collection) {

  await collection.updateOne(
    { name: "Yassine" },
    { $set: { city: "Casablanca" } }
  );

  console.log("City updated");
}

async function deleteStudent(collection) {

  await collection.deleteOne({ name: "Sophia" });

  console.log("Sophia deleted");
}

async function updateMajor(collection) {

  await collection.updateMany(
    { major: "AI" },
    { $set: { major: "Generative AI" } }
  );

  console.log("Major updated");
}

async function showStudents(collection) {

  const students = await collection.find().toArray();
  console.log("All students:", students);
}

module.exports = {
  insertStudents,
  findYoungStudents,
  updateCity,
  deleteStudent,
  updateMajor,
  showStudents
};