
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../sqliteDB';

export const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        //@ts-ignore
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    lineage: {
        type: DataTypes.TEXT,
        defaultValue: "Darmakaya"
    }
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // userName: {
    //     type: DataTypes.STRING,
    //     defaultValue: "anonymous"
    // },
    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // dob: {
    //     type: DataTypes.DATEONLY
    // },
    // credit: {
    //     type: DataTypes.INTEGER,
    //     defaultValue: 0
    // }
});