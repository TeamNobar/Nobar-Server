import mongoose, { ConnectOptions } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongo: MongoMemoryServer | null = null;

const connectDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
 
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then((_res) => {
    console.log(
      "Connected to TestDB"
    );
  })
  .catch((err) => {
    console.log(
      "Failed to connect to TestDB - ",
      err
    );
  });
};

const dropDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

const dropCollections = async () => {
  if (mongo) {
    const collections = await mongoose.connection.db.collections();
    for (const collection of collections) {
      await mongoose.connection.dropCollection(collection.collectionName);

    }
  }
};

export { 
  connectDB, 
  dropDB, 
  dropCollections
}
