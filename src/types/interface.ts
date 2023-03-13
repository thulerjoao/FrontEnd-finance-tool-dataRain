export interface UserTypes {
  id: string;
  name: string;
  email: string;
  password?: string;
  imageUrl: string;
  position: string;
  role: {name:string};
  billable?: boolean;
  allocated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamsTypes {
  id: string;
  name: string;
  valuePerHour: number;
}

export interface ClientTypes {
  id: string;
  email: string;
  companyName: string;
  phone: string;
  mainContact: string;
  technicalContact?: string;
  technicalContactPhone?: string;
  technicalContactEmail?: string;
}

export interface ProjectTypes {
  id: string;
  name: string;
  description: string;
  client:string,
  users: UserTypes[];
  containsManager: boolean;
  summedTimeValueOfAllUsers: number;
}

export interface NewNotificationPayload {
  id: string;
  receiverId: string;
  route: string;
  title: string;
  message: string;
  imageUrl: string;
  visualized: boolean;
}

export interface ExtraHour{
  id: string;
  dateToSendTime: string;
  status: string;
}