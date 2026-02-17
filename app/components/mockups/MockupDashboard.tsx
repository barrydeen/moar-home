export default function MockupDashboard() {
    return (
        <div className="h-full p-6">
            {/* Stats Row */}
            <div className="mb-8 grid grid-cols-3 gap-4">
                {[
                    { label: "Active Connections", val: "1,248", color: "text-cyan-400" },
                    { label: "Events Ingested", val: "84.3k", color: "text-fuchsia-400" },
                    { label: "Storage Usage", val: "4.2 GB", color: "text-emerald-400" }
                ].map(stat => (
                    <div key={stat.label} className="rounded border border-zinc-800 bg-zinc-900/30 p-4">
                        <p className="font-mono text-[10px] text-zinc-500 uppercase">{stat.label}</p>
                        <p className={`mt-1 font-mono text-2xl font-bold ${stat.color}`}>{stat.val}</p>
                    </div>
                ))}
            </div>

            {/* Main Graph Area */}
            <div className="rounded border border-zinc-800 bg-zinc-900/20 p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="font-mono text-sm text-zinc-300">Ingress Traffic (24h)</h3>
                    <div className="flex gap-2">
                        <span className="flex items-center gap-1 text-[10px] text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" /> WebSocket
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-zinc-500">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> HTTP
                        </span>
                    </div>
                </div>
                <div className="flex h-48 items-end justify-between gap-1">
                    {[...Array(40)].map((_, i) => (
                        <div
                            key={i}
                            style={{
                                height: `${Math.random() * 60 + 20}%`,
                                animationDelay: `${i * 0.05}s`
                            }}
                            className="graph-bar w-full rounded-t bg-gradient-to-t from-fuchsia-900/20 to-fuchsia-500/50"
                        />
                    ))}
                </div>
            </div>

            <div className="mt-4 flex justify-between text-[10px] font-mono text-zinc-600">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>23:59</span>
            </div>
        </div>
    );
}
