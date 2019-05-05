var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cate', function(req, res, next) {
  var arr=[
    'http://img61.ddimg.cn/upload_img/00609/mao/01-1555331855.png',
    'http://img63.ddimg.cn/upload_img/00609/mao/02-1555331867.png',
    'http://img61.ddimg.cn/upload_img/00609/mao/03-1555331877.png',
    'http://img62.ddimg.cn/upload_img/00609/mao/04-1555331887.png',
    'http://img61.ddimg.cn/upload_img/00609/mao/01-1555331855.png',
    'http://img63.ddimg.cn/upload_img/00609/mao/02-1555331867.png',
    'http://img61.ddimg.cn/upload_img/00609/mao/03-1555331877.png',
    'http://img62.ddimg.cn/upload_img/00609/mao/04-1555331887.png',
    'http://img61.ddimg.cn/upload_img/00609/mao/03-1555331877.png',
    'http://img62.ddimg.cn/upload_img/00609/mao/04-1555331887.png'
  ]
  res.send(arr);
  return;
});

router.get('/ping',function(req,res,next){
  var arr=[
    {
      index:0,
      list:[
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png'
      ]
    },
    {
      index:1,
      list:[
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png',
        'http://img62.ddimg.cn/upload_img/00709/wangsiyu/lp0417logo0417-1555492708.png'
      ]
    },
    {
      index:2,
      list:[
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png'
      ]
    },
    {
      index:3,
      list:[
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png',
        'http://img63.ddimg.cn/upload_img/00609/mao/06-1555331907.png'
      ]
    }
  ]
  res.send(arr);
});

router.get('/splik',function(req,res,next){
  var arr=[
    {
      index:0,
      imges:'http://img3m1.ddimg.cn/36/33/60629121-1_h_2.jpg',
      wenzi:'热销10万+运动休闲装两件套秒杀仅65元！',
      price:'￥65'
    },
    {
      index:1,
      imges:'http://img3m1.ddimg.cn/36/33/60629121-1_h_2.jpg',
      wenzi:'热销10万+运动休闲装两件套秒杀仅65元！',
      price:'￥65'
    },
    {
      index:2,
      imges:'http://img3m1.ddimg.cn/36/33/60629121-1_h_2.jpg',
      wenzi:'热销10万+运动休闲装两件套秒杀仅65元！',
      price:'￥65'
    },
    {
      index:3,
      imges:'http://img3m1.ddimg.cn/36/33/60629121-1_h_2.jpg',
      wenzi:'热销10万+运动休闲装两件套秒杀仅65元！',
      price:'￥65'
    },
    {
      index:3,
      imges:'http://img3m1.ddimg.cn/36/33/60629121-1_h_2.jpg',
      wenzi:'热销10万+运动休闲装两件套秒杀仅65元！',
      price:'￥65'
    }
  ]

  res.send(arr);
  // return;
});
module.exports = router;
