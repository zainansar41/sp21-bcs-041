import Navbar from "../models/navbar.js";

export async function getHome(req, res) {
  res.render("Home");
}

export async function getForm(req, res) {
  res.render("uploadForm");
}

export async function uploadForm(req, res) {
  try {
    console.log(req.body);
    const {
      logo,
      linkClass,
      ParentClass,
      navbarLinkCode,
      htmlCode,
      cssCode,
      name,
    } = req.body;

    const newNavbar = new Navbar({
      navbarName: name,
      logoClass: logo,
      linkClass,
      linkParentClass: ParentClass,
      linkCode: navbarLinkCode,
      htmlCode,
      cssCode,
    });

    await newNavbar.save();
    console.log("saved");
    return res.status(201).json({ message: "uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}

export async function getNavbar(req, res) {
  try {
    const navbar = await Navbar.find();
    console.log(navbar);
    res.render("navbar", { navbar });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}

export async function deleteNavbar(req, res) {
  const navbarId = req.params.id;

  try {
    // Find the navbar entry by ID and delete it
    const deletedNavbar = await Navbar.findByIdAndDelete(navbarId);

    if (deletedNavbar) {
      return res.json({ message: "deleted successfully" });
    } else {
      return res.status(404).json({ message: "Navbar not found" });
    }
  } catch (error) {
    console.error("Error deleting navbar:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
