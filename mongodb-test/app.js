const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection("users");

  //   const userData = await users.insertOne({ name: "mingyeol", age: 22 });

  //   const userList = [
  //     { name: "lee", age: 30 },
  //     { name: "yoon", age: 32 }
  //   ];
  //   const userListResult = await users.insertMany(userList);

  //   const findUser = await users.findOne({ name: "lee" });
  //   const findAllUser = await users.find({}).toArray();
  //   const findAge = await users.find({ age: { $gt: 30 } }).toArray();
  //   const findAgeOne = await users.findOne({ age: { $gt: 29 } });

  //   const updateUser = await users.updateOne(
  //     { name: "lee" },
  //     { $set: { age: 31 } }
  //   );

  //   const deleteUser = await users.deleteMany({ age: { $gt: 20 } });

  //   const finduserData = await users
  //     .find({ name: "lee" })
  //     .project({ name: 1 ,_id:0})
  //     .toArray();

  const inventory = database.collection("inventory");

  //   const itemData = await inventory.insertOne({
  //     item: "canvas",
  //     qty: 100,
  //     tags: ["cotton"],
  //     size: { h: 28, w: 35.5, uom: "cm" }
  //   });

  //   const itemList = [
  //     {
  //       item: "journal",
  //       qty: 25,
  //       tags: ["blank", "red"],
  //       size: { h: 14, w: 21, uom: "cm" }
  //     },
  //     {
  //       item: "mat",
  //       qty: 85,
  //       tags: ["gray"],
  //       size: { h: 27.9, w: 35.5, uom: "cm" }
  //     },
  //     {
  //       item: "mousepad",
  //       qty: 25,
  //       tags: ["gel", "blue"],
  //       size: { h: 19, w: 22.85, uom: "cm" }
  //     }
  //   ];
  //   const itemListResult = await inventory.insertMany(itemList);

  //   const itemData = await inventory.insertMany([
  //     {
  //       item: "journal",
  //       qty: 25,
  //       tags: ["blank", "red"],
  //       size: { h: 14, w: 21, uom: "cm" }
  //     },
  //     {
  //       item: "mat",
  //       qty: 85,
  //       tags: ["gray"],
  //       size: { h: 27.9, w: 35.5, uom: "cm" }
  //     },
  //     {
  //       item: "mousepad",
  //       qty: 25,
  //       tags: ["gel", "blue"],
  //       size: { h: 19, w: 22.85, uom: "cm" }
  //     }
  //   ]);

  //   const itemList2 = [
  //     {
  //       item: "journal",
  //       qty: 25,
  //       size: { h: 14, w: 21, uom: "cm" },
  //       status: "A"
  //     },
  //     {
  //       item: "notebook",
  //       qty: 50,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "A"
  //     },
  //     {
  //       item: "paper",
  //       qty: 100,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "D"
  //     },
  //     {
  //       item: "planner",
  //       qty: 75,
  //       size: { h: 22.85, w: 30, uom: "cm" },
  //       status: "D"
  //     },
  //     {
  //       item: "postcard",
  //       qty: 45,
  //       size: { h: 10, w: 15.25, uom: "cm" },
  //       status: "A"
  //     }
  //   ];

  //   const itemListResult2 = await inventory.insertMany(itemList2);
  const findItem = await inventory.findOne({ status: "D" });
  const findItem1 = await inventory.find({ status: "D" }).toArray();

  const findItem2 = await inventory.find({ status: "A", qty: 50 }).toArray();

  const findItem3 = await inventory
    .find({ status: { $in: ["A", "B"] } })
    .toArray();

  const findItem4 = await inventory
    .find({ stauts: "A", qty: { $lt: 30 } })
    .toArray();

  const findItem5 = await inventory
    .find({
      $or: [{ status: "A" }, { qty: { $lt: 30 } }]
    })
    .toArray();

  const findItem6 = await inventory.find({ "size.uom": "in" }).toArray();

  const findItem7 = await inventory.find({ "size.h": { $gt: 10 } }).toArray();

  //console.log(findItem7);

  const students = database.collection("students");

  //   const studentData = await students.insertMany([
  //     {
  //       _id: 1,
  //       test1: 95,
  //       test2: 92,
  //       test3: 90,
  //       modified: new Date("01/05/2020")
  //     },
  //     {
  //       _id: 2,
  //       test1: 98,
  //       test2: 100,
  //       test3: 102,
  //       modified: new Date("01/05/2020")
  //     },
  //     { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") }
  //   ]);

  //   const updateStudent = await students.updateOne({ _id: 3 }, [
  //     { $set: { test3: 98 } }
  //   ]);

  //   const updateStudent = await students.updateMany({}, [
  //     { $set: { test1: 0, status: "modified" } }
  //   ]);

  //   const deleteStudent = await students.deleteOne({ test2: 92 });
  const deleteStudent = await students.deleteMany({ test1: 0 });
}

run();
