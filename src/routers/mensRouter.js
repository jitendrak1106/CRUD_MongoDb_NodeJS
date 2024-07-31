const express = require("express");
const router = express.Router();

const MensRanking = require("../models/mens");

router.get("/", async (req, res) => {
    res.send("Hello friends.");
});

//API  to create a record
router.post("/create", async(req, res) => {
    try{
        const addingMensRecord = new MensRanking(req.body);
        const insertMens = await addingMensRecord.save();
        res.status(201).send(insertMens);
    } catch(e) {
        res.status(400).send(e);
    }
});

//API  to get all records
router.get("/getMens", async (req, res) => {
    const getData = await MensRanking.find({}).sort({"ranking":1});
    res.status(200).send(getData);
});

//API  to get a record by id
router.get("/getMen/:id", async (req, res) => {
    const _id = req.params.id;
    const getData = await MensRanking.findById(_id);
    res.status(200).send(getData);
});

//API  to update a record by id
router.patch("/update/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const updateData = await MensRanking.findByIdAndUpdate(_id, req.body, {new:true});
        res.status(200).send(updateData);
    } catch(e){
        res.status(500).send(e);
    }
});

//API  to delete a record by id
router.delete("/delete/:id", async(req, res) => {
    const delData = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(200).send(delData);
});

module.exports = router;