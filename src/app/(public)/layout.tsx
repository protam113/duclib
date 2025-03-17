"use client";

import DefaultLayout from "@/components/layout/DefaultLaout";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
}
