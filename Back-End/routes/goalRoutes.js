const express = require("express");
const router = express.Router();
const {
  GetGoals,
  UpdateGoal,
  SetGoal,
  DeleteGoal,
} = require("../Controllers/goalController");

router.route("/").get(GetGoals).post(SetGoal);
router.route("/:id").put(UpdateGoal).delete(DeleteGoal);

module.exports = router;
