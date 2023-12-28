// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;

// const app = express();
// const port = 5003;

// const mongoUri = "mongodb://root:rootpassword@mongodb";

// let mongoCollection;

// const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
// client.connect((err) => {
//   if (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
//   const db = client.db("analytics");
//   mongoCollection = db.collection("grades");

//   console.log("Connected to MongoDB");
// });

// app.get("/", async (req, res) => {
//   try {
//     const results = await mongoCollection.find({}).toArray();
//     res.json(results);
//   } catch (err) {
//     console.error("Error fetching results:", err);
//     res.status(500).send("Failed to fetch results");
//   }
// });

// app.listen(port, () => {
//   console.log(`Show Results service running on http://localhost:${port}`);
// });
/////////////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const ejs = require("ejs");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// const port = 5003;

// const mongoUri = "mongodb://root:rootpassword@mongodb";

// let mongoCollection;

// const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
// client.connect(async (err) => {
//   if (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
//   const db = client.db("analytics");
//   mongoCollection = db.collection("grades");

//   console.log("Connected to MongoDB");

//   // You can read data from MongoDB here if needed.
//   try {
//     const results = await mongoCollection.find({}).toArray();
//     console.log("Read data from MongoDB:", results);
//   } catch (err) {
//     console.error("Error reading data from MongoDB:", err);
//   }
// });

// // Set the view engine and views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// app.get("/", async (req, res) => {
//   try {
//     const results = await mongoCollection.find({}).toArray();
//     // Render the EJS template with data
//     res.render("index", { results });
//   } catch (err) {
//     console.error("Error fetching results:", err);
//     res.status(500).send("Failed to fetch results");
//   }
// });

// app.listen(port, () => {
//   console.log(`Show Results service running on http://localhost:${port}`);
// });
/////////////////////////////////////////////////////////
// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const ejs = require("ejs");
// const path = require("path");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// const port = 5003;

// const mongoUri = "mongodb://root:rootpassword@mongodb"; // Change to your MongoDB URI
// let mongoCollection;

// const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
// client.connect(async (err) => {
//   if (err) {
//     console.error("Failed to connect to MongoDB", err);
//     process.exit(1);
//   }
//   const db = client.db("analytics");
//   mongoCollection = db.collection("grades");

//   console.log("Connected to MongoDB");
// });

// // Set the view engine and views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Define a route to fetch data from MongoDB and render it
// app.get("/", async (req, res) => {
//   try {
//     const results = await mongoCollection.find({}).toArray();
//     console.log("Read data from MongoDB:", results);

//     // Render the EJS template with data
//     res.render("index", { results });
//   } catch (err) {
//     console.error("Error fetching results from MongoDB:", err);
//     res.status(500).send("Failed to fetch results");
//   }
// });

// app.listen(port, () => {
//   console.log(`Show Results service running on http://localhost:${port}`);
// });
////////////////////////////////////////////////////////////////////////////
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ejs = require("ejs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 5003;

const mongoUri = "mongodb://root:rootpassword@mongodb"; // Change to your MongoDB URI
let mongoCollection;

const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
client.connect(async (err) => {
  if (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
  const db = client.db("analytics");
  mongoCollection = db.collection("grades");

  console.log("Connected to MongoDB");
});

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Define a route to fetch data from MongoDB and render it
app.get("/", async (req, res) => {
  try {
    const results = await mongoCollection.find({}).toArray();
    console.log("Read data from MongoDB:", results);

    // Render the EJS template with data
    res.render("index", { results });
  } catch (err) {
    console.error("Error fetching results from MongoDB:", err);
    res.status(500).send("Failed to fetch results");
  }
});

app.listen(port, () => {
  console.log(`Show Results service running on http://localhost:${port}`);
});
