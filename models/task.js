'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    Nombre: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    User: DataTypes.STRING,
    Status: DataTypes.INTEGER,
    Categoria: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};