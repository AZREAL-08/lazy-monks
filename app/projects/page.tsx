"use client";

import { useState, useMemo } from "react";
import { projects } from "@/app/data/content";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, AlignLeft, X, Filter } from "lucide-react";

type ViewMode = "timeline" | "grid";

export default function ProjectsHome() {
    const [viewMode, setViewMode] = useState<ViewMode>("timeline");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    const [showFilters, setShowFilters] = useState(false);

    // Collect all unique tech from every project
    const allTechs = useMemo(() => {
        const set = new Set<string>();
        projects.forEach((p) => p.techStack.forEach((t) => set.add(t)));
        return Array.from(set).sort();
    }, []);

    // Filter & sort
    const filtered = useMemo(() => {
        const q = searchQuery.toLowerCase();
        return [...projects]
            .filter((p) => {
                const matchesSearch =
                    !q ||
                    p.title.toLowerCase().includes(q) ||
                    p.tagline.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    (p.hackathon && p.hackathon.toLowerCase().includes(q)) ||
                    p.techStack.some((t) => t.toLowerCase().includes(q));
                const matchesTech =
                    selectedTechs.length === 0 ||
                    selectedTechs.every((st) => p.techStack.includes(st));
                return matchesSearch && matchesTech;
            })
            .sort((a, b) => b.date.localeCompare(a.date)); // newest first
    }, [searchQuery, selectedTechs]);

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
        );
    };

    return (
        <div className="min-h-screen py-24 px-4 max-w-7xl mx-auto relative z-10">
            {/* ─── Header ─── */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Our <span className="text-gradient">Projects</span>
                </h1>
                <p className="text-foreground/60 max-w-2xl mx-auto">
                    Everything we&apos;ve built, from hackathons to passion projects — ordered by time.
                </p>
            </div>

            {/* ─── Toolbar ─── */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-8">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search projects, tech, hackathons…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 glass rounded-xl text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-orange-500/40 transition-colors border border-transparent bg-transparent"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors">
                            <X className="w-4 h-4" />
                        </button>
                    )}
                </div>

                {/* Filter toggle + View toggle */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={`px-4 py-3 glass rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${showFilters ? "border-orange-500/40 text-orange-500" : "text-foreground/60 hover:text-foreground"}`}
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                        {selectedTechs.length > 0 && (
                            <span className="w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">{selectedTechs.length}</span>
                        )}
                    </button>

                    <div className="glass rounded-xl flex overflow-hidden">
                        <button
                            onClick={() => setViewMode("timeline")}
                            className={`px-4 py-3 text-sm transition-colors flex items-center gap-1.5 ${viewMode === "timeline" ? "bg-orange-500 text-white" : "text-foreground/60 hover:text-foreground"}`}
                        >
                            <AlignLeft className="w-4 h-4" /> Timeline
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`px-4 py-3 text-sm transition-colors flex items-center gap-1.5 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-foreground/60 hover:text-foreground"}`}
                        >
                            <LayoutGrid className="w-4 h-4" /> Grid
                        </button>
                    </div>
                </div>
            </div>

            {/* ─── Filter Chips ─── */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden mb-8"
                    >
                        <div className="glass rounded-xl p-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">Filter by Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {allTechs.map((tech) => {
                                    const active = selectedTechs.includes(tech);
                                    return (
                                        <button
                                            key={tech}
                                            onClick={() => toggleTech(tech)}
                                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${active
                                                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                                                : "bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground"
                                                }`}
                                        >
                                            {tech}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedTechs.length > 0 && (
                                <button onClick={() => setSelectedTechs([])} className="mt-3 text-xs text-orange-500 hover:text-orange-400 transition-colors">
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── Results Count ─── */}
            <p className="text-xs text-foreground/40 mb-6">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
            </p>

            {/* ─── No results ─── */}
            {filtered.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-foreground/40 text-lg">No projects match your filters.</p>
                    <button onClick={() => { setSearchQuery(""); setSelectedTechs([]); }} className="mt-4 text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium">
                        Reset all
                    </button>
                </div>
            )}

            {/* ─── Timeline View ─── */}
            {viewMode === "timeline" && filtered.length > 0 && (
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

                    <div className="space-y-16">
                        {filtered.map((project, index) => {
                            const heroImage = `${project.imageFolder}/${project.thumbnail}`;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-orange-500 -translate-x-1/2 z-10 shadow-lg shadow-orange-500/30" />
                                    {/* Date badge on the line */}
                                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-3 z-10">
                                        <span className="px-3 py-1 glass rounded-full text-xs font-medium text-foreground/50">{project.date}</span>
                                    </div>

                                    {/* Card */}
                                    <div className={`ml-10 md:ml-0 md:w-[45%] ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                                        <Link href={`/projects/${project.id}`} className="group block">
                                            <div className="glass rounded-2xl overflow-hidden border border-foreground/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5">
                                                <div className="overflow-hidden">
                                                    <img
                                                        src={heroImage}
                                                        alt={project.title}
                                                        className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                </div>
                                                <div className="p-5">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="md:hidden text-xs text-foreground/40 font-medium">{project.date}</span>
                                                        {project.hackathon && (
                                                            <span className="text-orange-500 font-semibold text-xs uppercase tracking-wider">{project.hackathon}</span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-xl font-bold mb-1.5 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                                                    <p className="text-foreground/60 text-sm line-clamp-2 mb-4">{project.tagline}</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techStack.slice(0, 4).map((tech, i) => (
                                                            <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${selectedTechs.includes(tech) ? "bg-orange-500/15 text-orange-500" : "bg-foreground/5 text-foreground/50"}`}>
                                                                {tech}
                                                            </span>
                                                        ))}
                                                        {project.techStack.length > 4 && (
                                                            <span className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/50">+{project.techStack.length - 4}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* ─── Grid View ─── */}
            {viewMode === "grid" && filtered.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filtered.map((project, index) => {
                        const heroImage = `${project.imageFolder}/${project.thumbnail}`;
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link href={`/projects/${project.id}`} className="group block h-full">
                                    <div className="glass rounded-2xl overflow-hidden border border-foreground/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 h-full flex flex-col">
                                        <div className="overflow-hidden">
                                            <img
                                                src={heroImage}
                                                alt={project.title}
                                                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs text-foreground/40 font-medium">{project.date}</span>
                                                {project.hackathon && (
                                                    <span className="text-orange-500 font-semibold text-xs uppercase tracking-wider">{project.hackathon}</span>
                                                )}
                                            </div>
                                            <h3 className="text-xl font-bold mb-1.5 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                                            <p className="text-foreground/60 text-sm line-clamp-2 mb-4 flex-1">{project.tagline}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.techStack.slice(0, 4).map((tech, i) => (
                                                    <span key={i} className={`text-xs px-2 py-0.5 rounded-full ${selectedTechs.includes(tech) ? "bg-orange-500/15 text-orange-500" : "bg-foreground/5 text-foreground/50"}`}>
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 4 && (
                                                    <span className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/50">+{project.techStack.length - 4}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            )}
        </div>
    );
}