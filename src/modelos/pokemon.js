module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "Pokemon",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        tipo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        poder: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        tableName: "pokemon",
        timestamps: true,
      }
    );
  };
  