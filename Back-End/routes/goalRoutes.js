const express = require("express");
const router = express.Router();
const {
  GetGoals,
  UpdateGoal,
  SetGoal,
  DeleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, GetGoals).post(protect, SetGoal);
router.route("/:id").put(protect, UpdateGoal).delete(protect, DeleteGoal);

module.exports = router;
