const {registerService,loginSerice,getUserBYID,updateUser}=require('../auth/authService')
const {StatusCodes}=require('http-status-codes')
const login=async(req,res)=>{
const {email,password}=req.body
const User_Exist=await loginSerice(email,password)

if (!User_Exist){
    return res.status(StatusCodes.BAD_REQUEST).send('Wrong email or password ')
}
res.status(StatusCodes.OK).send(User_Exist)
}
const register =async(req,res)=>{
    const {username,email,password}=req.body

    const Register=await registerService({username,email,password})
    res.status(StatusCodes.CREATED).send({ msg: 'User created',Register })
}

const getBYID=async(req,res)=>{
    const id=req.params.id
    const user=await getUserBYID(id)
    if (!user){
        return res.status(StatusCodes.BAD_REQUEST).send('id non trouvable ')
    }
    res.status(StatusCodes.OK).send({user})
}
const updateUserController=async(req,res)=>{
    const {
     body:{username,email,password,role},
        params:{id:userID}
    }=req
   const User_to_update=await updateUser(userID,req.body)
  
if (!User_to_update){
    return res.status(StatusCodes.OK).send('id non trouvable ')
}
res.status(StatusCodes.OK).send({msg:'User up to date'})
}
module.exports={login,register,getBYID,updateUserController}