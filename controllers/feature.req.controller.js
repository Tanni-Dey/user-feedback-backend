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
  const { title, description, logo } = req.body;
  const featureReqData = {
    title: title,
    description: description,
    logo: logo,
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

// get single feature reqest
const getSingleFeatureReq = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const featureReq = await FeatureReq.findOne({ _id: id });
  res.status(200).json({ featureReq });
});

//post comment
const addComments = asyncWrapper(async (req, res, next) => {
  const id = req.params.id;
  const { user, comment } = req.body;

  const commentData = {
    user: user,
    comment: comment,
  };
  const featureReq = await FeatureReq.findOneAndUpdate(
    { _id: id },
    { $push: { comments: commentData } }
  );

  // single feature request checking
  //   const checkFeatureReq = await FeatureReq.findOne({
  //     title: featureReqData.title,
  //   });
  //   if (checkFeatureReq) {
  //     return next(createCustomError("Already have this Feature Request", 404));
  //   }

  // feature request create
  //   const featureReq = await FeatureReq.create(featureReqData);
  //   if (!featureReq) {
  //     return next(createCustomError("Feature Request not created", 404));
  //   }

  res.status(200).json({ featureReq });
});

module.exports = {
  getAllFeatureReq,
  createFeatureReq,
  getSingleFeatureReq,
  addComments,
};
