class CustomAPIError extends Error {
  constructor(message) {
    super(message);
  }
}
// const createCustomError = (msg, statusCode) => {
//   return new customAPIError(msg, statusCode);
// };

module.exports=CustomAPIError