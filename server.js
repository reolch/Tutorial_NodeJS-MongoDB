const express = require("express")
const app = express();
const mongoose = require("mongoose")

const foodRoutes = require("./routes/foodRoutes")

app.use(foodRoutes)

mongoose.connect("mongodb+srv://shincode:abc@cluster0.wn2tfwt.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("データベース接続に成功しました。"))
.catch((err) => console.log(err));

app.listen(3000, () => {
    console.log("started server")
});

