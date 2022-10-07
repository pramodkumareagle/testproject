import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  startDate?: SortOrder;
  TestProject?: SortOrder;
  updatedAt?: SortOrder;
};
