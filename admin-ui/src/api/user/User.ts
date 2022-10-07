import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  initial: Date;
  Kumar: string | null;
  modepu: string | null;
  projects?: Array<Project>;
  roles: JsonValue;
  username: string;
};
