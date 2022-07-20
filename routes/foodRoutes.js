const express = require("express")
const app = express();
const foodModel = require("../models/Food");
app.use(express.json());

app.get("/foods", async(req, res) => {
    // データベースの中のすべてのデータを返す。
    const foods = await foodModel.find({});

    try {
        res.send(foods);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/food", async(req, res) => {
    // データベースの中のすべてのデータを返す。
    const food = new foodModel(req.body);

    try {
        await food.save();
        res.send(food);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch("/food/:id", async(req, res) => {
    // データベースの中のすべてのデータを返す。
    const food = new foodModel(req.body);

    try {
        await foodModel.findByIdAndUpdate(req.params.id, req.body);
        await foodModel.save();
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/food/:id", async(req, res) => {
    // データベースの中のすべてのデータを返す。
    const food = new foodModel(req.body);

    try {
        await foodModel.findByIdAndRemove(req.params.id);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;