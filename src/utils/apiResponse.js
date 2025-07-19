class ApiResponse {
  constructor(res) {
    this.res = res;
  }

  success(data, message = "Success") {
    this.res.status(200).json({
      status: "success",
      message,
      data,
    });
  }

  error(message = "Error", statusCode = 400) {
    this.res.status(statusCode).json({
      status: "error",
      message,
    });
  }
}

export  {ApiResponse};
