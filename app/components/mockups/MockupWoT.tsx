import { Shield, UserCheck, Search } from "lucide-react";

export default function MockupWoT() {
    return (
        <div className="h-full p-4 sm:p-6">
            {/* Trust Score Header */}
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/5 p-4">
                <div className="flex items-center gap-3">
                    <div className="rounded-full bg-fuchsia-500/10 p-2 text-fuchsia-400">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">Trust Network Active</h3>
                        <p className="text-xs text-zinc-400">Blocking 94% of spam events via social graph.</p>
                    </div>
                </div>
                <div className="sm:ml-auto text-left sm:text-center">
                    <span className="font-mono text-2xl font-bold text-fuchsia-400">Level 3</span>
                    <span className="ml-2 sm:ml-0 sm:block text-[10px] text-zinc-500 uppercase">Depth</span>
                </div>
            </div>

            {/* Depth Control */}
            <div className="mb-8">
                <div className="mb-2 flex justify-between text-[9px] sm:text-xs text-zinc-400 font-mono">
                    <span>Strict</span>
                    <span>Extended</span>
                    <span>Open</span>
                </div>

                <div className="relative h-2 w-full rounded-full bg-zinc-800">
                    <div className="absolute h-full w-2/3 rounded-full bg-gradient-to-r from-fuchsia-600 to-fuchsia-400" />
                    <div className="absolute flex w-full items-center justify-between" style={{ top: '-3px' }}>
                        <div className="h-4 w-4 rounded-full border-2 border-zinc-900 bg-fuchsia-600" />
                        <div className="h-4 w-4 rounded-full border-2 border-zinc-900 bg-fuchsia-600" />
                        <div className="h-4 w-4 rounded-full border-2 border-zinc-900 bg-fuchsia-400 shadow-[0_0_10px_rgba(232,121,249,0.5)]" />
                        <div className="h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-700" />
                    </div>
                </div>

                <p className="mt-2 text-center text-xs text-zinc-500">
                    Allowing events from approx. <strong className="text-white">15,420</strong> pubkeys
                </p>
            </div>

            {/* Trusted Roots */}
            <div>
                <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-wider">Trusted Roots</h4>
                    <Search size={14} className="text-zinc-600" />
                </div>

                <div className="space-y-2">
                    {[
                        { name: "Jack", key: "npub1sg6...", trust: 100 },
                        { name: "Odv", key: "npub15d2...", trust: 100 },
                        { name: "Fiatjaf", key: "npub180c...", trust: 95 },
                    ].map((user) => (
                        <div key={user.name} className="flex items-center justify-between rounded border border-zinc-800 bg-zinc-900/30 p-2">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                                    <UserCheck size={14} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white max-w-[100px] truncate">{user.name}</p>
                                    <p className="text-[10px] text-zinc-500 font-mono">{user.key}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-bold text-emerald-400">{user.trust}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
