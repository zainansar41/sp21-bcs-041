import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    // buttonClass, cssCode, fileInput, fileName, heading, htmlCode, name, paraClass
    name:String,
    heading:String,
    paraClass:String,
    buttonClass:String,
    htmlCode:String,
    cssCode:String,
    image:String,
    creator:String,
});

const Hero = mongoose.model("Hero", HeroSchema);

export default Hero;