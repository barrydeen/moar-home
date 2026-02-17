import { Cloud, Trash2, Upload, MoreHorizontal } from "lucide-react";

export default function MockupBlossom() {
    return (
        <div className="h-full p-6">
            {/* Storage Bar */}
            <div className="mb-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="mb-2 flex justify-between text-xs font-medium text-zinc-400">
                    <span className="flex items-center gap-2"><Cloud size={14} /> CDN Storage</span>
                    <span>45% Used</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-zinc-600 font-mono">
                    <span>450GB used</span>
                    <span>1TB total</span>
                </div>
            </div>

            {/* Toolbar */}
            <div className="mb-4 flex items-center justify-between">
                <h3 className="font-mono text-sm text-zinc-300">Media Files</h3>
                <button className="flex items-center gap-2 rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors">
                    <Upload size={14} /> Upload
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden rounded border border-zinc-800 bg-zinc-900/50 hover:border-cyan-500/50 transition-colors">
                        <div className={`h-full w-full bg-zinc-800/20 ${i % 2 === 0 ? 'bg-gradient-to-br from-zinc-800/20 to-zinc-700/20' : 'bg-gradient-to-tr from-zinc-800/20 to-zinc-700/20'}`} />

                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 bg-black/40">
                            <div className="flex gap-2">
                                <button className="rounded-full bg-white/10 p-1.5 text-white hover:bg-red-500 hover:text-white">
                                    <Trash2 size={14} />
                                </button>
                                <button className="rounded-full bg-white/10 p-1.5 text-white hover:bg-white/20">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Type Badge */}
                        <div className="absolute bottom-1 left-1 rounded bg-black/60 px-1 py-0.5 text-[8px] font-mono text-zinc-400">
                            {i % 3 === 0 ? 'MP4' : 'WEBP'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
