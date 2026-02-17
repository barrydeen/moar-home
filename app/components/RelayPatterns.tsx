import { Globe, Lock, ArrowUpRight, ArrowDownLeft, MessageSquare, Wallet, DollarSign, Users, Search } from "lucide-react";

const patterns = [
    {
        name: "Public",
        desc: "Open to all. The standard relay for global communication.",
        icon: Globe,
        policy: "Read: * | Write: *",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        name: "Private",
        desc: "Whitelist-only. Perfect for family or team servers.",
        icon: Lock,
        policy: "Read: Auth | Write: Auth",
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        border: "border-fuchsia-500/20"
    },
    {
        name: "Outbox",
        desc: "Broadcast-only. You write, everyone reads.",
        icon: ArrowUpRight,
        policy: "Read: * | Write: Auth",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        name: "Inbox",
        desc: "Receive-only. You read, everyone writes to you.",
        icon: ArrowDownLeft,
        policy: "Read: Auth | Write: *",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        name: "DM Relay",
        desc: "NIP-17 Encrypted Direct Messages. Metadata privacy.",
        icon: MessageSquare,
        policy: "Private routing",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20"
    },
    {
        name: "Wallet",
        desc: "Nostr Wallet Connect (NWC) service provider.",
        icon: Wallet,
        policy: "NIP-47 Managed",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        name: "Paid Relay",
        desc: "Monetize access. Lightning payments for admission.",
        icon: DollarSign,
        policy: "Write: Payment",
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        name: "Web of Trust",
        desc: "Spam-free zone. Only friends of friends allowed.",
        icon: Users,
        policy: "Write: WoT Score",
        color: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    },
    {
        name: "Discovery",
        desc: "Search & Directory services for the network.",
        icon: Search,
        policy: "Read: * | Indexing",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
];

export default function RelayPatterns() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {patterns.map((p) => (
                <div
                    key={p.name}
                    className={`group relative overflow-hidden rounded-xl border ${p.border} ${p.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                    <div className="mb-4 flex items-center justify-between">
                        <div className={`rounded-lg p-2 ${p.bg} ${p.color}`}>
                            <p.icon size={20} />
                        </div>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                            {p.policy}
                        </span>
                    </div>

                    <h3 className="mb-2 font-bold text-white">{p.name}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                        {p.desc}
                    </p>

                    {/* Hover Glow */}
                    <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${p.bg} blur-2xl transition-opacity opacity-0 group-hover:opacity-100`} />
                </div>
            ))}
        </div>
    );
}
