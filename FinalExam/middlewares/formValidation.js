export default function (req, res, next) {
  try {
    const {
      logo,
      linkClass,
      ParentClass,
      navbarLinkCode,
      htmlCode,
      cssCode,
      fileName,
      name,
    } = req.body;

    console.log(req.body);
    if (
      logo == "" ||
      linkClass == "" ||
      ParentClass == "" ||
      navbarLinkCode == "" ||
      htmlCode == "" ||
      cssCode == "" ||
      fileName == "" ||
      name == ""
    ) {
      console.log("Please fill all the fields");
      return res.status(200).json({ message: "Please fill all the fields" });
    }
    next();
  } catch (error) {}
}
