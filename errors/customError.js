class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new APIError(msg, statusCode);
};

module.exports = { createCustomError, APIError };
