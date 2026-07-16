'use client';

import { motion } from 'framer-motion';
import { MapPinned, HeartHandshake, BedDouble, ShieldCheck, Clock3, Leaf } from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const features: Record<Lang, { icon: typeof MapPinned; title: string; desc: string }[]> = {
  en: [
    { icon: MapPinned, title: 'Begin Your Pilgrimage at Rahu Sthalam', desc: 'Sivam Travels is proudly based in Thirunageswaram, home to the renowned Rahu Temple. Starting your journey here means easier temple access, nearby accommodation, local guidance, and a well-planned route that helps you complete the entire Navagraha pilgrimage comfortably.' },
    { icon: HeartHandshake, title: 'Personalised Care', desc: 'Every journey is tailored to your pace and devotion — never rushed, always reverent.' },
    { icon: BedDouble, title: 'Stay Near the Rahu Temple', desc: 'Comfortable and affordable rooms are available just a short walk from the Thirunageswaram Rahu Temple, making it convenient for devotees to rest before or after their pilgrimage and complete the entire Navagraha circuit without unnecessary travel.' },
    { icon: ShieldCheck, title: 'Safe & Reliable', desc: 'Experienced drivers, well-maintained vehicles, and round-the-clock support throughout your journey.' },
    { icon: Clock3, title: 'Thoughtful Timing', desc: 'We plan around temple hours and crowd patterns so your darshan is peaceful and unhurried.' },
    { icon: Leaf, title: 'Responsible Travel', desc: 'We honour local communities and sacred spaces, leaving each temple as we found it.' },
  ],
  ta: [
    { icon: MapPinned, title: 'ராகு ஸ்தலத்தில் யாத்திரையைத் தொடங்குங்கள்', desc: 'சிவம் டிராவல்ஸ் புகழ்பெற்ற ராகு கோயிலின் தலமான திருநாகேஸ்வரத்தில் அமைந்துள்ளது. இங்கிருந்து பயணத்தைத் தொடங்குவது எளிதான கோயில் அணுகல், அருகில் தங்கும் வசதி, உள்ளூர் வழிகாட்டி மற்றும் முழு நவகிரஹ யாத்திரையையும் வசதியாக முடிக்க உதவும் சிறப்பான பயணத் திட்டம் ஆகியவற்றைத் தருகிறது.' },
    { icon: HeartHandshake, title: 'தனிப்பட்ட கவனிப்பு', desc: 'ஒவ்வொரு பயணமும் உங்கள் வேகத்திற்கும் பக்திக்கும் ஏற்ப திட்டமிடப்படுகிறது — அவசரம் இல்லை, எப்போதும் பக்தியுடன்.' },
    { icon: BedDouble, title: 'ராகு கோயில் அருகே தங்கல்', desc: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே நடைபயண தூரத்தில் வசதியான மற்றும் மலிவான அறைகள் உள்ளன, இது பக்தர்கள் யாத்திரைக்கு முன்பு அல்லது பின்பு ஓய்வெடுக்கவும் தேவையில்லாமல் முழு நவகிரஹ சுற்றையும் முடிக்கவும் வசதியானது.' },
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
