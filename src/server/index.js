import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import  { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
dotenv.config()

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// eslint-disable-next-line no-undef
const uri=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ikm0tqz.mongodb.net`
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        const productsCollection = client.db('ecommerceDB').collection('products');
        const usersCollection = client.db('ecommerceDB').collection('users');

        // Get all products
        app.get('/products', async (req, res) => {
            const cursor = productsCollection.find();
            const products = await cursor.toArray();
            res.send(products);
        });

        // Get a single product by ID
        app.get('/products/:id', async (req, res) => {
            const id = req.params.id;
            const product = await productsCollection.findOne({ _id: new ObjectId(id) });
            res.send(product);
        });

        // Add a new product
        app.post('/products', async (req, res) => {
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct);
            res.send(result);
        });

        // // Update a product
        // app.put('/products/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const updatedProduct = req.body;
        //     const result = await productsCollection.updateOne(
        //         { _id: new ObjectId(id) },
        //         { $set: updatedProduct }
        //     );
        //     res.send(result);
        // });

        // Delete a product
        app.delete('/products/:id', async (req, res) => {
            const id = req.params.id;
            const result = await productsCollection.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // Get all users
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const users = await cursor.toArray();
            res.send(users);
        });

        // Add a new user
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB successfully");
    } finally {
       
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('E-commerce server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});