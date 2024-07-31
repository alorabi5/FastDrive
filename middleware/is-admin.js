const isAdmin = (req, res, next) => { 
    if (req.session.user && req.session.user.isAdmin){
        return next();
    }
    else{
        res.send('You are Not an admin');
    }
}

module.exports = isAdmin;