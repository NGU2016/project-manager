let express = require('express');
let router = express.Router();
let devModule = require("../module/module/DevModule.js");
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
      const newItem = req.body;
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
    const deleteItem = req.body;
    devModule.remove(deleteItem, (err,data) => {
        if (err) {
            console.log(err);
        }else {
            res.json(data)
        }
    })
});

router.post("/updateDev",(req,res,next)=>{
    const deleteItem = req.body;
    const ID=deleteItem._id;
    devModule.update({"_id":ID},{$set:{
        IP:deleteItem.IP,
        version:deleteItem.version,
        time:deleteItem.time,
        use:deleteItem.use,
        IPOP:deleteItem.IPOP,
        usetime:deleteItem.usetime,
        teammate:deleteItem.teammate
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
