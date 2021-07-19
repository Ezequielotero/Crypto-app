const { default: axios } = require("axios");
const cors = require("cors");
const express = require("express");
const { Router } = require('express');
const router = Router();

router.use(express.json());
router.use(cors());


let array=[] 
router.get('/', async (req, res) => {
    if(req.query.name){
      const name = req.query.name
      let resp = await axios.get('https://api.rawg.io/api/games?key=39b9c8b123814fd0a48b1daed2d5b953&search='+name+'&page_size=70')
      array=[]
      resp.data.results.forEach(game => {
        array.push({
          id:game.id,
          slug:game.slug,
          name:game.name,
          rating:game.rating,
          platforms: game.platforms.map((p) =>  p.platform.name),
          genres:game.genres.map((p) =>  p.name),
          short_screenshots: game.short_screenshots.map((p) =>  p.image)
        })
      });
      
      res.send(array)
    }
    else{
      res.send('Please send something')
    }
 }) 
module.exports = router;