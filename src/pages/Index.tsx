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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">who's your prof? Gai. Bowei Gai.</h2>
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            founder, investor, builder, dreamer...
          </p>
          <div className="stagger mb-12">
            <img 
              src="https://cdn.discordapp.com/attachments/1300812366904168479/1305896227577266176/boweigaiheadshot.jpg?ex=67394f63&is=6737fde3&hm=10bdbdf609caedde7024a5c7a54de321903615afaa93560bd7caa48df2309a25&" 
              alt="Bowei Gai Headshot"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <p className="text-sm text-gray-400 mb-4 font-mono stagger">(he worked in these companies btw)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center stagger p-8 rounded-lg bg-white/5 backdrop-blur-sm">
            <img 
              src="https://cdn-icons-png.flaticon.com/128/0/747.png" 
              alt="Apple"
              className="h-8 md:h-12 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer invert p-1"
            />
            <img 
              src="https://cdn.getgist.com/projects/1075/knowledge_base/original/V2_NS_Landscape.png?1643781815=" 
              alt="Now Serving"
              className="h-8 md:h-12 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer p-1"
            />
            <img 
              src="https://zeevector.com/wp-content/uploads/Oracle-Logo-SVG-Download.png" 
              alt="Oracle"
              className="h-8 md:h-12 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer invert p-1"
            />
            <img 
              src="https://logos-download.com/wp-content/uploads/2016/04/AMD_logo_logotype.png" 
              alt="AMD"
              className="h-8 md:h-12 w-auto mx-auto opacity-75 hover:opacity-100 transition-opacity cursor-pointer p-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;