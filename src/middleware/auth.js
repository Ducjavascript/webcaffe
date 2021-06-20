import jwt from 'jsonwebtoken'
import Users from '../models/userModel'
import {getCookie} from "../utils";


const auth = async (req, res) => {
    const token = getCookie('access_token', req);
    if (!token) return res.status(400).json({err: 'Invalid Authentication.'})
    // invalid token - synchronous
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        if (!decoded) return res.status(400).json({err: 'Invalid Authentication.'})
        const user = await Users.findOne({_id: decoded.id})
        return {
            id: user._id,
            role: user.role,
            root: user.root,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
        };
    } catch (err) {
        return res.status(400).json({err: 'Invalid Authentication. err'})
    }
}

export default auth