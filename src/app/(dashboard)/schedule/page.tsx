export default function SchedulePage() {
    return (
        <div className="p-8">
            <div className="max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-2">Schedule</h1>
                <p className="text-zinc-400 mb-8">View and manage your upcoming meetings.</p>

                {/* Calendar Placeholder */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-white">January 2026</h2>
                        <div className="flex gap-2">
                            <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all text-white">
                                ←
                            </button>
                            <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all text-white">
                                →
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2 text-center">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="text-zinc-500 text-sm py-2">{day}</div>
                        ))}
                        {Array.from({ length: 31 }, (_, i) => (
                            <div
                                key={i}
                                className={`p-3 rounded-lg text-sm ${i + 1 === 25
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                        : "text-zinc-400 hover:bg-zinc-800 cursor-pointer"
                                    }`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
