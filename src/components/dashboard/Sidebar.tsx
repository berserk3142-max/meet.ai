"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { sidebarItems, bottomItems } from "@/modules/dashboard/sidebar-items";
import { LogOut } from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();

    const handleLogout = async () => {
        await signOut();
        window.location.href = "/login";
    };

    return (
        <aside className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-zinc-800">
                <Link href="/" className="flex items-center gap-3">
                    <img src="/logo.svg" alt="Meet.ai" className="w-10 h-6" />
                    <span className="text-xl font-bold text-white">Meet.ai</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href ||
                            (item.href !== "/" && pathname.startsWith(item.href));
                        const Icon = item.icon;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-zinc-800">
                <ul className="space-y-2">
                    {bottomItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        const Icon = item.icon;

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}

                    {/* Logout Button */}
                    <li>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
