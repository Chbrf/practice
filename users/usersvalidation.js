const joi = require("joi")

module.exports = {
    login: {
        body:joi.object({
        username:joi.string().required(),
        password:joi.string().required()}),
    },
}