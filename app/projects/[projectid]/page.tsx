import { projects, teamMembers } from "@/app/data/content";
import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { Globe, ArrowLeft, Calendar, Tag } from "lucide-react";
import MarkdownRenderer from "@/app/components/MarkdownRenderer";
import ImageLightbox from "@/app/components/ImageLightbox";

function getYouTubeId(url: string): string | null {
    const patterns = [
        /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
        /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    ];
    for (const p of patterns) {
        const match = url.match(p);
        if (match) return match[1];
    }
    return null;
}

export default async function ProjectPage(props: PageProps<'/projects/[projectid]'>) {
    const { projectid } = await props.params;
    const project = projects.find((p) => p.id === projectid);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">404</h1>
                    <p className="text-foreground/60 mb-6">This project doesn&apos;t exist.</p>
                    <Link href="/projects" className="px-6 py-3 glass rounded-full text-foreground font-semibold hover:bg-foreground/10 transition-colors">
                        ← All Projects
                    </Link>
                </div>
            </div>
        );
    }

    const heroImage = `${project.imageFolder}/${project.thumbnail}`;

    return (
        <article className="min-h-screen relative z-10">
            {/* ─── Full-width Hero ─── */}
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                <img
                    src={heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

                {/* Back button overlay */}
                <Link
                    href="/projects"
                    className="absolute top-6 left-24 z-20 px-4 py-2 glass rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
            </div>

            {/* ─── Blog Content Container ─── */}
            <div className="max-w-3xl mx-auto px-4 -mt-32 relative z-10">
                {/* ─── Title Block ─── */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        {project.hackathon && (
                            <span className="px-3 py-1 glass rounded-full text-xs font-bold uppercase tracking-wider text-orange-500 flex items-center gap-1.5">
                                <Tag className="w-3 h-3" /> {project.hackathon}
                            </span>
                        )}
                        {project.date && (
                            <span className="px-3 py-1 glass rounded-full text-xs font-medium text-foreground/50 flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" /> {project.date}
                            </span>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">{project.title}</h1>
                    <p className="text-lg md:text-xl text-foreground/60 leading-relaxed">{project.tagline}</p>
                </header>

                {/* ─── Quick Links Bar ─── */}
                <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-foreground/10">
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors flex items-center gap-2">
                            <Globe className="w-4 h-4" /> Live Demo
                        </a>
                    )}
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 glass rounded-full font-semibold text-sm hover:bg-foreground/10 transition-colors flex items-center gap-2">
                            <FaGithub className="w-4 h-4" /> Source Code
                        </a>
                    )}
                    {project.links.youtube && (
                        <a href={project.links.youtube} target="_blank" rel="noreferrer" className="px-5 py-2.5 glass rounded-full font-semibold text-sm hover:bg-foreground/10 transition-colors flex items-center gap-2">
                            <FaYoutube className="w-4 h-4" /> Watch Video
                        </a>
                    )}
                    {project.links.article && (
                        <a href={project.links.article} target="_blank" rel="noreferrer" className="px-5 py-2.5 glass rounded-full font-semibold text-sm hover:bg-foreground/10 transition-colors flex items-center gap-2">
                            📄 Article
                        </a>
                    )}
                </div>

                {/* ─── Description ─── */}
                <section className="mb-12">
                    <p className="text-foreground/80 text-lg leading-relaxed">{project.description}</p>
                </section>

                {/* ─── YouTube Embed ─── */}
                {project.links.youtube && (() => {
                    const videoId = getYouTubeId(project.links.youtube!);
                    if (!videoId) return null;
                    return (
                        <section className="mb-12">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">Watch</h2>
                            <div className="glass rounded-2xl overflow-hidden p-2">
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${videoId}`}
                                        title={`${project.title} — Video`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full rounded-xl"
                                    />
                                </div>
                            </div>
                        </section>
                    );
                })()}

                {/* ─── Tech Stack ─── */}
                <section className="mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 glass rounded-lg text-sm text-foreground/80 border border-foreground/5 hover:border-orange-500/30 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ─── Markdown Content ─── */}
                {project.content && (
                    <section className="mb-12">
                        <MarkdownRenderer content={project.content} />
                    </section>
                )}

                {/* ─── Gallery ─── */}
                {project.gallery.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-6">Gallery</h2>
                        <ImageLightbox
                            images={[
                                { src: heroImage, alt: `${project.title} — Hero` },
                                ...project.gallery.map((img) => ({
                                    src: `${project.imageFolder}/${img}`,
                                    alt: `${project.title} — ${img}`,
                                }))
                            ]}
                        />
                    </section>
                )}

                {/* ─── Team Contributions ─── */}
                {project.contributions.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-6">Team Contributions</h2>
                        <div className="space-y-4">
                            {project.contributions.map((contribution, i) => {
                                const member = teamMembers.find(m => m.id === contribution.memberId);
                                return (
                                    <div key={i} className="glass rounded-xl p-5 border border-foreground/5 flex gap-4 items-start hover:border-orange-500/20 transition-colors">
                                        {member && (
                                            <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-orange-500/20" />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h4 className="font-bold text-foreground">{member?.name ?? `Member #${contribution.memberId}`}</h4>
                                                <span className="text-orange-500 text-xs font-medium px-2 py-0.5 bg-orange-500/10 rounded-full">{contribution.roleInProject}</span>
                                            </div>
                                            <p className="text-foreground/60 text-sm mb-2">{contribution.summary}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {contribution.toolsUsed.map((tool, j) => (
                                                    <span key={j} className="text-xs px-2 py-0.5 bg-foreground/5 rounded-full text-foreground/50">{tool}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}