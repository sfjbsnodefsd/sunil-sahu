const { json } = require("body-parser");
const ex = require("express");
const Employee = require("../models/employee");
const router = ex.Router();

// get all employees
router.get("/getAllEmployees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.json(err);
  }
});

// add a course

router.post("/addEmployee", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (err) {
    res.json(err);
  }
});

// delete method
router.delete("/delete/:empId", async (req, res) => {
  try {
    await Employee.remove({ _id: req.params.courseId });
    res.status(200).json({
      message: "deleted sucessfully",
    });
  } catch (error) {
    res.send(error);
  }
});

// update course

router.put("/update/:empId", async (req, res) => {
  const empId = req.params.empId;

  try {
    const employee = await Employee.updateOne({ _id: empId }, req.body);
    res.json(employee);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;