
import { UUIDV4, DataTypes } from 'sequelize';
import { sequelize } from '../sqliteDB';

export const UserModel = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    lineage: {
        type: DataTypes.STRING,
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
