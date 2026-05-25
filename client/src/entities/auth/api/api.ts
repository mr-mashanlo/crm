import { type KyResponse } from 'ky';

import { kyInstance } from '@/shared/libs';

import { type Auth, type AuthDTO } from '../model/schema';

class AuthService {

  signin = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance.post( 'api/auth/signin', { json: data } );
  };

  signup = ( data: AuthDTO ): Promise<KyResponse<Auth>> => {
    return kyInstance.post( 'api/auth/signup', { json: data } );
  };

}

export const authService = new AuthService();