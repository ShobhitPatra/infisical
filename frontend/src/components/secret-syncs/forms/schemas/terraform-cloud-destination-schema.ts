import { z } from "zod";

import { BaseSecretSyncSchema } from "@app/components/secret-syncs/forms/schemas/base-secret-sync-schema";
import {
  TerraformCloudSyncCategory,
  TerraformCloudSyncScope
} from "@app/hooks/api/appConnections/terraform-cloud";
import { SecretSync } from "@app/hooks/api/secretSyncs";

export const TerraformCloudSyncDestinationSchema = BaseSecretSyncSchema().merge(
  z.object({
    destination: z.literal(SecretSync.TerraformCloud),
    destinationConfig: z.discriminatedUnion("scope", [
      z.object({
        scope: z.literal(TerraformCloudSyncScope.VariableSet),
        org: z.string().trim().min(1, "Organization required"),
        destinationId: z.string().trim().min(1, "Variable set id required"),
        destinationName: z.string().trim().min(1, "Variable set name required"),
        category: z.nativeEnum(TerraformCloudSyncCategory)
      }),
      z.object({
        scope: z.literal(TerraformCloudSyncScope.Workspace),
        org: z.string().trim().min(1, "Organization required"),
        destinationId: z.string().trim().min(1, "Workspace id required"),
        destinationName: z.string().trim().min(1, "Workspace name required"),
        category: z.nativeEnum(TerraformCloudSyncCategory)
      })
    ])
  })
);
