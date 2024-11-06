import {EncodeToken,DecodeToken} from "../utility/tokenUtility.js";
import EmailSender from "../utility/mailUtility.js";
import * as path from "node:path";



export const test = async (req, res) => {
    res.send("Hello World!");
}

export const TokenEn = async (req, res) => {
    let result = EncodeToken("khairul.hx@gmail.com","adb" , "123")
    res.json({token: result})
}

export const TokenDe = async (req, res) => {
    let result = DecodeToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtoYWlydWwuaHhAZ21haWwuY29tIiwidXNlcl9pZCI6ImFkYiIsInBhc3N3b3JkIjoiMTIzIiwiaWF0IjoxNzMwNzE5MTU2LCJleHAiOjE3MzEzMTkxNTZ9.uYXQ7TDwgb5uXcCbp--0yFd5t49OQyqJRGWCE3HsH80")
    res.json({token: result})
}
export const Email  = async (req, res) => {
    let EmailTo = "khairul.hasan@projukti-bd.com"
    let EmailText="ABCDEFGH"
    let EmailSubject= "XYZ123"
    let EmailHtmlBody = " lorem ipsum dolor sit amet."

    let result = await EmailSender(EmailTo,EmailText,EmailSubject,EmailHtmlBody)
    res.json({emailStatus: result})
}


export const Profile=async(req,res)=>{
    res.json({status:"ok"});
}

export const CreateCookies=async (req,res)=>{

    let cookieOptions={
        expires:new Date(Date.now() + 60 * 60 * 1000), httpOnly:true, sameSite:true,
    }

    let data="Title of the WebSite"
    let cookieName="Cookie-yammy"

    res.cookie(cookieName,data,cookieOptions)

    res.json({status:"ok"});
}
export const RemoveCookies=async (req,res)=>{
    let cookieOptions={expires:new Date(Date.now() - 60 * 60 * 1000), httpOnly:true, sameSite:true,}
    let data=""
    let cookieName="Cookie-yammy"
    res.cookie(cookieName,data,cookieOptions)
    res.json({status:"ok"});
}
export const FileUpload = async (req,res)=>{
    let File = req.files['myImg']
    let FileName = File.name;
    let FilePath = path.resolve(process.cwd(),'storage', FileName)
    await File.mv(FilePath, function (err) {
        if (err) {
            res.json({status: "not ok"});
        } else {
            res.json({status: "ok"});
        }
    })
}