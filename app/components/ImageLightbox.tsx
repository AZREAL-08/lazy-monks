"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
    images: { src: string; alt: string }[];
}

export default function ImageLightbox({ images }: ImageLightboxProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

    const isOpen = openIndex !== null;

    const resetView = useCallback(() => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
    }, []);

    const open = (i: number) => {
        setOpenIndex(i);
        resetView();
    };

    const close = () => {
        setOpenIndex(null);
        resetView();
    };

    const goTo = useCallback(
        (dir: -1 | 1) => {
            if (openIndex === null) return;
            const next = (openIndex + dir + images.length) % images.length;
            setOpenIndex(next);
            resetView();
        },
        [openIndex, images.length, resetView]
    );

    const zoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.5, 5)), []);
    const zoomOut = useCallback(() => {
        setZoom((z) => {
            const next = Math.max(z - 0.5, 1);
            if (next === 1) setPan({ x: 0, y: 0 });
            return next;
        });
    }, []);

    // Keyboard
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") goTo(-1);
            if (e.key === "ArrowRight") goTo(1);
            if (e.key === "+" || e.key === "=") zoomIn();
            if (e.key === "-") zoomOut();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, goTo]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Mouse drag for panning when zoomed
    const onPointerDown = (e: React.PointerEvent) => {
        if (zoom <= 1) return;
        setDragging(true);
        dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: React.PointerEvent) => {
        if (!dragging) return;
        setPan({
            x: dragStart.current.panX + (e.clientX - dragStart.current.x),
            y: dragStart.current.panY + (e.clientY - dragStart.current.y),
        });
    };
    const onPointerUp = () => setDragging(false);

    // Native wheel listener (non-passive) so preventDefault works for scroll-zoom
    const imageAreaRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!isOpen) return;
        const el = imageAreaRef.current;
        if (!el) return;
        const handler = (e: WheelEvent) => {
            e.preventDefault();
            if (e.deltaY < 0) zoomIn();
            else zoomOut();
        };
        el.addEventListener("wheel", handler, { passive: false });
        return () => el.removeEventListener("wheel", handler);
    }, [isOpen, zoomIn, zoomOut]);

    return (
        <>
            {/* ─── Thumbnail Grid ─── */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => open(i)}
                        className="relative rounded-xl overflow-hidden glass p-1 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                    >
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-foreground/5">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                        </div>
                    </button>
                ))}
            </div>

            {/* ─── Lightbox Modal ─── */}
            <AnimatePresence>
                {isOpen && openIndex !== null && (
                    <div
                        className="fixed inset-0 z-[99999] bg-black/90 flex flex-col"
                        onClick={close}
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                            <span className="text-white/60 text-sm font-medium">
                                {openIndex + 1} / {images.length}
                            </span>
                            <div className="flex items-center gap-1">
                                <button onClick={zoomOut} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Zoom out (-)">
                                    <ZoomOut className="w-5 h-5" />
                                </button>
                                <span className="text-white/50 text-xs w-12 text-center">{Math.round(zoom * 100)}%</span>
                                <button onClick={zoomIn} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Zoom in (+)">
                                    <ZoomIn className="w-5 h-5" />
                                </button>
                                <button onClick={resetView} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors" title="Reset">
                                    <RotateCcw className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Image Area */}
                        <div
                            ref={imageAreaRef}
                            className="flex-1 flex items-center justify-center overflow-hidden relative select-none"
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default", touchAction: "none" }}
                        >
                            {/* Prev */}
                            {images.length > 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); goTo(-1); }}
                                    className="absolute left-2 md:left-4 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            )}

                            <img
                                key={openIndex}
                                src={images[openIndex].src}
                                alt={images[openIndex].alt}
                                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
                                style={{
                                    transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                                    transition: dragging ? "none" : "transform 0.15s ease-out",
                                }}
                                draggable={false}
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Next */}
                            {images.length > 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); goTo(1); }}
                                    className="absolute right-2 md:right-4 z-10 p-2 md:p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-sm"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            )}
                        </div>

                        {/* Caption */}
                        <div className="px-4 py-3 text-center flex-shrink-0">
                            <p className="text-white/50 text-sm truncate">{images[openIndex].alt}</p>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
