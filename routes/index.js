var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,home:true });
});
router.get('/table',(req,res)=>{
  team = [
    {
      pos:1,
      name:'Malappuram FC',
      owner:'Muhsin',
      tg:0,
      tp:0
    },
    {
      pos:2,
      name:'Kerala blasters',
      owner:'Rishad',
      tg:0,
      tp:0
    },
    {
      pos:3,
      name:'Farseen FC',
      owner:'Farseen',
      tg:0,
      tp:0
    },
    {
      pos:4,
      name:'Manchester united',
      owner:'Rashad',
      tg:0,
      tp:0
    },
    {
      pos:5,
      name:'Leicester City',
      owner:'Shamil',
      tg:0,
      tp:0
    },
    {
      pos:6,
      name:'Barcelona',
      owner:'Shinas',
      tg:0,
      tp:0
    },
    {
      pos:7,
      name:'Ponmundam FC',
      owner:'Ifthar',
      tg:0,
      tp:0
    },
    {
      pos:8,
      name:'Juventus',
      owner:'Shahal',
      tg:0,
      tp:0
    },
  ]
  res.render('table',{team,table:true});
})

module.exports = router;
