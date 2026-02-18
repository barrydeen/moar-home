import { Activity, Database, HardDrive, Cpu, Layers } from "lucide-react";

export default function MockupDashboard() {
    return (
        <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* System Health Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                    { label: "CPU Usage", val: "12%", icon: <Cpu size={14} />, color: "bg-cyan-500" },
                    { label: "RAM Usage", val: "1.2GB/4GB", icon: <Layers size={14} />, color: "bg-fuchsia-500" },
                    { label: "Disk Space", val: "42GB/100GB", icon: <HardDrive size={14} />, color: "bg-emerald-500" },
                ].map((stat) => (
                    <div key={stat.label} className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                        <div className="mb-2 flex items-center justify-between text-zinc-500">
                            <span className="flex items-center gap-2 font-mono text-[10px] uppercase">
                                {stat.icon} {stat.label}
                            </span>
                            <span className="font-mono text-[10px]">{stat.val}</span>
                        </div>
                        <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
                            <div
                                className={`h-full ${stat.color} transition-all duration-1000`}
                                style={{ width: stat.val.includes('%') ? stat.val : '30%' }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Aggregate Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                    { label: "Total Connections", shortLabel: "Connections", val: "1,429", desc: "Across all instances", icon: <Activity className="text-cyan-400" size={18} /> },
                    { label: "Total Notes Saved", shortLabel: "Notes", val: "84.2M", desc: "Verified events", icon: <Database className="text-fuchsia-400" size={18} /> },
                    { label: "Total Storage", shortLabel: "Storage", val: "12.4 GB", desc: "LMDB footprint", icon: <HardDrive className="text-emerald-400" size={18} /> }
                ].map(stat => (
                    <div key={stat.label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-3 sm:p-4 transition-hover hover:border-zinc-700">
                        <div className="mb-1 sm:mb-2 text-zinc-400">{stat.icon}</div>
                        <p className="font-mono text-[8px] sm:text-[10px] text-zinc-500 uppercase hidden sm:block">{stat.label}</p>
                        <p className="font-mono text-[8px] sm:text-[10px] text-zinc-500 uppercase sm:hidden">{stat.shortLabel}</p>
                        <p className="mt-1 font-mono text-lg sm:text-2xl font-bold text-white">{stat.val}</p>
                        <p className="mt-1 text-[8px] sm:text-[10px] text-zinc-600 italic hidden sm:block">{stat.desc}</p>
                    </div>
                ))}
            </div>

            {/* Per Relay Stats */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/20 overflow-hidden">
                <div className="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
                    <h3 className="font-mono text-xs font-bold text-zinc-300">Live Relay Breakdown</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px]">
                        <thead>
                            <tr className="border-b border-zinc-800 text-zinc-500 font-mono uppercase">
                                <th className="px-3 sm:px-4 py-2 font-medium">Relay</th>
                                <th className="px-3 sm:px-4 py-2 font-medium">Conns</th>
                                <th className="px-3 sm:px-4 py-2 font-medium">Notes</th>
                                <th className="px-3 sm:px-4 py-2 font-medium">Storage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/50 text-zinc-400 font-mono">
                            {[
                                { name: "www", conns: "842", notes: "42.1M", storage: "6.2GB" },
                                { name: "private", conns: "12", notes: "1.2M", storage: "0.4GB" },
                                { name: "premium", conns: "562", notes: "38.5M", storage: "5.5GB" },
                                { name: "media", conns: "13", notes: "2.4M", storage: "0.3GB" },
                            ].map((relay) => (
                                <tr key={relay.name} className="hover:bg-white/5 transition-colors">
                                    <td className="px-3 sm:px-4 py-2 text-zinc-300 whitespace-nowrap">
                                        <span className="sm:hidden">{relay.name}</span>
                                        <span className="hidden sm:inline">{relay.name}.moar.host</span>
                                    </td>
                                    <td className="px-3 sm:px-4 py-2 text-cyan-500/80">{relay.conns}</td>
                                    <td className="px-3 sm:px-4 py-2 text-fuchsia-500/80">{relay.notes}</td>
                                    <td className="px-3 sm:px-4 py-2 text-emerald-500/80">{relay.storage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
