"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function AnimatedCounter({ target, duration = 2, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const startTime = performance.now();

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);

            // Ease-out cubic for dramatic ramp-up then smooth landing
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            setCount(current);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return (
        <span ref={ref} className="text-5xl md:text-7xl font-bold text-gradient tabular-nums">
            {count}{suffix}
        </span>
    );
}

const stats = [
    { label: "Hackathons Competed", value: 10, suffix: "+", description: "National & international events" },
    { label: "Projects Shipped", value: 10, suffix: "", description: "Built, deployed & demoed" },
    { label: "Sleepless Nights", value: 30, suffix: "+", description: "Fueled by caffeine & ambition" },
    { label: "Wins", value: 0, suffix: "", description: "Not giving up yet!" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" as const },
    },
};

export default function ScrollRevealSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

    return (
        <section ref={containerRef} className="py-32 relative perspective-1000">
            <motion.div
                style={{ scale, opacity, rotateX, transformPerspective: 1000 }}
                className="max-w-6xl mx-auto px-4"
            >
                <div className="glass rounded-3xl p-8 md:p-16 relative overflow-hidden border-t border-purple-500/30 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
                    <div className="absolute inset-0 opacity-50" />

                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Hackathon Veterans.
                        </h2>
                        <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
                            We show up to learn new tools, experiment with wild ideas, and build things we genuinely think the world could use.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center gap-2"
                            >
                                <AnimatedCounter
                                    target={stat.value}
                                    suffix={stat.suffix}
                                    duration={2.5}
                                />
                                <span className="text-sm md:text-base font-semibold uppercase tracking-wider text-foreground/80 mt-1">
                                    {stat.label}
                                </span>
                                <span className="text-xs text-foreground/40 hidden md:block">
                                    {stat.description}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
