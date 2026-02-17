"use client";

import { useState } from "react";
import { LayoutDashboard, Server, Image, ShieldCheck } from "lucide-react";
import MockupDashboard from "./mockups/MockupDashboard";
import MockupRelays from "./mockups/MockupRelays";
import MockupBlossom from "./mockups/MockupBlossom";
import MockupWoT from "./mockups/MockupWoT";

const tabs = [
    { id: "dashboard", label: "Dashboard", desc: "Real-time traffic analytics & system health", icon: LayoutDashboard },
    { id: "relays", label: "Relay Manager", desc: "Manage multi-tenant relay instances & policies", icon: Server },
    { id: "blossom", label: "Blossom Server", desc: "Host & serve media blobs with BUD-01", icon: Image },
    { id: "wot", label: "Web of Trust", desc: "Configure visual spam filters & white-lists", icon: ShieldCheck },
];

export default function AdminShowcase() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-12">

                {/* Controls (Left Side) */}
                <div className="space-y-4 lg:col-span-4">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${isActive
                                    ? "border-fuchsia-500/50 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.1)]"
                                    : "border-transparent bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-800"
                                    }`}
                            >
                                <div className={`mt-0.5 rounded-lg p-2 transition-colors ${isActive ? "bg-fuchsia-500 text-white" : "bg-zinc-800 text-zinc-400 group-hover:text-zinc-200"
                                    }`}>
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <h3 className={`font-bold transition-colors ${isActive ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                                        {tab.label}
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        {tab.desc}
                                    </p>
                                </div>

                                {/* Active Indicator */}
                                {isActive && (
                                    <div className="absolute -left-px top-4 h-8 w-1 rounded-r bg-fuchsia-500" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mockup Window (Right Side) */}
                <div className="lg:col-span-8">
                    <div className="relative z-10 mx-auto transform-gpu overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0c] shadow-2xl transition-all duration-500">
                        {/* Browser Chrome */}
                        <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/50 px-4 py-3">
                            <div className="flex gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-rose-500/20" />
                                <div className="h-3 w-3 rounded-full bg-amber-500/20" />
                                <div className="h-3 w-3 rounded-full bg-emerald-500/20" />
                            </div>

                            {/* URL Bar */}
                            <div className="ml-4 flex flex-1 items-center rounded bg-black/40 px-3 py-1 text-xs text-zinc-500 font-mono">
                                <span className="text-emerald-500 mr-2">🔒</span>
                                <span>localhost:3000/admin/{tabs.find(t => t.id === activeTab)?.label.toLowerCase().replace(" ", "-")}</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="min-h-[500px] bg-[#0c0c0e]">
                            {activeTab === 'dashboard' && <MockupDashboard />}
                            {activeTab === 'relays' && <MockupRelays />}
                            {activeTab === 'blossom' && <MockupBlossom />}
                            {activeTab === 'wot' && <MockupWoT />}
                        </div>
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-2/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
                </div>

            </div>
        </div>
    );
}
