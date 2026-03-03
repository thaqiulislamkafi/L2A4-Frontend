export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null | undefined;
  createdAt: string;   
  updatedAt: string;   
  role: string;
  status: string;
}

