import bcrypt from "bcryptjs";
import User from "../../models/user.js";
import Navbar from "../../models/navbar.js";
import Testimonial from "../../models/testimonial.js";
import Footer from "../../models/footer.js";
import Hero from "../../models/hero.js";

export async function GetLogin(req, res) {
  try {
    res.render("Login");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function PostSignup(req, res) {
  try {
    const { email, password } = req.body;
    const name = email.split("@")[0];

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(200).send({ error: "User already exists" });

    if (password) {
      bcrypt.hash(password, 12).then(async (hashedpassword) => {
        const newUser = new User({
          name,
          email,
          role: "admin",
          password: hashedpassword,
        });

        await newUser.save();

        // Set user session
        req.session.user = {
          userID: newUser._id,
          name: newUser.name,
        };

        res.status(201).send({
          message: "You have been registered successfully",
          user: req.session.user,
        });
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function PostLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(203).send({ message: "User does not exist" });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Set user session
      req.session.user = {
        userID: user._id,
        name: user.name,
      };

      res.status(200).send({
        message: "You have been logged in successfully",
        user: req.session.user,
      });
    } else {
      res.status(203).send({ message: "Password does not match" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function GetHome(req, res) {
  try {
    res.render("Home", { user: req.session.user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function uploadNavbar(req, res) {
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
    const newNavbar = new Navbar({
      navbarName: name,
      logoClass: logo,
      linkClass,
      linkParentClass: ParentClass,
      linkCode: navbarLinkCode,
      htmlCode,
      cssCode,
      image: fileName,
      creator: req.session.user.name,
    });

    await newNavbar.save();

    res.status(201).send({
      message: "uploaded successfully",
      user: req.session.user,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function GetTestimonial(req, res) {
  try {
    res.render("Testimonials", { user: req.session.user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function uploadTestimonial(req, res) {
  try {
    const {
      name,
      headingClass,
      subHeadingClass,
      ParentClass,
      TestimonialCode,
      ReviewClass,
      NameClass,
      htmlCode,
      cssCode,
      fileName,
      ImageClass,
    } = req.body;
    console.log(req.body);

    const newTestimonial = new Testimonial({
      testimonialName: name,
      heading: headingClass,
      subheading: subHeadingClass,
      parentClass: ParentClass,
      testimonialCode: TestimonialCode,
      htmlCode,
      cssCode,
      reviewClass: ReviewClass,
      nameClass: NameClass,
      imageClass: ImageClass,
      image: fileName,
      creator: req.session.user.name,
    });

    await newTestimonial.save();

    res.status(201).send({
      message: "uploaded successfully",
      user: req.session.user,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function GetFooter(req, res) {
  try {
    res.render("Footer", { user: req.session.user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function uploadFooter(req, res) {
  try {
    const {
      AddressClass,
      EmailClass,
      FooterLinkCode,
      ParentClass,
      cssCode,
      fileInput,
      fileName,
      htmlCode,
      linkClass,
      logo,
      name,
      phoneNoClass,
    } = req.body;
    console.log(req.body);

    const newFooter = new Footer({
      footerName: name,
      logoClass: logo,
      emailClass: EmailClass,
      addressClass: AddressClass,
      phoneClass: phoneNoClass,
      linkParentClass: ParentClass,
      linkClass,
      linkCode: FooterLinkCode,
      htmlCode,
      cssCode,
      image: fileName,
      creator: req.session.user.name,
    })

    await newFooter.save();

    res.status(201).send({
      message: "uploaded successfully",
      user: req.session.user,
    });

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function GetHero(req, res) {
  try {
    res.render("Hero", { user: req.session.user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export async function uploadHero(req, res){
  try {
    const {buttonClass, cssCode, fileName, heading, htmlCode, name, paraClass}= req.body

    const newHero = new Hero({
      name,
      heading,
      paraClass,
      buttonClass,
      htmlCode,
      cssCode,
      image: fileName,
      creator: req.session.user.name,
    })

    await newHero.save();

    res.status(201).send({
      message: "uploaded successfully",
      user: req.session.user,
    });
    
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}