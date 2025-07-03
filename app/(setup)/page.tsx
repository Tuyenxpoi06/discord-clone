import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initiaProfile } from "@/lib/initial-profile";

import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initiaProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
