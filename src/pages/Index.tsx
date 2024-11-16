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
            // Add a staggered effect to child elements
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
    toast({
      title: "Thanks for your interest!",
      description: "We'll notify you when registration opens.",
    });
  };

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight stagger">
            stop studying.
            <br />
            <span className="gradient-text">
              Start building.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-mono text-gray-400 stagger">
            Experience a new way of learning entrepreneurship with the all new ccinnov8 class.
          </p>
          <p className="text-lg mb-8 text-gray-300 stagger">All are welcomed.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center stagger">
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
      <section className="section">
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">Professor - Bowei Gai</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            Founder investor builder dreamer...
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center stagger">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" 
              alt="Apple"
              className="h-12 w-auto mx-auto invert opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://nowserving.co/wp-content/uploads/2021/07/nowserving-logo.png" 
              alt="Now Serving"
              className="h-12 w-auto mx-auto invert opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" 
              alt="Oracle"
              className="h-12 w-auto mx-auto invert opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png" 
              alt="AMD"
              className="h-12 w-auto mx-auto invert opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png" 
              alt="Microsoft"
              className="h-12 w-auto mx-auto invert opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;