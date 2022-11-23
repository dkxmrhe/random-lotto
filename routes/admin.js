const express = require('express');
const router = express.Router();
const Lotto = require('../models/lotto');

router.post('/login', (req, res) => {
    const adminPwd = req.body.adminPwd;
    const pwd = 'tnwltkfkd1012!';

    if(adminPwd === pwd) {
        res.render('adminManage');
    } else {
        res.send('<script type="text/javascript">alert("비밀번호 틀림"); history.go(-1);</script>');
    }
});

router.get('/login', (req, res) => {
    res.render('adminManage');
});

router.post('/lottoAdd', async (req, res, next) => {
    const lottoTurn = req.body.lottoTurn;
    try {
        let exTurn = await Lotto.findOne({where: {turn: lottoTurn}});
        if(!exTurn) {
            const { num1, num2, num3, num4, num5, num6, bonusNum, lottoDate, lottoNum } = req.body;
            await Lotto.create({
                turn: lottoTurn,
                num1,
                num2,
                num3,
                num4,
                num5,
                num6,
                bonusNum,
                lottoDate,
                lottoNum,
            });
        }
        return res.redirect('/admin/login');
    } catch(err) {
        console.error(err);
        return next(err);
    }
});

module.exports = router;