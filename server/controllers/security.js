
module.exports.LoginRequired = (req, res, next)=>{ 
    const MOD = true;
    if(req.user || MOD){
        console.log(req.user);        
        next();
    }
    else
    {
        next({ code:403, msg: "You need to be logged in to access this resource" })
    }
}