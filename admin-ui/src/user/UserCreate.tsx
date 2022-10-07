import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Updated At" source="initial" disabled />
        <TextInput label="Last Name" source="Kumar" />
        <TextInput label="Name" source="modepu" />
        <PasswordInput label="Password" source="password" />
        <ReferenceArrayInput
          source="projects"
          reference="Project"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
