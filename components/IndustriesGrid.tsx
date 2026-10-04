import Reveal from "./Reveal";
import IndustryCard from "./IndustryCard";
import { INDUSTRIES } from "@/data/home";

export default function IndustriesGrid() {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {INDUSTRIES.map((i, idx) => (
        <Reveal key={i.title} delay={(idx % 4) * 0.06} className="bg-dark-2">
          <IndustryCard {...i} />
        </Reveal>
      ))}
    </div>
  );
}
