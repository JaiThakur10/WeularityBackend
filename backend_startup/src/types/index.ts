import { z } from "zod";

// Define reusable types
const ServiceType = z.enum([
  "Web Design / UI/UX Design",
  "Webflow Development",
  "Brand/website strategy",
  "Marketing Services",
  "Bit of everything",
]);

const NewOrRebuildType = z.enum([
  "Brand new website",
  "Rebuild of existing website",
  "Updates to existing website",
]);

const WebsiteNeedsType = z.enum([
  "Blog",
  "Ecommerce",
  "Memberships",
  "Portfolio",
  "Not sure yet",
]);

const BudgetType = z.enum([
  "Less than 20,000 (small project)",
  "Upto 50,000 (medium project)",
  "Over 50,000 (large project)",
]);

export { ServiceType, NewOrRebuildType, WebsiteNeedsType, BudgetType };
