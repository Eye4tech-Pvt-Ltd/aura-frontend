import AIAgent from "@/components/user/agent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent | Aura",
  description: "Agent page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const AgentPage = () => {
  return (
   <>
   <AIAgent/>   
   </>
  );
};

export default AgentPage;