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
    category: "DEDICATION",
    headline: "Give Everything You Have",
    quote: "Be ready to dedicate a lot of yourself to this class. You'll get nothing out of it if you don't give your blood, sweat, and tears for it. It's been very stressful, but also very fun. This class has made me feel so many ups and downs that helped me grow as a person and as an entrepreneur. Trust me, it's so worth it, but only if you really want it.",
    author: "Andrew Hiro C. Ishikawa",
    title: "Andrew Hiro C. Ishikawa"
  },
  {
    id: 2,
    category: "RESILIENCE",
    headline: "Fail Fast, Rise Faster",
    quote: "Scared of failing? Just do it. Fail fast, get up faster.",
    author: "Ysobella Torio",
    title: "Ysobella Torio"
  },
  {
    id: 3,
    category: "IMMERSION",
    headline: "Beyond A Class",
    quote: "This is not just a class, this is a class where you come out being absorbed by the startup environment. You don't have to be experienced with it, you just need the guts and sheer will to keep continuing fully knowing you will be failing",
    author: "Zach Matthew B. Noche",
    title: "Zach Matthew B. Noche"
  },
  {
    id: 4,
    category: "TRANSFORMATION",
    headline: "Life Turned Upside Down",
    quote: "Dear future misfit students, this class is definitely not for everyone but I hope that you give it a chance! I was so close to giving up but who knew that in the next month, our team managed to win the hackathon.. then in the next month, we won the Big 3 Showdown! I was an introvert who only ever dreamed of achieving such things.. now here I am! My life turned upside down in just the span of 3 months. I hope you guys get to experience the same thing. Good luck future misfits!",
    author: "Anna Katrina So",
    title: "Anna Katrina So"
  },
  {
    id: 5,
    category: "VALUE",
    headline: "Practical Knowledge For Life",
    quote: "Compared to the others, I'm not as big of a success. But, the practical knowledge gained from this class: it makes everyone a winner, this info is usable for a long time. Also this is worth spending your tuition on instead of what (I've seen) the normal CCINOV8 is.",
    author: "Diego David P. Yason",
    title: "Diego David P. Yason"
  },
  {
    id: 6,
    category: "CONQUEST",
    headline: "Conquer Your Challenges",
    quote: "Don't be scared of challenges, conquer them and conquer yourself.",
    author: "Renzo Chua",
    title: "Renzo Chua"
  },
  {
    id: 7,
    category: "SELF-DISCOVERY",
    headline: "Find Your Strength",
    quote: "Join this class—you won't regret it. It's more than lessons; it's where you'll find yourself, challenge your limits, and grow with people who get what it means to be different. Here, being a misfit is your strength. This class has changed my life, I hope it changes yours too.",
    author: "Harrie Singson Que",
    title: "Harrie Singson Que"
  },
  {
    id: 8,
    category: "LEARNING",
    headline: "Learn From Our Mistakes",
    quote: "I want them to learn from our mistakes and do an even better job in the future",
    author: "Jules Callanta",
    title: "Jules Callanta"
  },
  {
    id: 9,
    category: "ADVANTAGE",
    headline: "Get Ahead Of Everyone",
    quote: "Take it as soon as you possibly can, having the skills you get from this class gets you a very long way ahead of everyone. It's hard, it's difficult, but if you want to be successful outside of academics, it's going to be worth it.",
    author: "Bien Aaron Miranda",
    title: "Bien Aaron Miranda"
  },
  {
    id: 10,
    category: "BELIEF",
    headline: "Challenge And Believe",
    quote: "Keep challenging Bowei. If you truly believe your idea is good, show that its good. Just,,, make sure you'll actually be successful LOL",
    author: "Reign Larraquel",
    title: "Reign Larraquel"
  },
  {
    id: 11,
    category: "DIRECTION",
    headline: "Change Your Life Trajectory",
    quote: "If you're like me who was aimless in life, do everything in your power to join. You will change your life trajectory.",
    author: "Lorenzo Ambrosio",
    title: "Lorenzo Ambrosio"
  },
  {
    id: 12,
    category: "OPPORTUNITY",
    headline: "Don't Waste This Chance",
    quote: "If you get the opportunity to be able to participate in this class, don't waste it. I sure as hell would regret it if I did, thinking \"what could've been if I just stuck with it\" a few years later knowing what we pulled off in this class.",
    author: "Jasper Gabriel Raymundo",
    title: "Jasper Gabriel Raymundo"
  },
  {
    id: 13,
    category: "FILTER",
    headline: "The Great Filter",
    quote: "This class is absolutely worth it... only if you're willing to let it teach you something. It might seem demanding but it's demanding for a reason. Ultimately, this class is a great filter, and by the end of it (if you haven't been kicked out) you'll have learned more about not just entrepreneurship but a lot of important things about yourself.",
    author: "Malks Mogen David",
    title: "Malks Mogen David"
  },
  {
    id: 14,
    category: "COMMITMENT",
    headline: "Worth So Much More",
    quote: "Not only do you have to know what youre going into, but also you have to commit in order to stay in this class. If you do though, this class will change your worldview. This class is not worth your time, it is worth so much more.",
    author: "Clive Jarel Ang",
    title: "Clive Jarel Ang"
  },
  {
    id: 15,
    category: "STRUGGLE",
    headline: "Nothing To Lose, Everything To Gain",
    quote: "Always remember this: If you are going in the right direction things SHOULD NOT be easy; the struggle will teach you things you didn't know before - Nipsy Hussle\n\nYou have nothing to lose but everything to gain.",
    author: "Paul Benedict A. Marasigan",
    title: "Paul Benedict A. Marasigan"
  },
  {
    id: 16,
    category: "REALITY",
    headline: "This Is Where You Learn",
    quote: "This class will matter more than any other.\n\nThe rest? Prepare to ignore them. Most of your classes will feel like a waste of time compared to this. If you have papers, use ChatGPT. If you have assignments, just do the minimum.\n\nWhy? Because this is where you'll actually learn.\nYou'll talk to real people, face real problems, and build things that might fail.\n\nAnd that's the point — this is real.\n\nIf you're ready for that, welcome.",
    author: "Sherwin Yaun",
    title: "Sherwin Yaun"
  },
  {
    id: 17,
    category: "NEW WORLD",
    headline: "A New World Awaits",
    quote: "Goodluck this will be a new world for you",
    author: "Chen Shawn Shaowei C.",
    title: "Chen Shawn Shaowei C."
  },
  {
    id: 18,
    category: "GROWTH",
    headline: "Change The World",
    quote: "This class will not be for everyone, but I am confident that if you can stick through it, survive the initial storm, and find the determination to keep going, it will be the best class you'll ever take. There will be lots of hardships, arguments, difficult decisions, self-doubt, and so much more trouble to face; but, hey, that's what happens when you build a startup. But I promise you the outcome will be worth it: you will grow tenfold in just the 3-4 months you'll be a part of this class.\n\nIf you're crazy enough to think you can change the world, then join the Misfits Community.",
    author: "Enrique Lejano",
    title: "Enrique Lejano"
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
