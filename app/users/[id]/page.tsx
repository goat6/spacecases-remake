/* eslint-disable react/no-unescaped-entities */
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user_data.findUnique({ where: { id: params.id } });

  return (
    <div>
      <h1>This is {user?.id}'s profile</h1>
    </div>
  );
}
