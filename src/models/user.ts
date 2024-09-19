export interface UserBody {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserResponse {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}



export interface LoginUser {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  access_token: string;
  refresh_token: string;
}