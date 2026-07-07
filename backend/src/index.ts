import "dotenv/config";
import app from "./app.js";


const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.listen(port, () => {
  console.log(`AMGC backend listening at http://localhost:${port}`);
});
