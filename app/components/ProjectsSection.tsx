"use client";

import { motion } from "framer-motion";
import { hackathonProjects } from "../data/content";
import { Github, Globe, Trophy } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" as const },
    },
};

export default function ProjectsSection() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto relative z-10" id="projects">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Arsenal</span></h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                    Awards, prizes, and applications we built when we should have been sleeping.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-12"
            >
                {hackathonProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
                    >
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden glass p-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                            <div className="relative overflow-hidden rounded-xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full aspect-video object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4 text-orange-500">
                                <Trophy className="w-5 h-5" />
                                <span className="font-semibold text-sm uppercase tracking-wider">{project.hackathon}</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 glass rounded-md text-sm text-foreground/80 border border-foreground/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-6 py-3 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors flex items-center gap-2">
                                        <Globe className="w-4 h-4" /> Live Demo
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 glass text-foreground rounded-full font-semibold hover:bg-foreground/10 transition-colors flex items-center gap-2">
                                        <Github className="w-4 h-4" /> Source
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
