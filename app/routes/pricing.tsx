import type { Route } from "./+types/pricing";
import Navbar from "../../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pricing - Neuralstack" },
    { name: "description", content: "Explore Neuralstack's pricing plans and find the right fit for your needs." },
  ];
}

export default function Pricing() {
  return (
    <div className="page">
      <Navbar />
      <main className="content">
        <h1>Pricing</h1>
        <p>Choose the plan that best suits your design needs. From individual creators to enterprise teams, we have options for everyone.</p>
        <h2>Plans</h2>
        <div className="pricing-plans">
          <div className="plan">
            <h3>Free</h3>
            <p>$0/month</p>
            <ul>
              <li>Basic visualization</li>
              <li>Limited renders</li>
              <li>Community support</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Pro</h3>
            <p>$29/month</p>
            <ul>
              <li>Advanced AI features</li>
              <li>Unlimited renders</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="plan">
            <h3>Enterprise</h3>
            <p>Contact us</p>
            <ul>
              <li>All Pro features</li>
              <li>Team collaboration</li>
              <li>Dedicated support</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}