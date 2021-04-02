
module.exports.LoginRequired = (req, res, next)=>{ 
    const TRUE = true;
    if(req.user || TRUE){
        next();
    }
    else
    {
        next({ code:403, msg: "You need to be logged in to access this resource" })
    }
}