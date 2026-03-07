"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
    const { resolvedTheme } = useTheme();
    const scriptLoadedRef = useRef(false);

    // Initialize or re-initialize particles based on current theme
    const initParticles = () => {
        if (!window.particlesJS || !scriptLoadedRef.current) return;

        // We can clear out existing canvases just in case particlesJS doesn't natively hot-reload cleanly
        const container = document.getElementById("particles-js");
        if (container) {
            container.innerHTML = "";
        }

        // Set particle color based on request (always #f97316 for lines, and particles themselves)
        const particleColor = "#f97316";

        window.particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: particleColor,
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000",
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: particleColor,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse",
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        });
    };

    // Re-run init when theme changes
    useEffect(() => {
        initParticles();
    }, [resolvedTheme]);

    return (
        <>
            <div
                id="particles-js"
                className="fixed inset-0 z-[-1] bg-background"
            />
            <Script
                src="/particles.js-master/particles.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    scriptLoadedRef.current = true;
                    initParticles();
                }}
            />
        </>
    );
}

declare global {
    interface Window {
        particlesJS: any;
    }
}
