import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const navbarSchema = new Schema({
    navbarName:String,
    logoClass: String,
    linkClass: String,
    linkParentClass: String,
    linkCode:String,
    htmlCode:String,
    cssCode:String,
    image:String,
    creator:String
})

export default mongoose.model('Navbar', navbarSchema);