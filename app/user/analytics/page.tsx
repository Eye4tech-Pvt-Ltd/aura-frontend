import Analytics from "@/components/user/analytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics | Aura",
  description: "Analytics page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const AnalyticsPage = () => {   
  return (
   <>
   <Analytics/>
   </>
  );
};

export default AnalyticsPage;
