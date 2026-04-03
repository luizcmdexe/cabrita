export default function MusicPlayer() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <iframe
        width="280"
        height="60"
        src="https://www.youtube.com/embed/ujNeHIo7oTE?autoplay=1&controls=1&modestbranding=1&rel=0"
        title="Music Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
}
