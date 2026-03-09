"use client";

import { motion } from "framer-motion";
import { guestMembers } from "../data/content";
import { Github, Linkedin, Globe } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export default function GuestMembersSection() {
    if (guestMembers.length === 0) return null;

    return (
        <section className="py-24 px-4 max-w-7xl mx-auto relative z-10" id="guest-members">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Guest <span className="text-gradient">Contributors</span></h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                    Talented folks who jumped in and helped us ship. We couldn&apos;t have done it without them.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {guestMembers.map((guest, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -8 }}
                        className="glass rounded-2xl overflow-hidden group border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="h-40 overflow-hidden relative">
                            <div className="absolute inset-0 z-10" />
                            <img
                                src={guest.image}
                                alt={guest.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 relative z-20">
                            <h3 className="text-lg font-bold mb-1">{guest.name}</h3>
                            <p className="text-purple-400 text-sm mb-2 font-medium">{guest.role}</p>
                            <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{guest.bio}</p>

                            {/* Contribution badge */}
                            <div className="mb-4 p-3 rounded-lg bg-foreground/5 border border-foreground/10">
                                <p className="text-xs uppercase tracking-wider text-foreground/50 mb-1">Contributed to</p>
                                <p className="text-sm font-semibold text-orange-400">{guest.project}</p>
                                <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{guest.contribution}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {guest.skills.slice(0, 4).map((skill, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-foreground/5 rounded-full text-foreground/80">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
                                {guest.socials.github && (
                                    <a href={guest.socials.github} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-foreground transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {guest.socials.linkedin && (
                                    <a href={guest.socials.linkedin} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-[#0a66c2] transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {guest.socials.portfolio && (
                                    <a href={guest.socials.portfolio} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-orange-500 transition-colors">
                                        <Globe className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
