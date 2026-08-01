'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinned,
  HeartHandshake,
  BedDouble,
  ShieldCheck,
  Clock3,
  Leaf,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const features: Record<Lang, { icon: typeof MapPinned; title: string; desc: string }[]> = {
  en: [
    { icon: MapPinned, title: 'Begin Your Pilgrimage at Rahu Sthalam', desc: 'Native based in Thirunageswaram, Sivam Travels offers easy Rahu Temple access, local guidance, and smooth Navagraha pilgrimage routes.' },
    
    { icon: BedDouble, title: 'Stay Near the Rahu Temple', desc: 'Comfortable, affordable rooms are located just steps from Thirunageswaram Rahu Temple, perfect for resting during your Navagraha circuit.' },
    { icon: ShieldCheck, title: 'Safe & Reliable', desc: 'Sivam Travels provides experienced drivers, well-maintained vehicles, and round-the-clock support throughout your journey.' },
    { icon: Clock3, title: 'Thoughtful Timing', desc: 'We plan around temple hours and crowd patterns so your darshan is peaceful and unhurried.' },
    
  ],
  ta: [
    { icon: MapPinned, title: 'ராகு ஸ்தலத்தில் யாத்திரையைத் தொடங்குங்கள்', desc: 'திருநாகேஸ்வரத்தில் தாயகமாக இருக்கும் சிவம் டிராவல்ஸ், எளிய ராகு கோயில் அணுகல், உள்ளூர் வழிகாட்டி மற்றும் சுமூகமான நவகிரஹ யாத்திரை வழிகளை வழங்குகிறது.' },
   
    { icon: BedDouble, title: 'ராகு கோயில் அருகே தங்கல்', desc: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே சில அடி தூரத்தில் வசதியான, மலிவான அறைகள் உள்ளன, உங்கள் நவகிரஹ சுற்றின் போது ஓய்வெடுக்க சிறந்தது.' },
    { icon: ShieldCheck, title: 'பாதுகாப்பும் நம்பகமும்', desc: 'அனுபவமிக்க ஓட்டிகள், நன்கு பராமரிக்கப்பட்ட வாகனங்கள், பயணம் முழுவதும் 24 மணி நேர ஆதரவு.' },
    { icon: Clock3, title: 'கவனமான நேர அமைப்பு', desc: 'கோயில் நேரம் மற்றும் கூட்டத்திற்கு ஏற்ப திட்டமிடுகிறோம், எனவே உங்கள் தரிசனம் அமைதியாக இருக்கும்.' },
    
  ],
};

const dummyTestimonials = [
  {
    name: 'Ravi Kumar',
    location: 'Chennai',
    rating: 5,
    review: 'This was the smoothest Navagraha pilgrimage we have ever done. The personalized care and knowledgeable drivers made our trip completely stress-free.',
    date: '2 weeks ago',
  },
  {
    name: 'Meenakshi Iyer',
    location: 'Bengaluru',
    rating: 5,
    review: 'Excellent service! Staying right next to the Rahu Temple was a blessing. The itinerary was perfectly timed around temple closures. Highly recommended.',
    date: '1 month ago',
  },
  {
    name: 'Suresh Pillai',
    location: 'Coimbatore',
    rating: 5,
    review: 'Very professional and devoted team. They understand the spiritual significance of the temples and guided us wonderfully without rushing us anywhere.',
    date: '3 months ago',
  },
];

// Simple Google 'G' Logo SVG
const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function WhyChoose() {
  const { lang, t } = useApp();
  const items = features[lang];

  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex = ((page % dummyTestimonials.length) + dummyTestimonials.length) % dummyTestimonials.length;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, page]);

  return (
    <section className="bg-ivory py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* LEFT COLUMN (55%) - Features */}
          <div className="flex flex-col gap-4 lg:w-[55%]">
            {items.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-4 rounded-2xl border border-gold/15 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-luxe"
              >
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-gold">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg text-maroon lg:text-[1.15rem]">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 font-body text-[0.92rem] leading-relaxed text-charcoal/75">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN (45%) - Testimonials */}
          <div className="flex w-full flex-col pt-4 lg:w-[45%]">
            <h3 className="font-heading text-[1.75rem] text-maroon lg:text-3xl">
              ★★★★★ Testimonials
            </h3>
            <p className="mt-2 font-body text-[1.05rem] text-charcoal/70">
              Trusted by pilgrims from across India
            </p>

            <div
              className="relative mt-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative h-auto min-h-[300px] overflow-hidden rounded-2xl">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute flex h-full w-full flex-col justify-center rounded-[1.25rem] border border-gold/15 bg-white p-7 shadow-soft"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                      <GoogleIcon />
                    </div>

                    <Quote className="mb-3 h-8 w-8 text-maroon/10" />

                    <p className="mb-6 font-body text-[1.05rem] leading-relaxed text-charcoal/80 italic">
                      &ldquo;{dummyTestimonials[currentIndex].review}&rdquo;
                    </p>

                    <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                      <div>
                        <h4 className="font-heading text-[1.1rem] text-maroon">
                          {dummyTestimonials[currentIndex].name}
                        </h4>
                        <p className="font-body text-[0.85rem] text-charcoal/60">
                          {dummyTestimonials[currentIndex].location}
                        </p>
                      </div>
                      <span className="font-body text-[0.8rem] text-charcoal/50">
                        Google Verified Review
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div
                className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/50 text-maroon shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                onClick={() => paginate(1)}
              >
                <ChevronRight className="h-6 w-6" />
              </div>
              <div
                className="absolute -left-4 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/50 text-maroon shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                onClick={() => paginate(-1)}
              >
                <ChevronLeft className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}