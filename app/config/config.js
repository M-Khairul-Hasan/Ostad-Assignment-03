export const PORT = 3000

export  const Secret_Key = "abc"
export  const Secret_Key_Expire_Time =  10 * 60 * 1000

export  const Email_Host = "smtp.gmail.com"
export  const Email_Port = "587"
export  const Email_User = "khairul.hx@gmail.com"
export  const Email_Password = ""

export const MONGODB_URI = "mongodb+srv://Shanto:Shantonu12@cluster0.f33r5.mongodb.net"


export const MaxJSON_Size = "1mb"
export const URL_Encoded= true

export const Request_Time_Limit= 2 * 60 * 1000
export const Request_Per_Time_Limit=  1000

export const Web_Cache= false

export function  Upload_Folder(fileName){
    return path.resolve(process.cwd(),'storage',fileName)
}





