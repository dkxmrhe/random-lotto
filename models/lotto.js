const Sequelize = require('sequelize');

module.exports = class Lotto extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            turn: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true,
                comment: "회차-고유함",
            },
            num1: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "첫 번째 번호",
            },
            num2: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "두 번째 번호",
            },
            num3: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "세 번째 번호",
            },
            num4: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "네 번째 번호",
            },
            num5: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "다섯 번째 번호",
            },
            num6: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "여섯 번째 번호",
            },
            bonusNum: {
                type: Sequelize.STRING(30),
                allowNull: false,
                comment: "보너스 번호",
            },
            lottoDate: {
                type: Sequelize.DATE,
                allowNull: false,
                comment: "회차에 해당하는 날짜",
            },
            lottoNum: {
                type: Sequelize.STRING(100),
                allowNull: false,
                comment: '보너스를 제외한 총 번호 배열',
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Lotto',
            tableName: 'lottos',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {}
}