import Team from "@/components/user/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Aura",
  description: "Team page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const TeamPage = () => {   
  return (
   <>
   <Team/>
   </>
  );
};

export default TeamPage;
