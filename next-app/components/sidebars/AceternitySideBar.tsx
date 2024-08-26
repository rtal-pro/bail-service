"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const AceternitySideBar: React.FC = () => {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Profile",
      href: "#",
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Settings",
      href: "#",
      icon: <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Logout",
      href: "#",
      icon: <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-neutral-800 p-4">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    src="data:image/jpeg;base64,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"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
};

const Logo = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span className="font-medium text-black dark:text-white whitespace-pre">Acet Labs</motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1">
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
