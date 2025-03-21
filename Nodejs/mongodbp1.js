const {MongoClient}=require('mongodb');

var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url);

async function run()
{
    try
    {
        const db=client.db('yogeshdb')
        const collection=db.collection('yogeshcollection')
        var obj={name:"azar",age:33,email:"azar@gmail.com"}
        var result=await collection.insertOne(obj)
        console.log(result)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)