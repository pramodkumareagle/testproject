import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  owner?: User;
  startDate: Date | null;
  TestProject: string;
  updatedAt: Date;
};
