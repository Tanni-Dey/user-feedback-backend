const express = require("express");
const router = express.Router();
const {
  getAllFeatureReq,
  createFeatureReq,
  getSingleFeatureReq,
  addComments,
} = require("../controllers/feature.req.controller");
const { createUser } = require("../controllers/user.controller");

// all route
router.route("/user").post(createUser);
router.route("/feature-request").get(getAllFeatureReq).post(createFeatureReq);
router.route("/feature-request/:id").get(getSingleFeatureReq).put(addComments);
// .put(updateTask).delete(deleteTask);

module.exports = router;
