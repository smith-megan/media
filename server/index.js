const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');

const {MongoClient}=require('mongodb')

const app = express();
app.use(express.json());
app.use(cors());


async function mango() {

	const uri="mongodb+srv://MSAPP:Vbn91HMsfle8e09v@firstcluster.qt7jk.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	const client= new MongoClient(uri)
	try{
	await client.connect()
  await createListing(client, {
    name: "Shack",
    summary: "it's a shack",
    bedrooms: 1,
    bathrooms: 5
  })
	// await listDatabases(client)
		} catch (e){
		console.log(e)
	} finally {
		await client.close()
	}
}

mango().catch(console.error)

async function listDatabases(client){
	const databaseList=	client.db().admin().listDatabases()
	console.log(databaseList)
  databaseList.databases.forEach(db=> {
    console.log(`- ${db.name}`)
  })
}

async function createListing(client, newListing) {
const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing)
console.log('new listing created with following id'+result.insertedId)
}

app.use(express.static(path.join(__dirname, '../build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8088, ()=>{console.log(`we are now on port${8088}`)});