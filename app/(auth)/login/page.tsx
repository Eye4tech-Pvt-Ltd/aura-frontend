import LoginComponent from "@/components/auth/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Aura",
  description: "Login page for Aura",
  icons: {
    icon: {
      url: "/logos/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/logos/favicon.png", type: "image/png" },
  },
};

const LoginPage = () => {
  return (
   <>
   <LoginComponent/>   
   </>
  );
};

export default LoginPage;