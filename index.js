import express from 'express';
const app = express();
import cors from 'cors';
const port = process.env.PORT || 5000;
import { config } from 'dotenv';
config();

//middleware
app.use(cors());
app.use(express.json());

/// mongodb connection starting

import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = process.env.MONGODB_URL;

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
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

        
    const furniterCollection = client.db('furnitech').collection('allFurniter');




    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

/// mongodb connection ending

app.get('/', (req, res) => {
  res.send('new server is running');
});
app.get('/test', (req, res) => {
  res.send('test server is running');
});
app.listen(port, () => {
  console.log(`new server is running on port port`);
});