import { z } from 'zod';

export const CATEGORIES = [
  'first-revenue',
  'offer-building',
  'acquisition',
  'outreach',
  'sales-follow-up',
  'revenue-recovery',
  'payments',
  'upsell',
  'founder-briefs',
  'weekly-review'
] as const;

export const manifestSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, {
    message: 'id must be lowercase alphanumeric and hyphenated (kebab-case).'
  }),
  name: z.string().min(1, 'name is required.'),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({
      message: `category must be one of: ${CATEGORIES.join(', ')}`
    })
  }),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, {
    message: 'version must follow semantic versioning (x.y.z).'
  }),
  status: z.enum(['stable', 'beta', 'experimental']),
  platforms: z.array(z.string()).min(1, 'platforms list must have at least one entry.'),
  required_integrations: z.array(z.string()),
  inputs: z.array(z.string()),
  outputs: z.array(z.string()),
  risk_level: z.enum(['low', 'medium', 'high']),
  human_approval_required: z.boolean(),
  description: z.string().min(5, 'description must be at least 5 characters long.')
});

export type Manifest = z.infer<typeof manifestSchema>;
