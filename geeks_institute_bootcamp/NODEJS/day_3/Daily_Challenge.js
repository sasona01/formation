const { MongoClient, ObjectId } = require("mongodb");

// URL MongoDB
const url = "mongodb://127.0.0.1:27017";

// Base de données
const dbName = "DevBlogDB";

// Création client
const client = new MongoClient(url);

async function main() {

  try {

    // =========================
    // CONNEXION
    // =========================
    await client.connect();
    console.log(" Connecté à MongoDB");

    const db = client.db(dbName);

    // =========================
    // COLLECTIONS
    // =========================
    const usersCollection = db.collection("users");
    const postsCollection = db.collection("posts");

    // =========================
    // STEP 1 : USERS
    // =========================
    const userResult = await usersCollection.insertOne({
      username: "YasmineDev",
      bio: "Full Stack Developer passionate about databases.",
      socialLinks: {
        github: "https://github.com/yasminedev",
        twitter: "https://twitter.com/yasminedev",
        linkedin: "https://linkedin.com/in/yasminedev"
      }
    });

    console.log(" User créé");
    console.log("User ID :", userResult.insertedId);

    // =========================
    // STEP 2 + 3 : POSTS + COMMENTS
    // =========================
    const postResult = await postsCollection.insertOne({

      title: "Why I Love MongoDB",

      body: "Schema flexibility is a game changer for modern applications.",

      // Référence vers users collection
      authorId: new ObjectId(userResult.insertedId),

      tags: [
        "NoSQL",
        "Database",
        "Tech"
      ],

      // Embedded comments
      comments: [
        {
          user: "CodeMaster",
          text: "Great article! Very clear.",
          date: new Date()
        }
      ]
    });

    console.log(" Post créé");
    console.log("Post ID :", postResult.insertedId);

    // =========================
    // AFFICHAGE USERS
    // =========================
    const users = await usersCollection.find().toArray();

    console.log("\n USERS COLLECTION");
    console.log(JSON.stringify(users, null, 2));

    // =========================
    // AFFICHAGE POSTS
    // =========================
    const posts = await postsCollection.find().toArray();

    console.log("\n POSTS COLLECTION");
    console.log(JSON.stringify(posts, null, 2));

  } catch (error) {

    console.error(" Erreur :", error);

  } finally {

    await client.close();
    console.log("\n Connexion fermée");
  }
}

// Exécution
main();