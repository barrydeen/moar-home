"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";
import { Sparkles, Terminal, FileCode, CheckCircle2 } from "lucide-react";

const vibePrompts = [
    {
        id: "public",
        label: "Public Town Square",
        prompt: "I want a public relay on my 'www' subdomain that anyone can read, but you need a bit of Proof of Work to post to keep the spam down.",
        toml: `[relays.public]
name = "The Town Square"
description = "Vibe-genned public relay"
subdomain = "www"

[relays.public.policy.write]
require_auth = false
min_pow = 24  # Spam protection enabled

[relays.public.policy.read]
require_auth = false`,
    },
    {
        id: "private",
        label: "Personal Archive",
        prompt: "Make me a private sub-relay for my own notes and DMs. Only my pubkey should be able to read or write anything.",
        toml: `[relays.private]
name = "Barry's Archive"
description = "Sovereign data vault"
subdomain = "me"

[relays.private.policy.write]
require_auth = true
allowed_pubkeys = ["npub1yourpubkey..."]

[relays.private.policy.read]
require_auth = true
allowed_pubkeys = ["npub1yourpubkey..."]`,
    },
    {
        id: "media",
        label: "Sovereign Media",
        prompt: "Give me a Blossom server on cdn.domain.com that allows me to upload up to 100MB files, and anyone can view them.",
        toml: `[blossoms.media]
name = "My Media Node"
subdomain = "cdn"
storage_path = "/var/lib/moar/media"

[blossoms.media.policy.upload]
require_auth = true
max_file_size = 104857600 # 100MB

[blossoms.media.policy.download]
require_auth = false`,
    }
];

export default function PresetViewer() {
    const [active, setActive] = useState(vibePrompts[0]);
    const [isVibing, setIsVibing] = useState(false);

    const handleVibe = (prompt: typeof vibePrompts[0]) => {
        setIsVibing(true);
        setActive(prompt);
        setTimeout(() => setIsVibing(false), 800);
    };

    return (
        <div className="mx-auto max-w-5xl space-y-12">

            {/* Vibe Prompts Selection */}
            <div className="grid gap-4 sm:grid-cols-3">
                {vibePrompts.map((p) => (
                    <button
                        key={p.id}
                        onClick={() => handleVibe(p)}
                        className={`group relative flex flex-col items-start rounded-xl border p-4 text-left transition-all duration-300 ${active.id === p.id
                            ? "border-fuchsia-500 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(217,70,239,0.1)]"
                            : "border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50"
                            }`}
                    >
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider ${active.id === p.id ? "text-fuchsia-400" : "text-zinc-500"}`}>
                            {p.label}
                        </span>
                        <p className={`mt-2 text-xs leading-relaxed ${active.id === p.id ? "text-zinc-200" : "text-zinc-500"}`}>
                            &quot;{p.prompt}&quot;
                        </p>
                        {active.id === p.id && (
                            <div className="absolute right-3 top-3">
                                <Sparkles size={14} className="animate-pulse text-fuchsia-400" />
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* AI Generation Result */}
            <div className="relative">
                <div className={`glass-card-solid overflow-hidden rounded-2xl border border-white/10 transition-all duration-700 ${isVibing ? "scale-[0.98] blur-sm grayscale" : "scale-100 blur-0 grayscale-0"}`}>

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 bg-zinc-900/50 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/20" />
                                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/20" />
                                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/20" />
                            </div>
                            <span className="ml-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">ai_config_gen.toml</span>
                        </div>
                        <CopyButton text={active.toml} />
                    </div>

                    {/* Content Area */}
                    <div className="relative flex min-h-[300px] flex-col md:flex-row">
                        {/* Prompt Reflection */}
                        <div className="w-full border-b border-white/5 bg-zinc-900/20 p-8 md:w-1/3 md:border-b-0 md:border-r">
                            <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-3 py-1 text-[10px] font-bold text-fuchsia-400">
                                <Sparkles size={12} /> INPUT PROMPT
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                                &quot;{active.prompt}&quot;
                            </p>
                        </div>

                        {/* Resulting TOML */}
                        <div className="w-full p-8 md:w-2/3">
                            <pre className="font-mono text-xs leading-loose text-zinc-400">
                                <code>
                                    {active.toml}
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* Footer / Status */}
                    <div className="flex items-center justify-between border-t border-white/5 bg-zinc-900/50 px-6 py-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-500">
                            <CheckCircle2 size={12} />
                            <span>CONFIG VALIDATED</span>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase">
                            Generated by MOAR AI Context
                        </div>
                    </div>
                </div>

                {/* Vibe Loading Overlay */}
                {isVibing && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-2xl">
                        <div className="flex flex-col items-center gap-2">
                            <div className="h-8 w-8 animate-spin rounded-full border-2 border-fuchsia-500 border-t-transparent" />
                            <span className="font-mono text-[10px] font-bold text-fuchsia-500 animate-pulse">VIBING...</span>
                        </div>
                    </div>
                )}
            </div>

            {/* OpenClaw / Skill section */}
            <div className="rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/5 to-cyan-500/5 p-8 text-center">
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 border border-fuchsia-500/30 text-2xl shadow-[0_0_20px_rgba(217,70,239,0.2)]">
                    🦞
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Using OpenClaw?</h3>
                <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400">
                    Control MOAR directly from your agent with our specialized skill.
                    Download <code className="text-zinc-200">SKILL.md</code> to give your AI
                    the power to manage infrastructure while you sleep.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a href="/SKILL.md" download className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-105">
                        <FileCode size={18} /> Download SKILL.md
                    </a>
                    <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/20">
                        View Integration Guide
                    </button>
                </div>
            </div>

        </div>
    );
}
