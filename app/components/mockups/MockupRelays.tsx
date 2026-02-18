import { Pause, RefreshCw, Settings } from "lucide-react";

export default function MockupRelays() {
    const relays = [
        { name: "Public Town Square", sub: "www", status: "online", policy: "Open Access", type: "public" },
        { name: "Private Citadel", sub: "private", status: "online", policy: "Whitelisted", type: "private" },
        { name: "Paid Premium", sub: "premium", status: "maintenance", policy: "Paid Account", type: "paid" },
        { name: "Encrypted DMs", sub: "dm", status: "online", policy: "Auth Required", type: "private" },
    ];

    return (
        <div className="h-full p-4 sm:p-6">
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
                <h3 className="font-mono text-sm text-zinc-300">Active Relays</h3>
                <button className="flex items-center gap-2 rounded bg-fuchsia-500 px-3 py-1 text-xs font-bold text-white hover:bg-fuchsia-400">
                    + New Relay
                </button>
            </div>

            {/* Card layout for mobile, table for desktop */}
            <div className="sm:hidden space-y-3">
                {relays.map((relay) => (
                    <div key={relay.sub} className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-3">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full ${relay.type === 'public' ? 'bg-cyan-500' : relay.type === 'private' ? 'bg-purple-500' : 'bg-amber-500'}`} />
                                <span className="text-sm font-medium text-zinc-200">{relay.name}</span>
                            </div>
                            <div className="flex gap-2 text-zinc-500">
                                <button className="hover:text-white"><Pause size={14} /></button>
                                <button className="hover:text-white"><RefreshCw size={14} /></button>
                                <button className="hover:text-white"><Settings size={14} /></button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-zinc-500">{relay.sub}.moar.host</span>
                            <span className="inline-flex items-center rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-400 border border-fuchsia-500/20">
                                {relay.policy.toUpperCase()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden sm:block overflow-hidden rounded border border-zinc-800 bg-zinc-900/30">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-zinc-800 bg-zinc-900/50 text-xs text-zinc-500">
                            <th className="px-4 py-3 font-mono">Name</th>
                            <th className="px-4 py-3 font-mono">Subdomain</th>
                            <th className="px-4 py-3 font-mono">Policies</th>
                            <th className="px-4 py-3 font-mono text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {relays.map((relay) => (
                            <tr key={relay.sub} className="group hover:bg-white/5">
                                <td className="px-4 py-3 font-medium text-zinc-200">
                                    <div className="flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${relay.type === 'public' ? 'bg-cyan-500' : relay.type === 'private' ? 'bg-purple-500' : 'bg-amber-500'}`} />
                                        {relay.name}
                                    </div>
                                </td>
                                <td className="px-4 py-3 font-mono text-xs text-zinc-500">{relay.sub}.moar.host</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-[10px] font-medium text-fuchsia-400 border border-fuchsia-500/20">
                                        {relay.policy.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <div className="flex justify-end gap-2 text-zinc-500">
                                        <button className="hover:text-white"><Pause size={14} /></button>
                                        <button className="hover:text-white"><RefreshCw size={14} /></button>
                                        <button className="hover:text-white"><Settings size={14} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-600 font-mono">
                <span>Total Events: 14.2M</span>
            </div>
        </div>
    );
}
