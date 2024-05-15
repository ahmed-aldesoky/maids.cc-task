export interface IDashboardUser {
  id: string;
  email: string;
  fullName: string;
  groupName: string;
  createdAt: string;
  lastModificationAt: string;
  isActive: boolean;
}
export interface IUserSearch {
  firstName: string;
  secondName: string;
  lastName: string;
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  documentId: null | string;
  dateOfBirth: string;
  groupId: string;
  userId: null | string;
  isActive:boolean;
}
