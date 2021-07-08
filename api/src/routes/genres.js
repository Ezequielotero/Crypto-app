const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express");
const { Router } = require('express');
const router = Router();

router.use(express.json());
router.use(cors());


let array=[] 
router.get('/', async (req, res) => {
     array=[]
    let resp = await axios.get('https://api.rawg.io/api/genres?key=39b9c8b123814fd0a48b1daed2d5b953')
    resp.data.results.forEach(game => {
        array.push({
            id:game.id,
            sulg:game.slug,
            name:game.name
        })
    });
        res.send(array)
})

module.exports = router;