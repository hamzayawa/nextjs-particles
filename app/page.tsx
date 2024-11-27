import ParticlesBackground from "./components/ParticlesBackground";

export default function Page() {
  return (
    <main style={{ height: "100vh", background: "#0d47a1" }}>
      <ParticlesBackground />
      <h1 style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
        Welcome to the Particle Animation
      </h1>
    </main>
  );
}
