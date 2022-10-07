import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  Kumar?: StringNullableFilter;
  modepu?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
  username?: StringFilter;
};
