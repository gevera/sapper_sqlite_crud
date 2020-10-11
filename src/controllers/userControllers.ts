import { UserModel } from '../db/Models/User';
import { sequelize } from '../db/sqliteDB';

export const getAllUsers = async (req, res, next) => {
    try {
        await sequelize.sync();
        const users = await UserModel.findAll();
        res.json({ success: true, data: users }).status(200);

    } catch (e) {
        console.log(e);
        res.json({ success: false, message: 'Failed to find users' }).status(500);
    }
}

export const createAUser = async (req, res, next) => {

    try {
        await sequelize.sync();
        const { name, lineage } = req.body;
        const newUser = await UserModel.create({ name, lineage });
        res.json({ success: true, data: newUser }).status(200);
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: 'Failed to create a new user' }).status(500);
    }
}

export const getAUser = async (req, res, next) => {
    try {
        await sequelize.sync();
        const user = await UserModel.findAll({
            where: {
                id: req.params.id
            }
        });
        if (user.length) {
            res.json({ success: true, data: user }).status(200);
        } else {
            res.json({ success: false, message: 'Failed to find user' }).status(404);
        }

    } catch (e) {
        console.log(e);
        res.json({ success: false, message: 'Failed to find user' }).status(500);
    }
}

export const deleteAUser = async (req, res, next) => {
    try {
        await sequelize.sync();
        const user = await UserModel.destroy({
            where: {
                id: req.params.id
            }
        });
        if (user) {
            res.json({ success: true, message: 'User deleted!' }).status(204);
        } else {
            res.json({ success: false, message: 'Failed to find user' }).status(404);
        }

    } catch (e) {
        console.log(e);
        res.json({ success: false, message: 'Failed to delete user' }).status(500);
    }
}

export const updateAUser  = async (req, res, next) => {
    try {
        await sequelize.sync();
        const user = await UserModel.update({ ...req.body }, {
            where: {
                id: req.params.id
            }
        });
        if (user.length) {
            res.json({ success: true, message: 'User updated!', data: user }).status(204);
        } else {
            res.json({ success: false, message: 'Failed to find user' }).status(404);
        }
    } catch (e) {
        console.log(e);
        res.json({ success: false, message: 'Failed to update user' }).status(500);
    }
}