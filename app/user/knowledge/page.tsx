import Knowledge from "@/components/user/knowledge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge | Aura",
  description: "Knowledge page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const KnowledgePage = () => {   
  return (
   <>
   <Knowledge/>
   </>
  );
};

export default KnowledgePage;
