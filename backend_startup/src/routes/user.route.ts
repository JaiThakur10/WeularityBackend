import { Request, Response } from "express";
import { asyncHandler, email, sendResponse, StatusEnum } from "../utilis";
import { userFormSchema } from "../zod";

const userSubmitForm = asyncHandler(async (req: Request, res: Response) => {
  const payload: any = userFormSchema.safeParse(req.body);

  if (!payload.success) {
    return sendResponse(res, 403, StatusEnum.error, "Enter Valid Data");
  }

  const { data: formData } = payload;

  const sendEmail = await email(formData);

  if (!sendEmail) {
    return sendResponse(
      res,
      500,
      StatusEnum.error,
      "Can't Submit Your Request at this time",
    );
  }

  return sendResponse(res, 200, StatusEnum.success, "Form Submit Successfully");
});

export { userSubmitForm };
