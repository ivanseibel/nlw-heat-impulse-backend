import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const createMessageService = new CreateMessageService();

    const { text } = request.body;

    const message = await createMessageService.execute(text, request.user_id);

    return response.json(message);
  }
}

export { CreateMessageController }