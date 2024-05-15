export interface ILoginResponse {
  model: IUser;
  success: boolean;
  message: string;
  statusCode: number;
  modelList: null;
}

export interface IUser {
  userId: string;
  userName: string;
  email: string;
  authenticationToken: string;
  userRole: string;
  userRoleId: string;
  profilePicture: string;
  tokenExpInMin: number;
  permissions: string[];
  isAbleToManage: boolean;
}
