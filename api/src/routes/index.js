const { Router } = require('express');
const router = Router();
const genres = require('./genres.js')
const detail = require('./Detail.js')
const search = require('./Search.js')
const platforms = require('./Platforms.js')

router.use('/search', search)
router.use('/genres', genres)
router.use('/detail', detail)
router.use('/platforms', platforms)
module.exports = router;