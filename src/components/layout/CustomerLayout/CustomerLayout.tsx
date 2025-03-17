"use client";

import {
  FileText,
  HomeIcon,
  Package2,
  ShoppingCart,
  Ticket,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Footer from "./CusFooter";

const navigation = [
  {
    title: "Home",
    href: "/customer",
    icon: HomeIcon,
  },
  {
    title: "Orders",
    href: "/customer/orders",
    icon: ShoppingCart,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Products",
    href: "/products",
    icon: Package2,
  },
];

export function CustomerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 lg:block">
          <Sidebar>
            <SidebarHeader className="border-b p-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Customer Dashboard</span>
              </Link>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navigation.map((item, index) => (
                  <div key={item.href}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href}
                        tooltip={item.title}
                      >
                        <Link href={item.href}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>

                    {/* Thêm đường gạch ngang sau mục "Home" */}
                    {index === 0 && <div className="border-t my-2"></div>}
                  </div>
                ))}
                {/* Khu vực SUPPORT */}
                <div className="border-t my-4 pt-2">
                  <h3 className="px-3 text-sm font-semibold text-muted-foreground">
                    Profile
                  </h3>

                  {/* Tickets */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/customer/profile"}
                      tooltip="Profile"
                    >
                      <Link href="/customer/profile">
                        <Ticket className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Nút liên hệ */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/customer/orders"}
                      tooltip="Orders"
                    >
                      <Link href="/customer/orders">
                        <Ticket className="h-4 w-4" />
                        <span>Orders</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
                {/* Khu vực SUPPORT */}
                <div className="border-t my-4 pt-2">
                  <h3 className="px-3 text-sm font-semibold text-muted-foreground">
                    Support
                  </h3>

                  {/* Tickets */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === "/tickets"}
                      tooltip="Tickets"
                    >
                      <Link href="/customer/tickets">
                        <Ticket className="h-4 w-4" />
                        <span>Tickets</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Nút liên hệ */}
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Contact Support">
                      <a
                        href="tel:+1234567890"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-blue-500"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Contact Support</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
        <div className="flex flex-col">
          <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-lg font-semibold">
                {navigation.find((item) => item.href === pathname)?.title ||
                  "Dashboard"}
              </h1>
            </div>
          </header>
          <main className="flex-1 p-6 mt-4">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
