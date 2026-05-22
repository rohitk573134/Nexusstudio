import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const inquirySchema = z.object({ name: z.string().min(2), phone: z.string().min(8), message: z.string().min(5) });

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) return Response.json({ error: 'Invalid payload' }, { status: 400 });
  const inquiry = await prisma.inquiry.create({ data: parsed.data });
  return Response.json(inquiry, { status: 201 });
}
