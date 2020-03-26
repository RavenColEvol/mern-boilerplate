const { check } = require('express-validator')


const registerRules = () => [
    check('username', 'Username is required.')
        .not()
        .isEmpty(),
    check('password')
        .isLength({min : 6}, 'Minimum password lenght should be +6')
]

const loginRules = () => [
    check('username')
        .not()
        .isEmpty(),
    check('password')
        .not()
        .isEmpty()
]


module.exports = {
    registerRules,
    loginRules
}