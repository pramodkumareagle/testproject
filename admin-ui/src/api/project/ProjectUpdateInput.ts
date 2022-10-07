import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
  TestProject?: string;
};
