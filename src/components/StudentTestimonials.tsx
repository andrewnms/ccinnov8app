"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-testimonial";
import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Letters from Misfit Graduates for the ccinnov8 entrepreneurship class
const misfitLetters = [
  {
    id: 1,
    category: "JOURNEY",
    headline: "Great Journey Ahead",
    quote: "I honestly think you would be missing out on a great journey if you don't take this class! You get to meet a lot of driven people and you get to learn many things as you go through this class. Although be prepared to give your 101% for this class since it is a bit fast paced, but trust me, it is worth it 😊.",
    author: "Luis Miguel Antonio Razon",
    title: "Startup Community Builder"
  },
  {
    id: 2,
    category: "VICTORY",
    headline: "Winning Philosophy",
    quote: "Winning is disgusting, nasty, and ugly but it's everything. We'll teach you how. Just put in the hours.",
    author: "Andrew Pagulayan",
    title: "Victory Strategist"
  },
  {
    id: 3,
    category: "QUALITY",
    headline: "Best Class Ever",
    quote: "Best. Class. Ever. (And I'm not even a student anymore)",
    author: "Bernard Lu",
    title: "Alumni Champion"
  },
  {
    id: 4,
    category: "SELF-DISCOVERY",
    headline: "Your Greatest Enemy And Ally",
    quote: "You will hate yourself, you will love yourself and you will realize that you are both your own greatest enemy and ally. Work on yourself, maintain your relationships and be absolutely-fucking-crazy.",
    author: "Nelle Basilio",
    title: "Self-Mastery Advocate"
  },
  {
    id: 5,
    category: "INSTRUCTOR",
    headline: "Crazy Professor",
    quote: "Bowei is a crazy guy T_T.",
    author: "Hans Lumagui",
    title: "Surviving The Madness"
  },
  {
    id: 6,
    category: "TRANSFORMATION",
    headline: "Throw It All Out",
    quote: "Buckle up. This is the class where you take what you think you can do, and throw it all out the window. Get ready to go from someone who takes classes about building a startup, to potentially someone who has their own startup. This is the closest thing you'll get to a class that helps you build a business within a term.",
    author: "Kendrick Pua",
    title: "Startup Builder"
  },
  {
    id: 7,
    category: "FAILURE",
    headline: "Fail Early, Learn Fast",
    quote: "Try and try no matter what even if you fail, because it's better to fail early and know what not to do, rather than fail later on in life when you don't have enough time on your hands anymore. So don't be afraid of failure.",
    author: "Matthew Suarez",
    title: "Early Failure Advocate"
  },
  {
    id: 8,
    category: "FEARLESSNESS",
    headline: "You Define The End",
    quote: "Hello~ do not fear what is to come; whether you fail or succeed, it is not the end:\n\nIt ends when you say it ends.",
    author: "Christian Dave Tordillo",
    title: "Fearless Entrepreneur"
  },
  {
    id: 9,
    category: "EXCELLENCE",
    headline: "Be The Best",
    quote: "You guys undoubtedly will be the best students not just in your major, not just in DLSU, but the entire Philippines. Just put your 110% effort into it. You dont need to be the best talker or the smartest programmer. Passion and drive pulls out the best of you. So join up.",
    author: "Jake Rivera",
    title: "Excellence Champion"
  },
  {
    id: 10,
    category: "SUPPORT",
    headline: "Together We Succeed",
    quote: "This will be a tough path, but together we can make startups successful, so go join because we will get you support.",
    author: "Francisco III Perez",
    title: "Community Support Leader"
  },
  {
    id: 11,
    category: "WORTH IT",
    headline: "Worth The Work",
    quote: "It's a lot of work, but it will all be worth it in the end.",
    author: "Rinaldo Lee",
    title: "Perseverance Advocate"
  },
  {
    id: 12,
    category: "LIMITS",
    headline: "Push Your Limits",
    quote: "The misfits class will push you to your limits and have you doubt your own capabilities. Only those with the drive, motivation, passion, and ability, will survive. Those who come out of it though will prosper.",
    author: "Stefano Nicholas E. Santos",
    title: "Limit Breaker"
  },
  {
    id: 13,
    category: "PERSEVERANCE",
    headline: "Never Give Up",
    quote: "NEVER. GIVE. UP.\n\nTake this class seriously and view it as a gateway to something greater. Believe in yourself and reach new heights in the span of a few MONTHS.",
    author: "Clarence Ivan Ang",
    title: "Peak Performance Achiever"
  },
  {
    id: 14,
    category: "LIFE CHANGE",
    headline: "Life-Changing",
    quote: "Just go, this will change your life.",
    author: "Sherna Yaun",
    title: "Life Transformation Expert"
  },
  {
    id: 15,
    category: "WORK ETHIC",
    headline: "Put In The Work",
    quote: "Do not come to this class if you are not going to put in the work",
    author: "Josh Austin Mikhail T. Natividad",
    title: "Hard Work Evangelist"
  },
  {
    id: 16,
    category: "BALANCE",
    headline: "Balance Is Key",
    quote: "Take everything seriously but not too serious",
    author: "Raphael Tapiador",
    title: "Zen Entrepreneur"
  },
  {
    id: 17,
    category: "COMMUNITY",
    headline: "Build The Future",
    quote: "Join this community, it will change your life. Be part of the movement. This is the community that will build the future.",
    author: "Marcus Gavriel S. Tanael",
    title: "Future Builder"
  },
  {
    id: 18,
    category: "VISION",
    headline: "Know What You Bring",
    quote: "I don't code. I hate math. Shifted the hell out of engineering and took up Organizational Communications. I have no regrets. I know what I'm capable of, and what I know is that I have a strong vision. I can create strong visuals, great music, and I can apply it to any project that I can believe in. And I applied it in this class for our startup, and it worked. It's all a matter of knowing what you're capable of and what you're bringing to the table",
    author: "Sancho Go",
    title: "Creative Visionary"
  },
  {
    id: 19,
    category: "TIME",
    headline: "Make Time For This",
    quote: "Take a lighter load to make time for this. You won't regret making more time for this.",
    author: "Donnald Miguel Robles",
    title: "Priority Master"
  },
  {
    id: 20,
    category: "VALUE",
    headline: "Skip Other Classes",
    quote: "Soak up every lesson. Even if you have another class, record and skip it. This class is worth every general business class i had my whole stay combined",
    author: "Theresa Chu",
    title: "Value Maximizer"
  },
  {
    id: 21,
    category: "STARTUP MINDSET",
    headline: "You Only Need One Win",
    quote: "In the corporate world, change takes time. Years, possibly. Your impact will be miniscule and by the end of your career, you'd have a lingering feeling of \"what if i could have done this\".\n\nWhen you're making a startup, you start with an idea and end with an actual product in your hands. The closest thing we can get (for now) to re-enacting an act of God and our only chance of changing the world.\n\nYou can lose 99 times, but in the startup world? You only need one win.",
    author: "Ji Chan",
    title: "Startup Philosopher"
  }
];

