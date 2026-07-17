'use client';

import { motion } from 'framer-motion';
import { MapPinned, HeartHandshake, BedDouble, ShieldCheck, Clock3, Leaf } from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const features: Record<Lang, { icon: typeof MapPinned; title: string; desc: string }[]> = {
  en: [
    { icon: MapPinned, title: 'Begin Your Pilgrimage at Rahu Sthalam', desc: 'Native based in Thirunageswaram, Sivam Travels offers easy Rahu Temple access, local guidance, and smooth Navagraha pilgrimage routes.' },
    { icon: HeartHandshake, title: 'Personalised Care', desc: 'Every journey is tailored to your pace and devotion — never rushed, always reverent.' },
    { icon: BedDouble, title: 'Stay Near the Rahu Temple', desc: 'Comfortable, affordable rooms are located just steps from Thirunageswaram Rahu Temple, perfect for resting during your Navagraha circuit.' },
    { icon: ShieldCheck, title: 'Safe & Reliable', desc: 'Experienced drivers, well-maintained vehicles, and round-the-clock support throughout your journey.' },
    { icon: Clock3, title: 'Thoughtful Timing', desc: 'We plan around temple hours and crowd patterns so your darshan is peaceful and unhurried.' },
    { icon: Leaf, title: 'Responsible Travel', desc: 'We honour local communities and sacred spaces, leaving each temple as we found it.' },
  ],
  ta: [
    { icon: MapPinned, title: 'ராகு ஸ்தலத்தில் யாத்திரையைத் தொடங்குங்கள்', desc: 'திருநாகேஸ்வரத்தில் தாயகமாக இருக்கும் சிவம் டிராவல்ஸ், எளிய ராகு கோயில் அணுகல், உள்ளூர் வழிகாட்டி மற்றும் சுமூகமான நவகிரஹ யாத்திரை வழிகளை வழங்குகிறது.' },
    { icon: HeartHandshake, title: 'தனிப்பட்ட கவனிப்பு', desc: 'ஒவ்வொரு பயணமும் உங்கள் வேகத்திற்கும் பக்திக்கும் ஏற்ப திட்டமிடப்படுகிறது — அவசரம் இல்லை, எப்போதும் பக்தியுடன்.' },
    { icon: BedDouble, title: 'ராகு கோயில் அருகே தங்கல்', desc: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே சில அடி தூரத்தில் வசதியான, மலிவான அறைகள் உள்ளன, உங்கள் நவகிரஹ சுற்றின் போது ஓய்வெடுக்க சிறந்தது.' },
    { icon: ShieldCheck, title: 'பாதுகாப்பும் நம்பகமும்', desc: 'அனுபவமிக்க ஓட்டிகள், நன்கு பராமரிக்கப்பட்ட வாகனங்கள், பயணம் முழுவதும் 24 மணி நேர ஆதரவு.' },
    { icon: Clock3, title: 'கவனமான நேர அமைப்பு', desc: 'கோயில் நேரம் மற்றும் கூட்டத்திற்கு ஏற்ப திட்டமிடுகிறோம், எனவே உங்கள் தரிசனம் அமைதியாக இருக்கும்.' },
    { icon: Leaf, title: 'பொறுப்பான பயணம்', desc: 'உள்ளூர் சமூகங்களையும் புனித இடங்களையும் மதித்து, ஒவ்வொரு கோயிலையும் கண்டபடியே விட்டு வருகிறோம்.' },
  ],
};

export default function WhyChoose() {
  const { lang, t } = useApp();
  const items = features[lang];

  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-gold/15 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-luxe"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/5 text-maroon transition-colors duration-300 group-hover:bg-maroon group-hover:text-gold">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl text-maroon">{f.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
