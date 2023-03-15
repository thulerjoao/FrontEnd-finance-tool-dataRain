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
  primaryContactName: string;
  technicalContact:{
    name: string,
    email: string,
    phone: string
  }
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

export type NotificationTypes = 'request_send_overtime' | 'budget_request';
export interface NewNotificationPayload {
  id: string;
  receiverId: string;
  route: string;
  title: string;
  message: string;
  visualized: boolean;
  imageUrl: string;
  type: NotificationTypes;
  sent: boolean;
  createdAt: Date;
}

export interface ExtraHour{
  id: string;
  dateToSendTime: string;
  status: string;
  requestDescription: string;
}