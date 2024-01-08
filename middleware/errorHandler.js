const { APIError } = require("../errors/customError");
const handleErrorMessage = require("../errors/handleErrorMessage");

const errorHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong";

  if (error instanceof Error) {
    if (error.name === "VadidationError") {
      const simplifyError = handleErrorMessage(error);
      statusCode = simplifyError.statusCode;
      message = simplifyError.message;
    } else if (error instanceof APIError) {
      statusCode = error.statusCode;
      message = error.message;
    } else {
      message = error.message;
    }
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: message,
  });
};

module.exports = errorHandler;
