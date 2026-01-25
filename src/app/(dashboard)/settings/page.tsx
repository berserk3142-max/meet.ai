import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function SettingsPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <div className="p-8">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
                <p className="text-zinc-400 mb-8">Manage your account and preferences.</p>

                {/* Account Settings */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Account</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                            <div>
                                <p className="text-white font-medium">Email</p>
                                <p className="text-zinc-400 text-sm">{session?.user?.email}</p>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Change</button>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-zinc-800">
                            <div>
                                <p className="text-white font-medium">Password</p>
                                <p className="text-zinc-400 text-sm">••••••••</p>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Update</button>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Preferences</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center py-3">
                            <div>
                                <p className="text-white font-medium">Email Notifications</p>
                                <p className="text-zinc-400 text-sm">Receive email updates about meetings</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="bg-zinc-900 border border-red-900/50 rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-red-400 mb-4">Danger Zone</h2>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-white font-medium">Delete Account</p>
                            <p className="text-zinc-400 text-sm">Permanently delete your account and all data</p>
                        </div>
                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-all">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
