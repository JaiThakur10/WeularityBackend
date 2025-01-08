import { Response } from "express";

enum StatusEnum {
  success = "success",
  error = "error",
}

const sendResponse = (
  res: Response,
  statusCode: number,
  status: StatusEnum,
  message: string,
) => {
  res.status(statusCode).json({
    status,
    message,
  });
};
export { sendResponse, StatusEnum };
