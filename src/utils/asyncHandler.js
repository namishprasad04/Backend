const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}


export {asyncHandler}









// or


// const ayncHandler = (func) => async (req,res,next) => {
//     try{
//         await func(req,res,next)
//     }catch(error){
//         res.status(err.code || 400).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
