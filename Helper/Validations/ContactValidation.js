const Joi = require('joi');

const ContactForm = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().email({
        minDomainSegments:1,
         tlds:{allow:["com"]}
    }).required(),
    Message: Joi.string().required(),
})

const UserForm = Joi.object({
    Name: Joi.string().required(),
    Email: Joi.string().email({
        minDomainSegments:1,
         tlds:{allow:["com"]}
    }).required(),
    Message: Joi.string().required(),
})



module.exports = {
    ContactForm,
    UserForm
};