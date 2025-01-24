const asyncHanlder=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>{
            next(err);
        })
    }
}


// const asyncHandler=async(req,res,next)=>{
//     try {
//      await fn(req,res,next)
//     } catch (err) {
//         res.status(err.code||500).json({
//         succes:false,
//         message:err.message    
//         })
//     }
// }

export {asyncHanlder};