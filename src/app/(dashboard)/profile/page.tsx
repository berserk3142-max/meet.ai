import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="p-8">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-2">Profile</h1>
                <p className="text-zinc-400 mb-8">Manage your personal information.</p>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-3xl font-bold">
                                {session?.user?.name?.charAt(0).toUpperCase() || "U"}
                            </span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-white">{session?.user?.name}</h2>
                            <p className="text-zinc-400">{session?.user?.email}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Display Name</label>
                            <input
                                type="text"
                                defaultValue={session?.user?.name || ""}
                                className="w-full px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                            <input
                                type="email"
                                defaultValue={session?.user?.email || ""}
                                disabled
                                className="w-full px-4 py-2.5 bg-zinc-800/50 border border-zinc-700 rounded-lg text-zinc-500 cursor-not-allowed"
                            />
                        </div>
                        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
