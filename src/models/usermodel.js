const { DataTypes } = require("sequelize");
const SQLconnection = require("../db/connection");

const User = SQLconnection.define("User", {
    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : false,
        validate: {
            isEmail : true
        }
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    userID: {
        type: DataTypes.INTEGER
      }
});

module.exports = User;