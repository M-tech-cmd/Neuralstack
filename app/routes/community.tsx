import type { Route } from "./+types/community";
import Navbar from "../../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Community - Neuralstack" },
    { name: "description", content: "Join the Neuralstack community and connect with fellow designers and architects." },
  ];
}

export default function Community() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <h1>Community</h1>
        <p>Connect with a vibrant community of designers, architects, and creatives using Neuralstack to bring their visions to life.</p>
        <h2>Get Involved</h2>
        <ul>
          <li>Join our Discord server</li>
          <li>Participate in forums</li>
          <li>Share your projects</li>
          <li>Contribute to open-source</li>
        </ul>
        <p>Be part of the future of design with Neuralstack.</p>
      </main>
    </div>
  );
}