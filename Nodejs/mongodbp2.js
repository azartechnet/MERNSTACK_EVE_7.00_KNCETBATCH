const {MongoClient}=require('mongodb');

var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client=new MongoClient(url);

async function run()
{
    try
    {
        const db=client.db('yogeshdb')
        const collection=db.collection('yogeshcollection')
        var obj=[{name:"azar1",age:34,email:"azar1@gmail.com"},{name:"mohamed",age:45,email:"mohamed@gmail.com"}]
        var result=await collection.insertMany(obj)
        console.log(result)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)