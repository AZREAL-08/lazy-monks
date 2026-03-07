"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 302;
const FRAME_WIDTH = 1920;
const FRAME_HEIGHT = 3413;

/** Sparse keyframe interval — load every Nth frame first for instant coverage */
const KEYFRAME_STEP = 10;

function getFrameSrc(index: number): string {
    const padded = String(index).padStart(3, "0");
    return `/frames/monk_${padded}.webp`;
}

/**
 * Preload a single image, returning a promise.
 * Uses `fetchpriority` hint for critical frames.
 */
function loadImage(
    frameIndex: number,
    priority: "high" | "low" | "auto" = "auto"
): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.fetchPriority = priority;
        img.decoding = "async";
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = getFrameSrc(frameIndex + 1); // 1-indexed filenames
    });
}

export default function MonkScrollSection() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>(
        new Array(FRAME_COUNT).fill(null)
    );
    const frameIndexRef = useRef(0);
    const rafIdRef = useRef<number>(0);
    const abortRef = useRef(false);

    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const text3Ref = useRef<HTMLDivElement>(null);

    /* ---------- Canvas Draw ---------- */
    const drawFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const targetIdx = frameIndexRef.current;
        let img = imagesRef.current[targetIdx];

        // If the exact frame isn't loaded yet, find the nearest loaded frame
        if (!img) {
            // Search outward from targetIdx for the closest available frame
            for (let offset = 1; offset < FRAME_COUNT; offset++) {
                const before = targetIdx - offset;
                const after = targetIdx + offset;
                if (before >= 0 && imagesRef.current[before]) {
                    img = imagesRef.current[before];
                    break;
                }
                if (after < FRAME_COUNT && imagesRef.current[after]) {
                    img = imagesRef.current[after];
                    break;
                }
            }
        }

        if (!img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }, []);

    const requestDraw = useCallback(() => {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = requestAnimationFrame(drawFrame);
    }, [drawFrame]);

    /* ---------- Progressive Preload ---------- */
    useEffect(() => {
        abortRef.current = false;
        const images = imagesRef.current;

        /**
         * Loading strategy (no loading screen):
         * 1. Load frame 0 at HIGH priority — draws instantly
         * 2. Load sparse keyframes (every 10th) — instant scrub coverage in ~30 loads
         * 3. Fill remaining frames in proximity order from current scroll position
         */
        async function preload() {
            // Phase 1: First frame immediately (high priority)
            try {
                const first = await loadImage(0, "high");
                if (abortRef.current) return;
                images[0] = first;
                requestDraw();
            } catch {
                /* frame missing — continue */
            }

            // Phase 2: Sparse keyframes for instant coverage
            const keyframes: number[] = [];
            for (let i = KEYFRAME_STEP; i < FRAME_COUNT; i += KEYFRAME_STEP) {
                keyframes.push(i);
            }
            // Also include the very last frame
            if (keyframes[keyframes.length - 1] !== FRAME_COUNT - 1) {
                keyframes.push(FRAME_COUNT - 1);
            }

            // Load keyframes in small concurrent batches (4 at a time)
            for (let b = 0; b < keyframes.length; b += 4) {
                if (abortRef.current) return;
                const batch = keyframes.slice(b, b + 4);
                const results = await Promise.allSettled(
                    batch.map((idx) => loadImage(idx, "auto"))
                );
                results.forEach((result, j) => {
                    if (result.status === "fulfilled") {
                        images[batch[j]] = result.value;
                    }
                });
                // Redraw if current frame was just loaded
                if (
                    batch.some((idx) => idx === frameIndexRef.current) ||
                    !images[frameIndexRef.current]
                ) {
                    requestDraw();
                }
            }

            // Phase 3: Fill remaining frames in sequential batches
            const remaining: number[] = [];
            for (let i = 0; i < FRAME_COUNT; i++) {
                if (!images[i]) remaining.push(i);
            }

            for (let b = 0; b < remaining.length; b += 6) {
                if (abortRef.current) return;
                const batch = remaining.slice(b, b + 6);
                const results = await Promise.allSettled(
                    batch.map((idx) => loadImage(idx, "low"))
                );
                results.forEach((result, j) => {
                    if (result.status === "fulfilled") {
                        images[batch[j]] = result.value;
                    }
                });
                // Redraw if nearest frame improved
                requestDraw();
            }
        }

        preload();

        return () => {
            abortRef.current = true;
        };
    }, [requestDraw]);

    /* ---------- GSAP ScrollTrigger ---------- */
    useEffect(() => {
        const wrapper = wrapperRef.current;
        const pinned = pinnedRef.current;
        const t1 = text1Ref.current;
        const t2 = text2Ref.current;
        const t3 = text3Ref.current;
        if (!wrapper || !pinned || !t1 || !t2 || !t3) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper,
                    pin: pinned,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const index = Math.min(
                            FRAME_COUNT - 1,
                            Math.floor(progress * (FRAME_COUNT - 1))
                        );
                        if (index !== frameIndexRef.current) {
                            frameIndexRef.current = index;
                            requestDraw();
                        }
                    },
                },
            });

            /* --- Text 1: "The Lazy Monk" — 0%–30% --- */
            tl.fromTo(
                t1,
                { opacity: 1, y: 0 },
                { opacity: 0, y: -30, ease: "power2.inOut" },
                0
            );

            /* --- Text 2: "Awakening to the Code" — 35%–60% --- */
            tl.fromTo(
                t2,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, ease: "power2.inOut" },
                0.35
            );
            tl.to(t2, { opacity: 0, y: -30, ease: "power2.inOut" }, 0.5);

            /* --- Text 3: "Flow State" — 65%–100% --- */
            tl.fromTo(
                t3,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, ease: "power2.inOut" },
                0.65
            );
        }, wrapper);

        return () => {
            ctx.revert();
            cancelAnimationFrame(rafIdRef.current);
        };
    }, [requestDraw]);

    /* ---------- Canvas resize ---------- */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = FRAME_WIDTH;
        canvas.height = FRAME_HEIGHT;
        requestDraw();
    }, [requestDraw]);

    return (
        <section
            ref={wrapperRef}
            className="relative"
            style={{ height: "800vh" }}
            id="monk-scroll"
        >
            {/* Pinned container */}
            <div
                ref={pinnedRef}
                className="h-screen w-full overflow-hidden bg-transparent"
            >
                {/* Two-column grid */}
                <div className="h-full grid grid-cols-1 md:grid-cols-2">
                    {/* Left: Canvas */}
                    <div className="relative flex items-center justify-center h-full">
                        <canvas
                            ref={canvasRef}
                            className="max-h-screen w-auto object-contain"
                            style={{
                                maxWidth: "100%",
                                height: "100vh",
                            }}
                        />
                    </div>

                    {/* Right: Text blocks */}
                    <div className="relative flex items-center justify-center h-full">
                        {/* Text 1 */}
                        <div
                            ref={text1Ref}
                            className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16"
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                                The Lazy
                                <br />
                                <span className="text-amber-500 dark:text-amber-200">Monk</span>
                            </h2>
                            <p className="text-foreground/70 text-lg md:text-xl max-w-md text-center leading-relaxed">
                                In stillness, the journey begins. A single breath before the
                                storm of creation.
                            </p>
                        </div>

                        {/* Text 2 */}
                        <div
                            ref={text2Ref}
                            className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16"
                            style={{ opacity: 0 }}
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                                Awakening
                                <br />
                                <span className="text-cyan-500 dark:text-cyan-200">to the Code</span>
                            </h2>
                            <p className="text-foreground/70 text-lg md:text-xl max-w-md text-center leading-relaxed">
                                Eyes open. Fingers type. The monk transforms idle thought into
                                electric purpose.
                            </p>
                        </div>

                        {/* Text 3 */}
                        <div
                            ref={text3Ref}
                            className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16"
                            style={{ opacity: 0 }}
                        >
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
                                Flow
                                <br />
                                <span className="text-emerald-500 dark:text-emerald-200">State</span>
                            </h2>
                            <p className="text-foreground/70 text-lg md:text-xl max-w-md text-center leading-relaxed">
                                Time dissolves. Code flows like water. The monk and the machine
                                become one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
