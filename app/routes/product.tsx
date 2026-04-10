import type { Route } from "./+types/product";
import Navbar from "../../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product - Neuralstack" },
    { name: "description", content: "Learn about Neuralstack's product features and capabilities." },
  ];
}

export default function Product() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <h1>Product</h1>
        <p>Discover the powerful features of Neuralstack. Our AI-first design environment helps you create beautiful spaces at the speed of thought.</p>
        <h2>Key Features</h2>
        <ul>
          <li>AI-powered visualization</li>
          <li>Real-time rendering</li>
          <li>Collaborative design tools</li>
          <li>Seamless project management</li>
        </ul>
        <p>Experience the future of architectural design with Neuralstack.</p>
      </main>
    </div>
  );
}