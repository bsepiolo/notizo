export type AuthResponse = {
  error?: { status?: number; message: string };
  success?: {
    message: string;
  };
};
