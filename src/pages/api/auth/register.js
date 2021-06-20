import connectDB from '../../../utils/connectDB'
import Users from '../../../models/userModel'
import {validRegister} from '../../../utils/valid'
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from "../../../utils/generateToken";

connectDB()

export default async (req, res) => {
    switch(req.method){
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try{
        const { email, password, cf_password, chkbox } = req.body
        const errMsg = validRegister(email, password, cf_password, chkbox)
        if(errMsg) return res.status(400).json({err: errMsg})

        const user = await Users.findOne({ email })
        if(user) return res.status(400).json({err: 'This email already exists.'})
        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = new Users({
            name: email, email, password: passwordHash, cf_password
        })
        const newUserRes = await newUser.save()
        const access_token = createAccessToken({id: newUserRes._id})
        const refresh_token = createRefreshToken({id: newUserRes._id})
        res.json({msg: "Register Success!",
            refresh_token,
            access_token,
            user: {
                name: newUserRes.name,
                email: newUserRes.email,
                role: newUserRes.role,
                avatar: newUserRes.avatar,
                root: newUserRes.root
            }})

    }catch(err){
        return res.status(500).json({err: err.message})
    }
}