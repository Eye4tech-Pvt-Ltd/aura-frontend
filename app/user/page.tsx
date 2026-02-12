import Dashboard from "@/components/user/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Aura",
  description: "Dashboard page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const DashboardPage = () => {
  return (
   <>
   <Dashboard/>
   </>
  );
};

export default DashboardPage;
