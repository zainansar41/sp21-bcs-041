import jwt from 'jsonwebtoken'
import ENV from '../config.js'

export default function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodedToken = jwt.verify(token, ENV.JWT_TOKEN)
        req.userData = decodedToken
        next()
        
    } catch (error) {
        res.status(401).send({
            message: "Auth failed"
        })
    }
}