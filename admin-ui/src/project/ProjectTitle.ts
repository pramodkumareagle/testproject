import { Project as TProject } from "../api/project/Project";

export const PROJECT_TITLE_FIELD = "TestProject";

export const ProjectTitle = (record: TProject): string => {
  return record.TestProject || record.id;
};
