import LandingGreetings from "./LandingGreetings";
import video from "/video.mp4";

export default function Landing() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      {/* background video */}
      <video className="videoTag" muted>
        <source src={video} type="video/mp4" />
      </video>

      {/* mask dance, text, and mega mendung batik */}
      <LandingGreetings />
    </main>
  );
}
