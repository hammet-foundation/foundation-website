import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/foundation/Nav";
import { Hero } from "@/components/foundation/Hero";
import { Mission } from "@/components/foundation/Mission";
import { Programs } from "@/components/foundation/Programs";
import { Impact } from "@/components/foundation/Impact";
import { Partners } from "@/components/foundation/Partners";
import { Team } from "@/components/foundation/Team";
import { GetInvolved } from "@/components/foundation/GetInvolved";
import { Contact } from "@/components/foundation/Contact";
import { Footer } from "@/components/foundation/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--offwhite)] text-[color:var(--indigo)]">
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Impact />
        <Partners />
        <Team />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
