import type { Metadata } from "next";
import Calls from "@/components/calls";

export const metadata: Metadata = {
  title: "Calls | Aura",
  description: "Calls page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const CallsPage = () => {
  return (
   <>
   <Calls/>
   </>
  );
};

export default CallsPage;
