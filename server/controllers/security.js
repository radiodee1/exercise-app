
module.exports.LoginRequired = (req, res, next)=>{ 
    const TRUE = true;
    if(req.user || TRUE ){
        console.log(req.user);
        
        next();
    }
    else
    {
        next({ code:403, msg: "You need to be logged in to access this resource" })
    }
}