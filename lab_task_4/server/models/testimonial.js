import e from "express";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
  testimonialName: String,
  heading: String,
  subheading: String,
  parentClass: String,
  testimonialCode: String,
  htmlCode: String,
  cssCode: String,
  reviewClass: String,
  nameClass: String,
  imageClass: String,
  image: String,
  creator: String
});

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;