const notFound = (req, res) =>
  res.status(404).json({ success: false, message: "Route does not exist" });

module.exports = notFound;
