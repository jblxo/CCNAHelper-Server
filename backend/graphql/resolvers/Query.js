import User from '../../models/User';

export default {
    user: (root, args) => {
        return new Promise((resolve, reject) => {
            User.findOne(args).exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    },
    users: () => {
        return new Promise((resolve, reject) => {
            User.find({})
                .populate()
                .exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
        });
    }
};