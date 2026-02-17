<<<<<<< HEAD
import Register from '@/components/register'
import React from 'react'

const page = () => {
  return <Register />
}

export default page
=======
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
>>>>>>> 8bcc3f1825b4f72fcfba081828aac4a3295c309b
