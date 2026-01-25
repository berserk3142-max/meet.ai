"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut, CreditCard, HelpCircle } from "lucide-react";

interface UserButtonProps {
    user: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
    };
}

export default function UserButton({ user }: UserButtonProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();
        setOpen(false);
        window.location.href = "/login";
    };

    const handleNavigation = (href: string) => {
        setOpen(false);
        router.push(href);
    };

    const getInitials = (name?: string | null) => {
        if (!name) return "U";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    const menuItems = [
        { label: "Profile", href: "/profile", icon: User },
        { label: "Settings", href: "/settings", icon: Settings },
        { label: "Billing", href: "/billing", icon: CreditCard },
        { label: "Help", href: "/help", icon: HelpCircle },
    ];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="relative group">
                    <Avatar className="h-9 w-9 ring-2 ring-zinc-700 group-hover:ring-emerald-500/50 transition-all duration-200">
                        <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                        <AvatarFallback className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-sm font-medium">
                            {getInitials(user.name)}
                        </AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-zinc-950" />
                </button>
            </SheetTrigger>
            <SheetContent className="w-80 bg-zinc-900 border-zinc-800 p-0">
                <SheetHeader className="p-6 border-b border-zinc-800">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-14 w-14 ring-2 ring-emerald-500/30">
                            <AvatarImage src={user.image || undefined} alt={user.name || "User"} />
                            <AvatarFallback className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-lg font-medium">
                                {getInitials(user.name)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <SheetTitle className="text-white text-left truncate">
                                {user.name || "User"}
                            </SheetTitle>
                            <p className="text-sm text-zinc-400 truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </SheetHeader>

                {/* Menu Items */}
                <nav className="p-3">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.href}>
                                    <button
                                        onClick={() => handleNavigation(item.href)}
                                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/70 transition-all duration-200 group"
                                    >
                                        <Icon className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Divider */}
                <div className="mx-3 border-t border-zinc-800" />

                {/* Logout */}
                <div className="p-3">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
                    >
                        <LogOut className="w-5 h-5 text-zinc-500 group-hover:text-red-400 transition-colors" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                        <span>Meet.AI v1.0</span>
                        <span>Free Plan</span>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
