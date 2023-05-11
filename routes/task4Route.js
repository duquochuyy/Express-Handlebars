const express = require('express');
const router = express.Router();
const { zodiacs } = require('../data');

router.get('/', (req, res) => {
    res.locals.zodiacs = zodiacs;
    let nameZodiac = req.query.name;
    if (nameZodiac) {
        const filtered = zodiacs.filter(item => item.name === nameZodiac);
        let zodiac = filtered[0];
        res.locals.zodiac = zodiac;
        res.render('task4-details');
    }
    else res.render('task4');
})

module.exports = router;