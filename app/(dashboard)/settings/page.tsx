import Settings from "@/components/user/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings | Aura",
  description: "Settings page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const SettingsPage = () => {   
  return (
   <>
   <Settings/>
   </>
  );
};

export default SettingsPage;
