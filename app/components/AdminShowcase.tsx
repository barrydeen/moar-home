"use client";

import { useState } from "react";
import { LayoutDashboard, Server, Image, ShieldCheck } from "lucide-react";
import MockupDashboard from "./mockups/MockupDashboard";
import MockupRelays from "./mockups/MockupRelays";
import MockupBlossom from "./mockups/MockupBlossom";
import MockupWoT from "./mockups/MockupWoT";

const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "relays", label: "Relays", icon: Server },
    { id: "blossom", label: "Blossom", icon: Image },
    { id: "wot", label: "Web of Trust", icon: ShieldCheck },
];

export default function AdminShowcase() {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-col">

                {/* Top Tab Bar */}
                <div className="flex overflow-x-auto border-b border-white/5 bg-zinc-900/30 rounded-t-xl">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`group relative flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${isActive
                                    ? "text-white"
                                    : "text-zinc-500 hover:text-zinc-300"
                                    }`}
                            >
                                <Icon size={16} className={`transition-colors ${isActive ? "text-fuchsia-400" : "text-zinc-600 group-hover:text-zinc-400"}`} />
                                <span>{tab.label}</span>

                                {/* Active bottom indicator */}
                                {isActive && (
                                    <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.5)]" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mockup Window */}
                <div>
                    <div className="relative z-10 mx-auto transform-gpu overflow-hidden rounded-b-xl border border-t-0 border-white/10 bg-[#0a0a0c] shadow-2xl transition-all duration-500">
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
                                <span className="truncate">localhost:3000/admin/{tabs.find(t => t.id === activeTab)?.label.toLowerCase().replace(" ", "-")}</span>
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
                    <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />
                </div>

            </div>
        </div>
    );
}
