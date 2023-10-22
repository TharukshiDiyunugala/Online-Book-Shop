const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const uri = "mongodb+srv://mern-book-store:YMG7MkkVS7ZjEcqT@cluster0.01v6y3p.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Create a collection of documents
    const bookCollection = client.db("BookInventory").collection("books");

    // Define the route for inserting a book into the database (POST method)
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    });
    // get all books from the database
    //app.get("/all-books", async(req,res)=>{
    // const books = bookCollection.find();
    //const result = await books.toArray();
    //res.send(result);
    //})

    // update a book data : patch or update method
    app.patch("/book/:id", async(req,res)=>{
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set : {
          ...updateBookData
        }
      }
      //update
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    })
    // delete a book data
    app.delete("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    // find by category
    app.get("/all-books", async(req,res)=>{
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category};
      }
      const results = await bookCollection.find(query).toArray();
      res.send(results);
    })

    // Get Single Book
    app.get("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    })

    // Define the route for the root path (GET method)
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Start the Express app
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to establish the connection
connectToMongo();
