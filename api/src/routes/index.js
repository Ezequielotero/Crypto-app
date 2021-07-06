const { Router } = require('express');
const router = Router();
const genres = require('./genres.js')
const detail = require('./Detail.js')


router.use('/genres', genres)
router.use('/detail', detail)
module.exports = router;