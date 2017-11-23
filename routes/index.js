let express = require('express');
let router = express.Router();
let devModule = require("../module/module/DevModule.js");
let browserModule = require("../module/module/BrowserModule.js")
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {
        title: '项目管理系统'
    });
});
router.get('/getAllDev', (req, res, next) => {
    devModule.find({}, (err, data) => {
                if (err) {
                    console.log(err);
                }else {
                    res.json(data);
                }
            });
});

router.post("/setDevConfig",(req,res,next)=>{
      let newItem = req.body;
      devModule.create(newItem, (err) => {
          if (err) {
              console.log(err);
          }else {
              devModule.find({}, (err, data) => {
                  if (err) {
                      console.log(err);
                  }else {
                      res.json(data);
                  }
              });
          }
      })
});

router.post("/deleteRawDev",(req,res,next)=>{
    let deleteItem = req.body;
    devModule.remove(deleteItem, (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.json(data)
        }
    })
});

router.post("/updateDev",(req,res,next)=>{
    let updateItem = req.body;
    let ID=updateItem._id;
    devModule.update({"_id":ID},{$set:{
        IP:updateItem.IP,
        version:updateItem.version,
        time:updateItem.time,
        use:updateItem.use,
        IPOP:updateItem.IPOP,
        usetime:updateItem.usetime,
        teammate:updateItem.teammate
    }
    }, (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.json(data)
        }
    })
});

/*
* 获取浏览器信息
* */

router.get('/getAllBrowser', (req, res, next) => {
    browserModule.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }else {
            console.log(data)
            res.json(data);

        }
    });
});

router.post("/deleteRawBrow",(req,res,next)=>{
    let deleteItem = req.body;
    browserModule.remove(deleteItem, (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.json(data)
        }
    })
});

router.post("/setBrowsConfig",(req,res,next)=>{
    let newItem = req.body;
    browserModule.create(newItem, (err) => {
        if (err) {
            console.log(err);
        }else {
            browserModule.find({}, (err, data) => {
                if (err) {
                    console.log(err);
                }else {
                    res.json(data);
                }
            });
        }
    })
});

router.post("/updateBrowsConfig",(req,res,next)=>{
    let updateItem = req.body;
    let ID=updateItem._id;
    browserModule.update({"_id":ID},{$set:{
        IE:updateItem.IE,
        firefox:updateItem.firefox,
        chrome:updateItem.chrome,
        teammate:updateItem.teammate
    }
    }, (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.json(data)
        }
    })
});
module.exports = router;
