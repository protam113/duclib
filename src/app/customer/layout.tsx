"use client";

import { CustomerLayout } from "@/components/layout/CustomerLayout/CustomerLayout";
import React from "react";

export default function CustomerLayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CustomerLayout>
        <div className="max-w-6xl mx-auto">{children}</div>
      </CustomerLayout>
    </div>
  );
}
