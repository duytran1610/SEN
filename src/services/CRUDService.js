import bcrypt from "bcrypt";
import db from "../models/index";

// generate a salt for hash password
const saltRounds = 10;

// create a new user
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPwd = await hashUserPassword(data.password);
            await db.User.create({...data, password: hashPwd});
            resolve('Create a new user succeed!');
        }
        catch(e) {
            reject(e);
        }
    })

}

// To hash a password:
let hashUserPassword = (pwd) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPwd = bcrypt.hash(pwd, saltRounds);
            resolve(hashPwd);
        }
        catch(e) {
            reject(e);
        }
    })
}

// get all user
let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll();
            resolve(users);
        }
        catch(e) {
            reject(e);
        }
    })
}
 
export default {
    createNewUser,
    getAllUser
}