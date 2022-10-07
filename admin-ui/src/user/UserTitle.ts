import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "Kumar";

export const UserTitle = (record: TUser): string => {
  return record.Kumar || record.id;
};
