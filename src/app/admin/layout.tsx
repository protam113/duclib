"use client";

import { AdminLayout } from "@/components/layout/AdminLayout/AdminLayout";
import React from "react";

export default function AdminLayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
