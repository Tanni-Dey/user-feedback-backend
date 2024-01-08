const express = require("express");
const router = express.Router();
const {
  getAllFeatureReq,
  createFeatureReq,
} = require("../controllers/feature.req.controller");
const { createUser } = require("../controllers/user.controller");

// all route
router.route("/user").post(createUser);
router.route("/feature-request").get(getAllFeatureReq).post(createFeatureReq);
// router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
