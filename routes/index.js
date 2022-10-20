import express from 'express';
var router = express.Router();


/* GET home page. 
   Public */
router.get('/', function(req, res, next) {
  res.send("OK");
});




// module.exports = router;
export default router