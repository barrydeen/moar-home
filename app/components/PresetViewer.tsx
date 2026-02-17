"use client";

import { useState } from "react";
import CopyButton from "./CopyButton";

const presets = {
    PUBLIC: {
        label: "The Town Square",
        description: "An open relay for everyone. Rate-limited but censorship-resistant.",
        toml: `[relays.public]
name = "Town Square"
description = "Free speech for all"
subdomain = "www"

[relays.public.policy.write]
require_auth = false
min_pow = 20

[relays.public.policy.read]
require_auth = false`,
    },
    PRIVATE: {
        label: "Walled Garden",
        description: "Invite-only. Whitelist specific pubkeys for exclusive access.",
        toml: `[relays.private]
name = "The Citadel"
description = "Members only"
subdomain = "private"

[relays.private.policy.write]
require_auth = true
allowed_pubkeys = [
    "npub1...", 
    "npub1..."
]`,
    },
    PAID: {
        label: "Pay-to-Play",
        description: "Monetize your infrastructure. Require Lightning payments for access.",
        toml: `[relays.paid]
name = "Premium Relay"
description = "High-speed, paid access"

[relays.paid.policy.write]
require_auth = true
# NIP-42 Auth required
# Subscription billing managed by gateway`,
    },
    BLOSSOM: {
        label: "Media Server",
        description: "Host images and videos with BUD-01 Blossom support.",
        toml: `[blossoms.media]
name = "CDN Node 1"
storage_path = "data/media"
subdomain = "cdn"

[blossoms.media.policy.upload]
require_auth = true
max_file_size = 52428800 # 50MB`,
    },
};

export default function PresetViewer() {
    const [active, setActive] = useState<keyof typeof presets>("PUBLIC");

    return (
        <div className="mx-auto max-w-4xl">
            {/* Tabs */}
            <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
                {(Object.keys(presets) as Array<keyof typeof presets>).map((key) => (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`rounded-full border px-6 py-2 font-mono text-sm transition-all duration-300 ${active === key
                            ? "border-fuchsia-500 bg-fuchsia-500/10 text-white shadow-[0_0_15px_rgba(217,70,239,0.3)]"
                            : "border-transparent bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                            }`}
                    >
                        {presets[key].label}
                    </button>
                ))}
            </div>

            {/* Code Window */}
            <div className="glass-card-solid relative overflow-hidden rounded-xl">
                {/* Window Chrome */}
                <div className="flex items-center justify-between border-b border-white/5 bg-zinc-900/50 px-4 py-3">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />
                        <div className="h-3 w-3 rounded-full bg-zinc-700" />
                    </div>
                    <div className="font-mono text-xs text-zinc-500">moar.toml</div>
                    <CopyButton text={presets[active].toml} />
                </div>

                {/* Content */}
                <div className="relative p-6">
                    <pre className="overflow-x-auto font-mono text-sm leading-relaxed">
                        <code
                            className="block"
                            dangerouslySetInnerHTML={{
                                __html: highlightToml(presets[active].toml)
                            }}
                        />
                    </pre>
                </div>

                {/* Description Footer */}
                <div className="border-t border-white/5 bg-fuchsia-500/5 px-6 py-4">
                    <p className="text-center font-mono text-sm text-fuchsia-300">
                        # {presets[active].description}
                    </p>
                </div>
            </div>
        </div>
    );
}

// Safe line-by-line syntax highlighter
function highlightToml(code: string) {
    const escape = (str: string) =>
        str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    const lines = code.split("\n");

    return lines
        .map((line) => {
            const trimmed = line.trim();
            if (!trimmed) return ""; // Empty line

            // 1. Comments
            if (trimmed.startsWith("#")) {
                return `<span class="token-comment">${escape(line)}</span>`;
            }

            // 2. Sections [section]
            if (trimmed.startsWith("[")) {
                return `<span class="token-key">${escape(line)}</span>`;
            }

            // 3. Key = Value pairs
            const keyValMatch = line.match(/^(\s*)([a-z0-9_]+)(\s*=\s*)(.*)$/i);
            if (keyValMatch) {
                const [_, indent, key, equals, value] = keyValMatch;
                const highlightedValue = highlightValue(value, escape);
                return `${indent}<span class="text-zinc-300">${key}</span>${escape(equals)}${highlightedValue}`;
            }

            // 4. Other lines (e.g. array values, continuations)
            return highlightValue(line, escape);
        })
        .join("\n");
}

function highlightValue(text: string, escapeFn: (s: string) => string) {
    // We need to escape the text first, BUT we want to wrap tokens.
    // So we split by tokens and escape/wrap pieces.
    // Actually, simplest strategy for values:
    // 1. Identify Strings, Bools, Numbers
    // 2. Escape everything else.
    // We can use a tokenizer approach for the value part.

    let result = "";
    let i = 0;

    while (i < text.length) {
        const remaining = text.slice(i);

        // Strings
        if (remaining.startsWith('"')) {
            // Find end of string
            const match = remaining.match(/^"[^"]*"/);
            if (match) {
                result += `<span class="token-string">${escapeFn(match[0])}</span>`;
                i += match[0].length;
                continue;
            }
        }

        // Booleans
        const boolMatch = remaining.match(/^(true|false)\b/);
        if (boolMatch) {
            result += `<span class="token-bool">${boolMatch[0]}</span>`;
            i += boolMatch[0].length;
            continue;
        }

        // Numbers
        const numMatch = remaining.match(/^\d+\b/);
        if (numMatch) {
            result += `<span class="token-num">${numMatch[0]}</span>`;
            i += numMatch[0].length;
            continue;
        }

        // Comments at end of line
        if (remaining.startsWith("#")) {
            result += `<span class="token-comment">${escapeFn(remaining)}</span>`;
            break; // Rest is comment
        }

        // Normal character (escape it)
        result += escapeFn(text[i]);
        i++;
    }
    return result;
}
