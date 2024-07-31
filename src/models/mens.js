const express = require("express");
const mongoose = require("mongoose");

//Create Schema
const menSchema = mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    },
    height: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        required: false
    }
});

//Now we are creating new collection MenRanking
const MensRanking = new mongoose.model("MenRanking", menSchema);

module.exports = MensRanking;