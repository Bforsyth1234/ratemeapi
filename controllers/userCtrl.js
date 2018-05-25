const passport = require('passport');

exports.createUser = (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if(err) {
            return res.status(500).json({error: err});
        }

        if(info) {
            return res.status(400).json({error: info});
        }

        return res.status(201).json({message: 'User succesfully created ', user: user});
    })(req, res, next);
}