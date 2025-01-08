import { Router } from "express";
import { userSubmitForm } from "../routes/user.route";

const router = Router();

router.route("/form").post(userSubmitForm);

export { router as UserControllerRouter };
