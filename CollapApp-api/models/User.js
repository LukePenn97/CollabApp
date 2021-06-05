// // 'use strict';
// // const {
// //   Model
// // } = require('sequelize');


// const { DataTypes } = require("sequelize");
// const db = require('../config/database');

// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     photo: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     bio: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     github: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     slack: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     twitter: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     facebook: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     discord: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     zoom: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     schedule: {
//       type: DataTypes.STRING,
//       allowNull: true
//     },
//     is_mentor: {
//       type: DataTypes.BOOLEAN,
//       allowNull: true
//     }
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

const { DataTypes } = require("sequelize");
const db = require('../config/database');

const User = db.define('User', {
  // Model attributes are defined here
  firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        photo: {
          type: DataTypes.STRING,
          allowNull: true
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: true
        },
        github: {
          type: DataTypes.STRING,
          allowNull: true
        },
        slack: {
          type: DataTypes.STRING,
          allowNull: true
        },
        twitter: {
          type: DataTypes.STRING,
          allowNull: true
        },
        facebook: {
          type: DataTypes.STRING,
          allowNull: true
        },
        discord: {
          type: DataTypes.STRING,
          allowNull: true
        },
        zoom: {
          type: DataTypes.STRING,
          allowNull: true
        },
        schedule: {
          type: DataTypes.STRING,
          allowNull: true
        },
        is_mentor: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        }
}, {
  // Other model options go here
});

module.exports = User;