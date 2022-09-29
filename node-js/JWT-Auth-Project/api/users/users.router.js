const {createUser, deleteUser, getUserById, getUsers, updateUser} = require("./users.controller");
const router = require("express").Router();


router.post("/", createUser);
router.get("/",getUsers);
router.get("/:id", getUserById);
router.patch("/:id",updateUser);
router.delete("/",deleteUser)


module.exports = router;