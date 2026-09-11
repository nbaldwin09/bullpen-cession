import { useEffect, useMemo, useRef } from "react";
import { classifyStream, twitchEmbedSrc } from "@/lib/sports/watch";

export function StreamPlayer({
  url = "",
  title = "Official stream",
  autoPlay = false,
  className = "",
}: {
  url?: string;
  title?: string;
  autoPlay?: boolean;
  className?: string;
}) {
  const classified = useMemo(() => classifyStream(url), [url]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || classified.kind !== "hls") return;
    let destroyed = false;
    let hls: { destroy: () => void } | undefined;
    void import("hls.js").then((mod) => {
      if (destroyed) return;
      const Hls = mod.default;
      if (Hls.isSupported()) {
        const instance = new Hls();
        instance.loadSource(url);
        instance.attachMedia(el);
        hls = instance;
      } else if (el.canPlayType("application/vnd.apple.mpegurl")) {
        el.src = url;
      }
    });
    return () => {
      destroyed = true;
      hls?.destroy();
    };
  }, [url, classified.kind]);

  return (
    <section className={`overflow-hidden bg-media ${className.includes("h-full") ? "h-full" : ""} ${className}`}>
      {title ? (
        <div className="flex items-center justify-between gap-3 border-b border-line/40 px-4 py-3 text-on-media">
          <h2 className="font-cond text-lg uppercase tracking-[0.12em]">{title}</h2>
          <p className="text-[11px] uppercase tracking-[0.16em] text-on-media-muted">Official stream</p>
        </div>
      ) : null}
      <div className={className.includes("h-full") ? "h-full bg-media" : "aspect-video bg-media"}>
        {classified.kind === "youtube" && classified.id ? (
          <iframe
            title="Official YouTube"
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${classified.id}?autoplay=${autoPlay ? 1 : 0}&mute=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : classified.kind === "twitch" && classified.id ? (
          <iframe
            title="Official Twitch"
            className="h-full w-full"
            src={twitchEmbedSrc(classified.id, autoPlay)}
            allowFullScreen
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : classified.kind === "hls" || classified.kind === "file" ? (
          <video
            ref={videoRef}
            className="h-full w-full"
            controls
            playsInline
            src={classified.kind === "file" ? url : undefined}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center text-on-media-muted">
            <p className="font-cond text-2xl uppercase tracking-wide text-on-media">No official stream</p>
            <p className="max-w-md text-sm">Official tournament streams attach when the match is live. We do not take viewer links.</p>
          </div>
        )}
      </div>
    </section>
  );
}
