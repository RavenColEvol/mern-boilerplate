const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User.models')
const validator = require('../validation/validator');
const { registerRules, loginRules } = require('../validation/user.validation')

require('dotenv').config()


/**
 * @method      POST 
 * @route       /api/user/register
 * @params      (username, password, password2)
 * @return      (token)
 */
router.post('/register', registerRules(), validator, async (req, res) => {
    const { username, password, password2 } = req.body;

    if (password != password2) return res.status(422).json({ errors: [{ msg: 'Password did\'t match.' }] })

    try {
        let user = await User.create({
            username,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })
    } catch (error) {
        res.status(500).send('Server Error')
    }
})


/**
 * @method      POST 
 * @route       /api/user/login
 * @params      (username, password)
 * @return      (token)
 */
router.post('/login', loginRules(), validator, async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username })
        if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Username or Password.' }] })

        let matched = await bcrypt.compare(password, user.password)

        if (!matched) return res.status(400).json({ errors: [{ msg: 'Invalid Username or Password.' }] })

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        })

    } catch (eror) {
        res.status(500).send('Server Error')
    }

})

module.exports = router;