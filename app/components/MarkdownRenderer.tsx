"use client";

import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ content }: { content: string }) {
    return (
        <ReactMarkdown
            components={{
                h1: ({ children }) => (
                    <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-foreground">{children}</h1>
                ),
                h2: ({ children }) => (
                    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-foreground flex items-center gap-2">{children}</h2>
                ),
                h3: ({ children }) => (
                    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
                ),
                h4: ({ children }) => (
                    <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">{children}</h4>
                ),
                p: ({ children }) => (
                    <p className="text-foreground/80 leading-relaxed mb-4 text-base">{children}</p>
                ),
                ul: ({ children }) => (
                    <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-foreground/80">{children}</ul>
                ),
                ol: ({ children }) => (
                    <ol className="list-decimal list-outside pl-6 mb-6 space-y-2 text-foreground/80">{children}</ol>
                ),
                li: ({ children }) => (
                    <li className="leading-relaxed">{children}</li>
                ),
                a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-400 underline underline-offset-2 transition-colors font-medium">
                        {children}
                    </a>
                ),
                blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-orange-500/50 pl-4 my-6 italic text-foreground/60">{children}</blockquote>
                ),
                code: ({ className, children }) => {
                    const isBlock = className?.includes("language-");
                    if (isBlock) {
                        return (
                            <code className="block glass rounded-xl p-5 my-6 text-sm font-mono text-foreground/90 overflow-x-auto whitespace-pre">
                                {children}
                            </code>
                        );
                    }
                    return (
                        <code className="px-1.5 py-0.5 glass rounded-md text-sm font-mono text-orange-400">
                            {children}
                        </code>
                    );
                },
                pre: ({ children }) => (
                    <pre className="my-6">{children}</pre>
                ),
                hr: () => (
                    <hr className="my-10 border-foreground/10" />
                ),
                strong: ({ children }) => (
                    <strong className="font-bold text-foreground">{children}</strong>
                ),
                table: ({ children }) => (
                    <div className="overflow-x-auto my-6 glass rounded-xl">
                        <table className="w-full text-sm text-foreground/80">{children}</table>
                    </div>
                ),
                th: ({ children }) => (
                    <th className="text-left p-3 font-semibold border-b border-foreground/10 text-foreground">{children}</th>
                ),
                td: ({ children }) => (
                    <td className="p-3 border-b border-foreground/5">{children}</td>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
}
