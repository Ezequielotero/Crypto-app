const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express");
const { Router } = require('express');
const router = Router();

router.use(express.json());
router.use(cors());


let array=[] 

router.get('/', async (req, res) => {
    let resp = await axios.get('https://api.rawg.io/api/games?key=39b9c8b123814fd0a48b1daed2d5b953')
    array=[]
    resp.data.results.forEach(game => {
      array.push({
        id:game.id,
        slug:game.slug,
        name:game.name,
        rating:game.rating,
        platforms: game.platforms.map((p) =>  p.platform.name),
        short_screenshots: game.short_screenshots.map((p) =>  p.image)
        })
    });
    
      res.send(array)
 })

 router.get('/:id', async (req, res) => {
   array=[]
    id=req.params.id
    let resp = await axios.get(`https://api.rawg.io/api/games/${id}?key=39b9c8b123814fd0a48b1daed2d5b953`)
    array.push({
      id:resp.data.id,
      slug:resp.data.slug,
      name:resp.data.name,
      released:resp.data.released,
      background:resp.data.background_image,
      description:resp.data.description,
      platforms: resp.data.platforms.map((p) =>  p.platform.name),
      minimun: resp.data.minimum,
      recommended:resp.data.recommended,
      // short_screenshots: resp.data.short_screenshots.map((p) =>  p.image)
    })
    res.send(array)
 })

 
module.exports = router;