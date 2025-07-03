import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initiaProfile } from "@/lib/initial-profile";

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

  return <div>Create a Server</div>;
};

export default SetupPage;
