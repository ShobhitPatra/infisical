import { OrganizationsSchema } from "@app/db/schemas";

export const sanitizedOrganizationSchema = OrganizationsSchema.pick({
  id: true,
  name: true,
  customerId: true,
  slug: true,
  createdAt: true,
  updatedAt: true,
  authEnforced: true,
  scimEnabled: true,
  kmsDefaultKeyId: true,
  defaultMembershipRole: true,
  enforceMfa: true,
  selectedMfaMethod: true,
  allowSecretSharingOutsideOrganization: true,
  shouldUseNewPrivilegeSystem: true,
  privilegeUpgradeInitiatedByUsername: true,
  privilegeUpgradeInitiatedAt: true,
  bypassOrgAuthEnabled: true
});
