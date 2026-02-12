import Billing from "@/components/user/billing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing | Aura",
  description: "Billing page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const BillingPage = () => {   
  return (
   <>
   <Billing/>
   </>
  );
};

export default BillingPage;
