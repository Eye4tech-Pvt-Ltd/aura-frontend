import type { Metadata } from "next";
import Integrations from "@/components/integrations";

export const metadata: Metadata = {
  title: "Integrations | Aura",
  description: "Integrations page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const IntegrationsPage = () => {   
  return (
   <>
   <Integrations/>
   </>
  );
};

export default IntegrationsPage;
