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
            experience a new way of learning entrepreneurship with the all new ccinnov8 class.
          </p>
          <p className="text-lg mb-8 text-gray-300 stagger">misfits are welcomed.</p>
          <div className="flex flex-col gap-4 justify-center stagger">
            <Button
              onClick={handleWaitlist}
              className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded-none w-[200px] mx-auto"
            >
              get on the waitlist
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-none w-[200px] mx-auto py-2 px-6"
            >
              class syllabus
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
                description: "we focus on activities to simulate building a startup",
              },
              {
                title: "battle for money and prizes",
                description: "life is more fun when you compete with others",
              },
              {
                title: "cheating allowed",
                description: "and it is encouraged! work smart, not hard.",
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

      {/* Professor Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">who's your prof? Gai. Bowei Gai.</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            founder, investor, builder, dreamer...
          </p>
          <div className="stagger mb-12">
            <img 
              src="/Screenshot_2024-11-21_at_3.59.24_PM.jpeg" 
              alt="Bowei Gai Headshot"
              className="w-full max-w-md mx-auto shadow-2xl border border-white/20 rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-items-center stagger border border-dashed border-white/20 p-8 bg-white/5">
            <img 
              src="/IMG_0005.png"
              alt="Company Logo 1"
              className="h-16 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="/IMG_0006.png"
              alt="Company Logo 2"
              className="h-16 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="/IMG_0007.png"
              alt="Company Logo 3"
              className="h-16 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="/IMG_0008.png"
              alt="Company Logo 4"
              className="h-16 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="/IMG_0009.png"
              alt="Company Logo 5"
              className="h-16 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>

          <p className="text-sm text-gray-400 mt-4 font-mono stagger">(he worked in these companies btw)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 stagger">
            got questions?
          </h2>
          <div className="space-y-4 font-mono text-gray-400 stagger">
            <p className="hover:text-white transition-colors">
              ric_pagulayan@gmail.com
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
