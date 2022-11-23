const express = require('express');
const { Lotto } = require('../models');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', async(req, res, next) => {
    try {
        let lottoNum = [];
        for(let i = 1; i < 46; i++) {
        lottoNum.push(i);
        }
        let lottos = await Lotto.findAll({
            attributes: ['turn', 'num1', 'num2', 'num3', 'num4', 'num5', 'num6', 'bonusNum'],
            order: [['turn', 'DESC']],
            limit: 5,
        });
        return res.render('main', { lottoNum, lottos });
    } catch(err) {
        console.error(err);
        return next(err);
    }
});

router.get('/numanal', (req, res) => {
    res.render('numAnalysis');
});

router.get('/yearlotto', (req, res) => {
    res.render('yearLotto');
});

router.get('/admin', (req, res) => {
    res.render('admin');
});

module.exports = router;