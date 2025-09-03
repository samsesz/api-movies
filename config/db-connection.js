import mongoose from "mongoose";

const dbUser = "samiamunizmuniz_db_user";
const dbPassword = "CoiVzOi47TMEKd2I";
const dbName = "api-movies";
const connect = () => {
  mongoose.connect(
    `mongodb+srv://samiamunizmuniz_db_user:CoiVzOi47TMEKd2I@cluster0.0eqnlx8.mongodb.net/api-movies?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
  });
  connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
  });
};
connect();
export default mongoose;
