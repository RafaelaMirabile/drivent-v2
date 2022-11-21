import { getTicketsByUser, getTicketsType, postCreateTicket } from "@/controllers/tickets-controller";
import { authenticateToken, validateBody } from "@/middlewares";
import { createTicketSchema } from "@/schemas/tickets-schemas";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getTicketsType)
  .get("/", getTicketsByUser)
  .post("/", validateBody(createTicketSchema), postCreateTicket);

export { ticketsRouter };
