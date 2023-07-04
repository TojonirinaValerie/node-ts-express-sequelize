import { DataTypes, Model } from 'sequelize';
import sequelize from '../db.config';
import { UserAttributes } from '../types/user.type';

const User = sequelize.define<Model<UserAttributes>>('User', {
  id: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
});

User.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

// User.sync({ force: true });

export default User;
