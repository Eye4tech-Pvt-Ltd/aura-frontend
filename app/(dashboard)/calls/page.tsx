import Calls from "@/components/user/calls";
import type { Metadata } from "next";

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
