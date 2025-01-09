import { z } from "zod";
import {
  BudgetType,
  NewOrRebuildType,
  ServiceType,
  WebsiteNeedsType,
} from "../types";

const userFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long.")
    .max(100, "Name must not exceed 100 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .max(100, "Company name must not exceed 100 characters.")
    .optional(),
  services: z.array(ServiceType).default([]),
  newOrRebuild: NewOrRebuildType,
  websiteNeeds: WebsiteNeedsType,
  budget: BudgetType, //if array then z.array(BudgetType);
});

type UserFormSchemaType = z.infer<typeof userFormSchema>;

export { userFormSchema, UserFormSchemaType };
