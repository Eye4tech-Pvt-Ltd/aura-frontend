import RegisterComponent from "@/components/auth/register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Aura",
  description: "Register page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const RegisterPage = () => {
  return (
   <>
   <RegisterComponent/>   
   </>
  );
};

export default RegisterPage;