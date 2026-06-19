import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Experience } from "@/components/portfolio/Experience";
import { Work } from "@/components/portfolio/Work";
import { Services } from "@/components/portfolio/Services";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swar Shah — Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Swar Shah — Software Developer specializing in scalable, event-driven full-stack web applications across Fintech and enterprise.",
      },
      { property: "og:title", content: "Swar Shah — Software Developer" },
      {
        property: "og:description",
        content:
          "Full-stack engineer (React, Spring Boot, Kafka, AWS) shipping production systems for Fintech & enterprise.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
