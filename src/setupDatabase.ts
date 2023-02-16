import * as mongoose from "mongoose";
import { config } from "./config";

export default () => {
  const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(`${config.DATABASE_URL}`)
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
