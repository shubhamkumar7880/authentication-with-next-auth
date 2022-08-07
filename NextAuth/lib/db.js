import { MongoClient } from "mongodb";

 export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://khiladi786:khiladi786@cluster0.6xgx6.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
};

export default connectToDatabase;
