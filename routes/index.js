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
})
module.exports = router;
