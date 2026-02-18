import Numbers from "@/components/user/numbers";
import type { Metadata } from "next";

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
