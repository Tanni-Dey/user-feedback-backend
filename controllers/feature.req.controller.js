const FeatureReq = require("../models/feature.req.model");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/customError");

// get all feature request
const getAllFeatureReq = asyncWrapper(async (req, res, next) => {
  const allFeatureRequest = await FeatureReq.find({});
  res.status(200).json({ allFeatureRequest });
});

// create single feature request
const createFeatureReq = asyncWrapper(async (req, res, next) => {
  const featureReqData = {
    title: req.body.title,
    description: req.body.description,
    logo: req.body.logo,
  };

  // single feature request checking
  const checkFeatureReq = await FeatureReq.findOne({
    title: featureReqData.title,
  });
  if (checkFeatureReq) {
    return next(createCustomError("Already have this Feature Request", 404));
  }

  // feature request create
  const featureReq = await FeatureReq.create(featureReqData);
  if (!featureReq) {
    return next(createCustomError("Feature Request not created", 404));
  }

  res.status(200).json({ featureReq });
});

module.exports = {
  getAllFeatureReq,
  createFeatureReq,
};
