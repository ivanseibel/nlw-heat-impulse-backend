import { Request, Response } from 'express';
import { GetUserProfileService } from "../services/GetUserProfileService";

class GetUserProfileController {
  async handle(request: Request, response: Response) {
    const getUserProfileService = new GetUserProfileService();

    const user = await getUserProfileService.execute(request.user_id);

    return response.json(user);
  }
}

export { GetUserProfileController }