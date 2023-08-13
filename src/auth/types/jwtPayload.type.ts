export type JwtPayload = {
  email: string;
  exp?: number;
  iat?: number;
  sub: string;
};
