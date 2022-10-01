const mongoose = require('mongoose');

const moment = require("moment");
const dateIndia = moment().format("DD/MM/YYYY");
const defImage = "https://qph.cf2.quoracdn.net/main-qimg-a4b08b0e31e27f5550b6a3cb5c2f4252-pjlq";
// console.log(dateIndia)


const blogSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required: true
    },
    notes:{
        type:String,
        required:true
    },
    date:{
        type: String,
        default: dateIndia,
    },
    img: {
        type: String,
        default: defImage,
    },
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }

})
const blogModel = mongoose.model('blogy',blogSchema)

module.exports = blogModel
