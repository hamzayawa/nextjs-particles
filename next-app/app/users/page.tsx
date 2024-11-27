// pages/index.tsx
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <>
      <Head>
        <title>Particle Animation</title>
        <meta name="description" content="Spider-like particle animation with Next.js" />
      </Head>
      <main style={{ height: "100vh", overflow: "hidden" }}>
        <ParticlesBackground id="particles"/>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1>Welcome to My Page</h1>
          <p>Spider-like particle animation using Next.js!</p>
        </div>
      </main>
    </>
  );
};

export default Home;
