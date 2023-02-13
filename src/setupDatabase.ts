import * as mongoose from "mongoose";

export default () => {
  const connect = () => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(
        "mongodb+srv://Mimo:test12345@cluster0.imas8vz.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Successfully connected to database.");
      })
      .catch((err) => {
        console.log(err);
        return process.exit(1);
      });
  };
  connect();

  // mongoose.connection.on("disconnected", connect);
};
