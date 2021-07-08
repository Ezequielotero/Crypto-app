const { Router } = require('express');
const router = Router();
const genres = require('./genres.js')
const detail = require('./Detail.js')
const search = require('./Search.js')

router.use('/search', search)
router.use('/genres', genres)
router.use('/detail', detail)
module.exports = router;