import axios from 'axios';

/** 
 * TODO
 * Get code(string)
 * Get the github access_token
 * Check if user already exists
 *  - If doesn't exist, create user and generate token
 *  - If exists, generate token
 * Return token with user data
 */

class AuthenticateUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token';

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        accept: 'application/json',
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };