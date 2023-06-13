import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestBody = await request.json()
  const { search } = requestBody;
  const users = await prisma.user_data.findUnique({where: {id : search}});
  
  return NextResponse.json(users)
}