import type { Metadata } from "next";
import Numbers from "@/components/numbers";

export const metadata: Metadata = {
  title: "Numbers | Aura",
  description: "Numbers page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const NumbersPage = () => {   
  return (
   <>
   <Numbers/>
   </>
  );
};

export default NumbersPage;
