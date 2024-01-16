const User = require('../Model/User.model');
const Contact = require('../Model/Contact.Model');
const { ContactForm } = require('../Helper/Validations/ContactValidation')

// const userInsert = async (req, res, next) => {
//     const user = new User(req.body);
//     const result = await user.save();
//     res.status(200).send(result.ops);
// };
// module.exports = userInsert;

module.exports = {
    userCreate: async (req, res, next) => {
        try {
            const Data = await UserForm.validateAsync(req.body)
            const user = new User(req.body);
            const result = await user.save();
           return res.send({success:true,message:"Data Save Successfully"});
        } catch (error) {
            next(error)
        }
    },
    saveContactDetail: async (req, res, next) => {
        try {
            const data = await ContactForm.validateAsync(req.body);
            const contact = new Contact(req.body);
            const result = await contact.save();
            return res.send({success : true, message: "data save successfully"}) ;
        } catch (error) {
            next(error)
        }
    }
}