const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');

router.use('/htmlRoutes', htmlRoutes);


module.exports = router;
