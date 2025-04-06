// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SshHostLoginMappingsSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sshHostId: z.string().uuid(),
  loginUser: z.string(),
  allowedPrincipals: z.string().array()
});

export type TSshHostLoginMappings = z.infer<typeof SshHostLoginMappingsSchema>;
export type TSshHostLoginMappingsInsert = Omit<z.input<typeof SshHostLoginMappingsSchema>, TImmutableDBKeys>;
export type TSshHostLoginMappingsUpdate = Partial<Omit<z.input<typeof SshHostLoginMappingsSchema>, TImmutableDBKeys>>;
