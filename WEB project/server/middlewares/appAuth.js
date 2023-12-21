export default function (req, res, next) {
    try {
        if (req.session && req.session.user) {
            next();
        } else {
            res.redirect("/login");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
