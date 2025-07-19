import {ApiResponse} from "../utils/apiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  const apiResponse = new ApiResponse(res);
  apiResponse.success({ message: "API is working" });
});

export { healthCheck };
