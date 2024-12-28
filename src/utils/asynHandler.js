// Here we are defining the `asynHandler` in this way so that we can use this wrapper for further use whenver we have to call for the asyn() 
// by the promise 
// 
const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler())
        .catch((err) => next(err))
    }
}

export {asyncHandler};

// by using the higher order functions 
// const asynHandler = (fn) => async (req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }catch(err){
//         res.status(err.code || 500).json({
//             sucess : false,
//             message : err.message,
//         })
//     }
// }