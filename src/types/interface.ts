export interface UserTypes {
  id?: string;
  name: string;
  email: string;
  password?: string;
  imageUrl: string;
  position: string;
  roleName: string;
  billable?: boolean;
  allocated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamsTypes {
  id?: string;
  name: string;
  valuePerHour: number;
}

export interface ClientTypes {
  id?: string;
  email: string;
  companyName: string;
  phone: string;
  mainContact: string;
  technicalContact?: string;
  technicalContactPhone?: string;
  technicalContactEmail?: string;
}

export interface ProjectTypes {
  id?: string;
  name: string;
  description: string;
  client:string,
  users: UserTypes[];
  containsManager: boolean;
  summedTimeValueOfAllUsers: number;
}