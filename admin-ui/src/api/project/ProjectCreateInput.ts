import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
  TestProject: string;
};
