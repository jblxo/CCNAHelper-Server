import User from '../../models/User';

export default {
    addUser: (root, {
        id,
        name,
        email
    }) => {
        const newUser = new User({
            id,
            name,
            email
        });

        return new Promise((resolve, reject) => {
            newUser.save((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    },
    editUser: (root, {
        id,
        name,
        email
    }) => {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate({
                id
            }, {
                $set: {
                    name,
                    email
                }
            }).exec(
                (err, res) => {
                    err ? reject(err) : resolve(res);
                }
            );
        });
    },
    deleteUser: (root, args) => {
        return new Promise((resolve, reject) => {
            User.findOneAndRemove(args).exec((err, res) => {
                err ? reject(err) : resolve(res);
            });
        });
    }
}