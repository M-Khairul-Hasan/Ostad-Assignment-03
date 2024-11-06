import {Secret_Key, Secret_Key_Expire_Time} from '../config/config.js'
import jwt from 'jsonwebtoken'

export const EncodeToken = (email, user_id, password) => {
    // need the key & expire time
    const KEY = Secret_Key;
    const EXPIRE = { expiresIn: Secret_Key_Expire_Time };
    //payload
    const PAYLOAD = { email: email, user_id: user_id, password: password };
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        const KEY = Secret_Key;
        return jwt.verify(token, KEY);
    }catch (e){
        return null
    }
}