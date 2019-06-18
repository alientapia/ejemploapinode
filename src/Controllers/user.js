const User = require('../Models/user');
module.exports = {

    index: async (req, res, next) =>{
        const users = await User.find({});
        //throw new Error('Error dummy');
        res.status(200).json(users)
    },
    newUser: async (req, res, next) =>{
        const user = new User(req.body);
        const new_user = await user.save();
        res.status(200).json(new_user);
    },
    get_user: async (req, res, next) =>{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    },
    update_user: async (req, res, next) =>{
        const {id} = req.params;
        const update_user = await User.findByIdAndUpdate(id, req.body);
        res.status(200).json(update_user);
    },
    delete_user: async (req, res, next) =>{
        const {id} = req.params;
        const delete_user = await User.findByIdAndDelete(id);
        res.status(200).json({"success": true});
    }





};