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
    toast({
      title: "thanks for your interest!",
      description: "we'll notify you when registration opens.",
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
              start building.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-mono text-gray-400 stagger">
            experience a new way of learning entrepreneurship with the all new ccinnov8 class.
          </p>
          <p className="text-lg mb-8 text-gray-300 stagger">all are welcomed.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center stagger">
            <Button
              onClick={handleWaitlist}
              className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8"
            >
              get on the waitlist
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
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
                title: "win money and prizes",
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">who's your prof? a guy named bowei.</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            bowei gai - founder investor builder dreamer...
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 items-center justify-items-center stagger">
            <img 
              src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg" 
              alt="Apple"
              className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="https://nowserving.co/wp-content/uploads/2021/07/nowserving-logo-white.png" 
              alt="Now Serving"
              className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo-White.png" 
              alt="Oracle"
              className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="https://www.amd.com/content/dam/amd/images/logos/amd-logo-white.svg" 
              alt="AMD"
              className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
            <img 
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" 
              alt="Microsoft"
              className="h-8 w-auto mx-auto opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;