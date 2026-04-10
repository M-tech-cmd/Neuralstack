import type { Route } from "./+types/enterprise";
import Navbar from "../../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enterprise - Neuralstack" },
    { name: "description", content: "Discover how Neuralstack can transform your enterprise design workflows." },
  ];
}

export default function Enterprise() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <h1>Enterprise</h1>
        <p>Scale your design operations with Neuralstack's enterprise solutions. Built for teams that demand reliability, security, and advanced features.</p>
        <h2>Enterprise Features</h2>
        <ul>
          <li>Advanced security and compliance</li>
          <li>Team management and collaboration</li>
          <li>Custom integrations</li>
          <li>Dedicated enterprise support</li>
        </ul>
        <p>Contact our sales team to learn more about enterprise pricing and solutions.</p>
      </main>
    </div>
  );
}