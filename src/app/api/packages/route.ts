import { prisma } from '@/lib/prisma';

export async function GET() {
  const data = await prisma.package.findMany({ orderBy: { createdAt: 'desc' } });
  return Response.json(data);
}
