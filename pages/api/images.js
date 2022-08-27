// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   if (req.method === "post") {
//     const data = req.body;

//     const client = await MongoClient.connect(
//       "mongodb+srv://sopuku:Man0slaptazodis@lemara.usclkvi.mongodb.net/?retryWrites=true&w=majority"
//     );

//     const db = client.db("lemara");
//     const collection = db.collection("lemara");

//     const result = await collection.addOne();

//     console.log(result);

//     client.close();

//     res.status(201).json({ message: "kazkas padaryta" });
//   }
// }

//taip dedam itemus i db
