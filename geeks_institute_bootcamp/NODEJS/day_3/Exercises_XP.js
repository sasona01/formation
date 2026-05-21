const { MongoClient, ObjectId } = require("mongodb");

// URL de connexion MongoDB
const url = "mongodb://127.0.0.1:27017";

// Nom de la base de données
const dbName = "shopDB";

// Création du client MongoDB
const client = new MongoClient(url);

async function main() {
  try {
    // Connexion au serveur MongoDB
    await client.connect();
    console.log("✅ Connecté à MongoDB");

    // Sélection de la base
    const db = client.db(dbName);

    // =========================
    // COLLECTION USERS
    // =========================
    const usersCollection = db.collection("users");

    // Insertion utilisateur avec address imbriqué
    const userResult = await usersCollection.insertOne({
      name: "Yasmine",
      email: "yasmine@tech.ma",
      address: {
        city: "Casablanca",
        country: "Morocco",
        postalCode: "20000"
      }
    });

    console.log("✅ Utilisateur ajouté");
    console.log("User ID :", userResult.insertedId);

    // =========================
    // COLLECTION ORDERS
    // =========================
    const ordersCollection = db.collection("orders");

    // Insertion commande avec référence userId
    const orderResult = await ordersCollection.insertOne({
      orderNumber: "ORD-99X",
      total: 1500,
      currency: "MAD",
      status: "Processing",
      userId: new ObjectId(userResult.insertedId)
    });

    console.log("✅ Commande ajoutée");
    console.log("Order ID :", orderResult.insertedId);

    // =========================
    // AFFICHAGE USERS
    // =========================
    const users = await usersCollection.find().toArray();

    console.log("\n USERS");
    console.log(users);

    // =========================
    // AFFICHAGE ORDERS
    // =========================
    const orders = await ordersCollection.find().toArray();

    console.log("\n ORDERS");
    console.log(orders);

  } catch (error) {
    console.error(" Erreur :", error);
  } finally {
    // Fermeture connexion
    await client.close();
    console.log(" Connexion fermée");
  }
}

main();