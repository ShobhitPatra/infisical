import z from "zod";

import { DiscriminativePick } from "@app/lib/types";

import { AppConnection } from "../app-connection-enums";
import {
  CreateTerraformCloudConnectionSchema,
  TerraformCloudConnectionSchema,
  ValidateTerraformCloudConnectionCredentialsSchema
} from "./terraform-cloud-connection-schemas";

export type TTerraformCloudConnection = z.infer<typeof TerraformCloudConnectionSchema>;

export type TTerraformCloudConnectionInput = z.infer<typeof CreateTerraformCloudConnectionSchema> & {
  app: AppConnection.TerraformCloud;
};

export type TValidateTerraformCloudConnectionCredentials = typeof ValidateTerraformCloudConnectionCredentialsSchema;

export type TTerraformCloudConnectionConfig = DiscriminativePick<
  TTerraformCloudConnectionInput,
  "method" | "app" | "credentials"
> & {
  orgId: string;
};

export type TerraformCloudOrg = {
  id: string;
  name: string;
};

export type TerraformCloudApp = {
  name: string;
  id: string;
  envs: { name: string; id: string }[];
};

export type TerraformCloudOrgWithApps = TerraformCloudOrg & {
  apps: TerraformCloudApp[];
};

export type TTerraformCloudVariableSet = {
  id: string;
  name: string;
  description?: string;
  global?: boolean;
};

export type TTerraformCloudWorkspace = {
  id: string;
  name: string;
};

export type TTerraformCloudOrganization = {
  id: string;
  name: string;
  variableSets: TTerraformCloudVariableSet[];
  workspaces: TTerraformCloudWorkspace[];
};

export type TTerraformCloudConnectionOrganization = TTerraformCloudOrganization;
export type TTerraformCloudConnectionVariableSet = TTerraformCloudVariableSet;
export type TTerraformCloudConnectionWorkspace = TTerraformCloudWorkspace;

export enum TerraformCloudSyncScope {
  VariableSet = "variableSet",
  Workspace = "workspace"
}
