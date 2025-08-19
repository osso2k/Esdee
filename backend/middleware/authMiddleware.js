import jwt from 'jsonwebtoken'


export const generateToken = (user, req, res) => {
    try {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" })
        return token
    } catch (error) {
        console.log(error.message)
        res.json({ message: "Error in generating token" })
    }
}

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization


        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }
        try {
            const token = authHeader.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded
            next()
        } catch (error) {
            console.error("JWT Error:", error.message);
            return res.status(401).json({ message: "Invalid or expired token" })
        }

    } catch (error) {
        console.log(error.message)
        res.json(error.message)
    }
}