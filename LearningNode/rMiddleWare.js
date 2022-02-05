module.exports = function(req, res, next)
{
    console.log("current rout from other file is: ", req.originalUrl)
next();
}