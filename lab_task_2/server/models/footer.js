import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const footerSchema = new Schema({
    footerName:String,
    logoClass:String,
    emailClass:String,
    addressClass:String,
    phoneClass:String,
    linkParentClass:String,
    linkClass:String,
    linkCode:String,
    htmlCode:String,
    cssCode:String,
    image:String,
    creator:String
})

const Footer = mongoose.model('Footer', footerSchema);
export default Footer;