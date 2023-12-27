require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

//miiddleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//mongoDB config
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Creating a collection of documents
    const bookCollections = await client.db("bookInventory").collection("books");

    //Inserting a book to database: post method
    app.post("/upload-book", async(req,res)=>{
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
    })

    //Get all books: get method
    // app.get("/all-books", async (req,res)=>{
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // })

    //update a book data: patch or update method
    app.patch("/book/:id", async(req,res)=>{
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = { upsert: true};

        const updateaDoc = { 
          $set: {
            ...updateBookData
          }
        }
        //update
        const result = await bookCollections.updateOne(filter, updateaDoc, options);
        res.send(result);
    })

    //deleting a book
    app.delete("/book/:id", async(req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })

    //finding books by category
    app.get("/all-books", async (req,res)=>{
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    })
    
    //single book
    app.get("/book/:id", async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } 
  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);