import { z } from 'zod';

export interface ImageListResponse {
  page: number;
  results: ImageType;
}

const ImageSchema = z.object({
  id: z.string(),
  title: z.string(),
  date: z.string(),
  media_type: z.string(),
  explanation: z.string(),
  url: z.string(),
  hdurl: z.string(),
});

export type ImageType = z.infer<typeof ImageSchema>;
