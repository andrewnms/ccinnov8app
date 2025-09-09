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
    category: "TRUTH",
    headline: "Goodluck",
    quote: "Goodluck this will be a new world for you",
    author: "Misfit Graduate",
    title: "Class of 2024"
  },
  {
    id: 2,
    category: "PERSPECTIVE",
    headline: "This Is Real",
    quote: "This class will matter more than any other. The rest? Prepare to ignore them. Most of your classes will feel like a waste of time compared to this. If you have papers, use ChatGPT. If you have assignments, just do the minimum. Why? Because this is where you'll actually learn. You'll talk to real people, face real problems, and build things that might fail. And that's the point — this is real.",
    author: "Focused Student",
    title: "Priorities Set Straight"
  },
  {
    id: 3,
    category: "MOTIVATION",
    headline: "The Right Direction",
    quote: "Always remember this: If you are going in the right direction things SHOULD NOT be easy; the struggle will teach you things you didn't know before - Nipsy Hussle. You have nothing to lose but everything to gain.",
    author: "Growth Mindset",
    title: "Learned Through Struggle"
  },
  {
    id: 4,
    category: "COMMITMENT",
    headline: "Worth More Than Time",
    quote: "Not only do you have to know what youre going into, but also you have to commit in order to stay in this class. If you do though, this class will change your worldview. This class is not worth your time, it is worth so much more.",
    author: "Committed Graduate",
    title: "Changed Worldview"
  },
  {
    id: 5,
    category: "FILTER",
    headline: "Teaching You About Yourself",
    quote: "This class is absolutely worth it... only if you're willing to let it teach you something. It might seem demanding but it's demanding for a reason. Ultimately, this class is a great filter, and by the end of it (if you haven't been kicked out) you'll have learned more about not just entrepreneurship but a lot of important things about yourself.",
    author: "Self-Aware Founder",
    title: "Passed The Filter"
  },
  {
    id: 6,
    category: "OPPORTUNITY",
    headline: "Don't Waste It",
    quote: "If you get the opportunity to be able to participate in this class, don't waste it. I sure as hell would regret it if I did, thinking 'what could've been if I just stuck with it' a few years later knowing what we pulled off in this class.",
    author: "Opportunity Taker",
    title: "No Regrets"
  },
  {
    id: 7,
    category: "TRANSFORMATION",
    headline: "Life Trajectory Change",
    quote: "If you're like me who was aimless in life, do everything in your power to join. You will change your life trajectory.",
    author: "Former Aimless Student",
    title: "Found Direction"
  },
  {
    id: 8,
    category: "CHALLENGE",
    headline: "Challenge Bowei",
    quote: "Keep challenging Bowei. If you truly believe your idea is good, show that its good. Just,,, make sure you'll actually be successful LOL",
    author: "Bold Challenger",
    title: "Pushed The Limits"
  },
  {
    id: 9,
    category: "TIMING",
    headline: "Take It ASAP",
    quote: "Take it as soon as you possibly can, having the skills you get from this class gets you a very long way ahead of everyone. It's hard, it's difficult, but if you want to be successful outside of academics, it's going to be worth it.",
    author: "Early Adopter",
    title: "Ahead Of Everyone"
  },
  {
    id: 10,
    category: "FUTURE",
    headline: "Learn From Our Mistakes",
    quote: "I want them to learn from our mistakes and do an even better job in the future",
    author: "Reflective Graduate",
    title: "Paving The Way"
  },
  {
    id: 11,
    category: "BELONGING",
    headline: "Where Misfits Belong",
    quote: "Join this class—you won't regret it. It's more than lessons; it's where you'll find yourself, challenge your limits, and grow with people who get what it means to be different. Here, being a misfit is your strength. This class has changed my life, I hope it changes yours too.",
    author: "Transformed Misfit",
    title: "Found Strength In Differences"
  },
  {
    id: 12,
    category: "CHALLENGES",
    headline: "Conquer Yourself",
    quote: "Don't be scared of challenges, conquer them and conquer yourself.",
    author: "Self-Conqueror",
    title: "Overcame Fear"
  },
  {
    id: 13,
    category: "PRACTICAL VALUE",
    headline: "Everyone Wins",
    quote: "Compared to the others, I'm not as big of a success. But, the practical knowledge gained from this class: it makes everyone a winner, this info is usable for a long time. Also this is worth spending your tuition on instead of what (I've seen) the normal CCINOV8 is.",
    author: "Practical Learner",
    title: "Getting Real Value"
  },
  {
    id: 14,
    category: "GROWTH",
    headline: "From Introvert to Champion",
    quote: "Dear future misfit students, this class is definitely not for everyone but I hope that you give it a chance! I was so close to giving up but who knew that in the next month, our team managed to win the hackathon.. then in the next month, we won the Big 3 Showdown! I was an introvert who only ever dreamed of achieving such things.. now here I am! My life turned upside down in just the span of 3 months. I hope you guys get to experience the same thing. Good luck future misfits!",
    author: "Former Introvert",
    title: "Now Hackathon Winner"
  },
  {
    id: 15,
    category: "ENVIRONMENT",
    headline: "Not Just A Class",
    quote: "This is not just a class, this is a class where you come out being absorbed by the startup environment. You don't have to be experienced with it, you just need the guts and sheer will to keep continuing fully knowing you will be failing",
    author: "Startup Immersed",
    title: "Embraced Failure"
  },
  {
    id: 16,
    category: "FAILING",
    headline: "Fail Fast, Get Up Faster",
    quote: "Scared of failing? Just do it. Fail fast, get up faster.",
    author: "Fast Failer",
    title: "Faster Riser"
  },
  {
    id: 17,
    category: "DEDICATION",
    headline: "Blood, Sweat, and Tears",
    quote: "Be ready to dedicate a lot of yourself to this class. You'll get nothing out of it if you don't give your blood, sweat, and tears for it. It's been very stressful, but also very fun. This class has made me feel so many ups and downs that helped me grow as a person and as an entrepreneur. Trust me, it's so worth it, but only if you really want it.",
    author: "All-In Graduate",
    title: "Found Joy In The Struggle"
  },
  {
    id: 18,
    category: "STARTUP MINDSET",
    headline: "You Only Need One Win",
    quote: "In the corporate world, change takes time. Years, possibly. Your impact will be miniscule and by the end of your career, you'd have a lingering feeling of 'what if i could have done this'. When you're making a startup, you start with an idea and end with an actual product in your hands. The closest thing we can get (for now) to re-enacting an act of God and our only chance of changing the world. You can lose 99 times, but in the startup world? You only need one win.",
    author: "Startup Believer",
    title: "Lost 99 Times, Won Once"
  },
  {
    id: 19,
    category: "VALUE",
    headline: "Skip Other Classes",
    quote: "Soak up every lesson. Even if you have another class, record and skip it. This class is worth every general business class i had my whole stay combined",
    author: "Priority Setter",
    title: "Made The Right Choice"
  },
  {
    id: 20,
    category: "TIME",
    headline: "Make Time For This",
    quote: "Take a lighter load to make time for this. You won't regret making more time for this.",
    author: "Time Manager",
    title: "Zero Regrets"
  },
  {
    id: 21,
    category: "VISION",
    headline: "Know What You Bring",
    quote: "I don't code. I hate math. Shifted the hell out of engineering and took up Organizational Communications. I have no regrets. I know what I'm capable of, and what I know is that I have a strong vision. I can create strong visuals, great music, and I can apply it to any project that I can believe in. And I applied it in this class for our startup, and it worked. It's all a matter of knowing what you're capable of and what you're bringing to the table",
    author: "Creative Visionary",
    title: "Non-Technical Founder"
  },
  {
    id: 22,
    category: "COMMUNITY",
    headline: "Build The Future",
    quote: "Join this community, it will change your life. Be part of the movement. This is the community that will build the future.",
    author: "Community Builder",
    title: "Future Creator"
  },
  {
    id: 23,
    category: "BALANCE",
    headline: "Balance Is Key",
    quote: "Take everything seriously but not too serious",
    author: "Balanced Graduate",
    title: "Found The Sweet Spot"
  },
  {
    id: 24,
    category: "WORK ETHIC",
    headline: "Put In The Work",
    quote: "Do not come to this class if you are not going to put in the work",
    author: "Hard Worker",
    title: "Put In The Effort"
  },
  {
    id: 25,
    category: "LIFE CHANGE",
    headline: "Life-Changing",
    quote: "Just go, this will change your life.",
    author: "Transformed Graduate",
    title: "New Life Path"
  },
  {
    id: 26,
    category: "PERSEVERANCE",
    headline: "Never Give Up",
    quote: "NEVER. GIVE. UP. Take this class seriously and view it as a gateway to something greater. Believe in yourself and reach new heights in the span of a few MONTHS.",
    author: "Persevering Student",
    title: "Reached New Heights"
  },
  {
    id: 27,
    category: "LIMITS",
    headline: "Push Your Limits",
    quote: "The misfits class will push you to your limits and have you doubt your own capabilities. Only those with the drive, motivation, passion, and ability, will survive. Those who come out of it though will prosper",
    author: "Limit Pusher",
    title: "Now Prospering"
  },
  {
    id: 28,
    category: "WORTH IT",
    headline: "Worth The Work",
    quote: "It's a lot of work, but it will all be worth it in the end.",
    author: "Hardworking Graduate",
    title: "Reaped The Rewards"
  },
  {
    id: 29,
    category: "SUPPORT",
    headline: "You'll Get Support",
    quote: "This will be a tough path, but together we can make startups successful, so go join because we will get you support.",
    author: "Supportive Peer",
    title: "Here To Help"
  },
  {
    id: 30,
    category: "EFFORT",
    headline: "110% Effort",
    quote: "You guys undoubtedly will be the best students not just in your major, not just in DLSU, but the entire Philippines. Just put your 110% effort into it. You dont need to be the best talker or the smartest programmer. Passion and drive pulls out the best of you. So join up.",
    author: "Passionate Graduate",
    title: "Gave 110%"
  },
  {
    id: 31,
    category: "FEARLESSNESS",
    headline: "Don't Fear What's Coming",
    quote: "Hello~ do not fear what is to come; whether you fail or succeed, it is not the end: It ends when you say it ends.",
    author: "Fearless Student",
    title: "Defines Own Ending"
  },
  {
    id: 32,
    category: "FAILURE",
    headline: "Fail Early",
    quote: "Try and try no matter what even if you fail, because it's better to fail early and know what not to do, rather than fail later on in life when you don't have enough time on your hands anymore. So don't be afraid of failure.",
    author: "Early Failer",
    title: "Learned What Not To Do"
  },
  {
    id: 33,
    category: "TRANSFORMATION",
    headline: "Throw It All Out",
    quote: "Buckle up. This is the class where you take what you think you can do, and throw it all out the window. Get ready to go from someone who takes classes about building a startup, to potentially someone who has their own startup. This is the closest thing you'll get to a class that helps you build a business within a term.",
    author: "Transformed Builder",
    title: "Has Own Startup Now"
  },
  {
    id: 34,
    category: "INSTRUCTOR",
    headline: "Crazy Professor",
    quote: "Bowei is a crazy guy T_T.",
    author: "Amused Student",
    title: "Survived The Craziness"
  },
  {
    id: 35,
    category: "SELF-DISCOVERY",
    headline: "Your Greatest Enemy And Ally",
    quote: "You will hate yourself, you will love yourself and you will realize that you are both your own greatest enemy and ally. Work on yourself, maintain your relationships and be absolutely-fucking-crazy.",
    author: "Self-Aware Graduate",
    title: "Embraced The Crazy"
  },
  {
    id: 36,
    category: "QUALITY",
    headline: "Best Class Ever",
    quote: "Best. Class. Ever. (And I'm not even a student anymore)",
    author: "Alumni Fan",
    title: "Still Raving About It"
  },
  {
    id: 37,
    category: "MOMENTUM",
    headline: "Keep Moving",
    quote: "Move. Keep moving. Don't stop.",
    author: "Momentum Keeper",
    title: "Never Stopped"
  },
  {
    id: 38,
    category: "JOURNEY",
    headline: "Great Journey",
    quote: "I honestly think you would be missing out on a great journey if you don't take this class! You get to meet a lot of driven people and you get to learn many things as you go through this class. Although be prepared to give your 101% for this class since it is a bit fast paced, but trust me, it is worth it 😊.",
    author: "Journey Taker",
    title: "Worth Every Step"
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