// Randomize the order of testimonials
const shuffledTestimonials = [...misfitLetters].sort(() => Math.random() - 0.5);

function MisfitLetters() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 6000);

    const selectHandler = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", selectHandler);

    return () => {
      clearInterval(intervalId);
      api.off("select", selectHandler);
    };
  }, [api]);

  return (
    <div className="relative bg-black overflow-hidden section">  
      {/* Simple decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading - styled to match the site */}
        <div className="max-w-2xl mx-auto mb-10 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 stagger">
            letters from the
            <span className="gradient-text"> misfit graduates</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 font-mono stagger">
            unfiltered advice from those who came before you
          </p>
        </div>
        
        {/* Main testimonial carousel */}
        <div className="relative reveal">
          <Carousel 
            setApi={setApi}
            className="w-full max-w-6xl mx-auto stagger"
            opts={{ 
              loop: true,
              align: "start"
            }}
          >
            {/* Clean navigation controls - positioned outside for better UX */}
            <div className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-20">
              <CarouselPrevious className="h-10 w-10 rounded-full bg-black border border-white/30 text-white hover:bg-white/10 hover:text-white transition-colors" />
            </div>
            
            <CarouselContent className="py-6">
              {shuffledTestimonials.map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2 pl-4 pr-4">
                  <div 
                    className="h-full bg-black border border-gray-800 rounded-lg p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/10"
                  >
                    {/* Category indicator */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-gray-400">{item.category}</span>
                    </div>
                    
                    {/* Impact headline */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                      {item.headline}
                    </h3>
                    
                    {/* Testimonial content */}
                    <div className="relative mb-6 flex-grow">
                      <Quote className="absolute -top-2 -left-1 w-6 h-6 text-gray-700" />
                      <p className="pt-4 text-gray-400 text-base">
                        {item.quote}
                      </p>
                    </div>
                    
                    {/* Author information */}
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-800">
                      <Avatar className="h-10 w-10 border-2 border-white/30 bg-black">
                        <AvatarFallback className="bg-white/20 text-white font-mono text-xs">
                          {item.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <p className="text-white font-medium text-sm">{item.author}</p>
                        <p className="text-gray-400 text-xs">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-20">
              <CarouselNext className="h-10 w-10 rounded-full bg-black border border-white/30 text-white hover:bg-white/10 hover:text-white transition-colors" />
            </div>
          </Carousel>
          
          {/* Progress indicators */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {shuffledTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === idx 
                      ? "w-8 bg-white" 
                      : "w-3 bg-gray-700"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA section has been removed */}
      </div>
    </div>
  );
}

export { MisfitLetters };
