import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWaitlist = () => {
    toast({
      title: "Thanks for your interest!",
      description: "We'll notify you when registration opens.",
    });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            stop studying.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Start building.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-mono text-gray-400">
            Experience a new way of learning entrepreneurship with the all new ccinnov8 class.
          </p>
          <p className="text-lg mb-8 text-gray-300">All are welcomed.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={handleWaitlist}
              className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8"
            >
              Get on the waitlist
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Class syllabus
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 reveal">
            {[
              {
                title: "More doing, less lecturing",
                description: "we focus on activities to simulate building a startup",
              },
              {
                title: "Win money and prizes",
                description: "life is more fun when you compete with others",
              },
              {
                title: "Cheating allowed",
                description: "and it is encouraged! Work smart, not hard.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professor Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professor - Bowei Gai</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono">
            Founder investor builder dreamer...
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-12 bg-gray-800 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;