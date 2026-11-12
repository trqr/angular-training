export type LoginResponse = {
  id: number;
  username: string;
  firstName: string;
  accessToken: string;
  refreshToken: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};
