
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MisfitLetters } from "@/components/StudentTestimonials";

const Index = () => {
  const { toast } = useToast();
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            const children = entry.target.querySelectorAll('.stagger');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "-50px"
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWaitlist = () => {
    window.open('https://forms.gle/7vLLZ9yVadfcMNBq8', '_blank');
    toast({
      title: "thanks for your interest!",
      description: "redirecting you to the registration form.",
    });
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight stagger">
            stop studying.
            <br />
            <span className="gradient-text">
              start building.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-mono text-gray-400 stagger">
            entrepreneurship class for the rule-breakers.
          </p>
          <p className="text-lg mb-8 text-gray-300 stagger">
  misfits welcomed.
<p className="text-sm text-gray-400 stagger">
  (all students from all schools; sit-ins welcomed)
</p>
</p>

          <div className="flex flex-col gap-4 justify-center stagger">
            <Button
              onClick={handleWaitlist}
              className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded-none w-[200px] mx-auto"
            >
              get on the 2026 waitlist
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-8 reveal">
            {[
              {
                title: "more doing, less lecturing",
                description: "we build real startups. no theories.",
              },
              {
                title: "break stupid rules",
                description: "think you can do better? we'll support you!",
              },
              {
                title: "learn to fail",
                description: "if you always succeed, your goals are too low",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-800 rounded-lg hover:border-white transition-colors stagger"
              >
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 font-mono">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misfit Letters Section */}
      <MisfitLetters />

      {/* Come Join Us Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">come join us</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            be a founder, investor, builder, or a dreamer...
          </p>
          <div className="stagger mb-12">
            <img 
              src="/lovable-uploads/9c10832f-da3c-4344-b116-42dad436d1c6.png" 
              alt="Group photo of students"
              className="w-full max-w-4xl mx-auto shadow-2xl border border-white/20 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 stagger">
            got questions?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            contact us here
          </p>
          <div className="space-y-4 font-mono text-gray-400 stagger">
            <p className="hover:text-white transition-colors">
              ric_pagulayan@dlsu.edu.ph
            </p>
            <p className="hover:text-white transition-colors">
              sherwin_yaun@dlsu.edu.ph
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
