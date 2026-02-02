import Flows from "@/components/user/flows";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flows | Aura",
  description: "Flows page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const FlowsPage = () => {
  return (
   <>
   <Flows/>
   </>
  );
};

export default FlowsPage;
