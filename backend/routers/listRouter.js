const router=require('express').Router()
const listController=require("../controllers/listController")

router.post("/addTask",listController.AddList)
router.put("/updateTask/:id",listController.UpdateList)
router.delete("/deleteTask/:id",listController.deleteTask)
router.get("/getTask/:id",listController.getTask)

module.exports=router