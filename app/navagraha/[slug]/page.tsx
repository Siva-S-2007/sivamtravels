import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type GuideSlug = 'order-to-visit' | 'doshas-remedies' | 'history-beliefs';

type GuidePage = {
  title: string;
  description: string;
  heroImage: string;
  eyebrow: string;
};

type DoshaDetail = {
  temple: string;
  significance: string;
  doshas: string[];
  remedy: string;
};

type HistorySection = {
  paragraphs: string[];
  items?: { title: string; text: string }[];
};

const guidePages: Record<GuideSlug, GuidePage> = {
  'order-to-visit': {
    title: 'Navagraha Temple Order to Visit from Kumbakonam',
    description:
      'Plan your Navagraha Temple Tour with the correct temple order, timings, travel distances and practical pilgrimage tips.',
    heroImage: '/gallery/image.png',
    eyebrow: 'Temple Guide',
  },
  'doshas-remedies': {
    title: 'Navagraha Doshas and Remedies',
    description:
      'Understand the astrological significance of each Navagraha, common planetary doshas and traditional remedies followed by devotees.',
    heroImage: '/navagrahadoshasandpariharam.png',
    eyebrow: 'Spiritual Guide',
  },
  'history-beliefs': {
    title: 'Navagraha Temple History and Beliefs',
    description:
      'Explore the rich history, sacred legends, architecture and spiritual significance of the Navagraha Temples in Tamil Nadu.',
    heroImage: '/gallery/suryangallery.jpg',
    eyebrow: 'History',
  },
};

const doshaIntroParagraphs = [
  "According to Vedic Astrology (Jyotisha), the Navagrahas (nine celestial planets) continuously influence different aspects of human life, including health, career, relationships, wealth, education, and spiritual growth. When a planet is unfavorably placed in one's birth chart, it may create Navagraha Doshas, leading to various life challenges.",
  'This guide explains the astrological significance of each Navagraha, the common planetary doshas, and the traditional Navagraha remedies (Pariharams) performed at each temple.',
];

const doshaDetails: Record<string, DoshaDetail> = {
  Surya: {
    temple: 'Suriyanar Kovil (Surya)',
    significance:
      'The Sun (Surya) represents the soul, leadership, father, authority, government careers, confidence, and physical vitality. A weak Sun may result in low self-confidence, health concerns, and career obstacles.',
    doshas: ['Low confidence', 'Career obstacles', 'Government-related issues', 'Health problems (Heart & Eyes)'],
    remedy:
      'Offer red lotus flowers, wheat, and jaggery to Lord Surya. Lighting a pure ghee lamp on Sundays is believed to improve confidence, leadership qualities, and career growth.',
  },
  Chandra: {
    temple: 'Thingalur (Chandra)',
    significance: 'The Moon (Chandra) governs emotions, mental peace, mother, memory, and emotional stability.',
    doshas: ['Anxiety', 'Depression', 'Emotional instability', 'Restless mind'],
    remedy:
      'Offer white rice, white clothing, and white oleander flowers on Mondays to seek mental peace and emotional balance.',
  },
  Angaraka: {
    temple: 'Vaitheeswaran Kovil (Angaraka / Mars)',
    significance: 'Mars represents courage, property, strength, blood circulation, and determination.',
    doshas: ['Manglik Dosha (Kuja Dosha)', 'Marriage delays', 'Anger', 'Debt', 'Accidents'],
    remedy:
      'Offer red cloth and Toor Dal to Lord Angaraka. Devotees also receive the famous Thirusaandu Urundai, traditionally believed to support healing and good health.',
  },
  Budha: {
    temple: 'Thiruvenkadu (Budha)',
    significance: 'Mercury governs intelligence, education, communication, speech, memory, and business.',
    doshas: ['Poor concentration', 'Speech difficulties', 'Business losses', 'Learning difficulties'],
    remedy: 'Offer green gram (Moong Dal) and green clothing on Wednesdays for wisdom, academic success, and business growth.',
  },
  Guru: {
    temple: 'Alangudi (Guru)',
    significance: 'Jupiter represents wisdom, wealth, higher education, marriage, children, and spiritual knowledge.',
    doshas: ['Financial obstacles', 'Delayed marriage', 'Educational setbacks', 'Child-related concerns'],
    remedy:
      'Offer yellow cloth, Bengal gram (Chana Dal), and yellow jasmine flowers to Lord Dakshinamurthy on Thursdays.',
  },
  Sukra: {
    temple: 'Kanjanur (Sukra)',
    significance: 'Venus governs love, marriage, beauty, luxury, relationships, and prosperity.',
    doshas: ['Relationship problems', 'Lack of prosperity', 'Marital issues', 'Financial instability'],
    remedy: 'Offer white beans (Mochai), white silk cloth, and white lotus flowers on Fridays for marital harmony and prosperity.',
  },
  Sani: {
    temple: 'Thirunallar (Saneeswaran)',
    significance: 'Saturn governs karma, discipline, justice, patience, hard work, and life lessons.',
    doshas: ['Sade Sati', 'Career setbacks', 'Financial loss', 'Emotional struggles'],
    remedy:
      "Devotees bathe in the sacred Nala Theertham, offer sesame oil, sesame seeds, and black cloth on Saturdays to seek relief from Saturn's adverse effects.",
  },
  Rahu: {
    temple: 'Thirunageswaram (Rahu)',
    significance: 'Rahu influences foreign opportunities, unexpected events, ambition, illusion, and material desires.',
    doshas: ['Kala Sarpa Dosha', 'Delayed foreign travel', 'Unexplained health concerns', 'Unexpected obstacles'],
    remedy: 'Perform Milk Abhishekam during Rahu Kaalam, a traditional ritual associated with this temple.',
  },
  Ketu: {
    temple: 'Keezhaperumpallam (Ketu)',
    significance: 'Ketu represents spirituality, liberation (Moksha), intuition, detachment, and inner wisdom.',
    doshas: ['Confusion', 'Fear', 'Lack of direction', 'Nervous system concerns'],
    remedy: 'Offer multi-colored cloth and Horse Gram (Kollu) on Tuesdays or Sundays to seek spiritual clarity and inner peace.',
  },
};

const historySections = [
  'History of the Navagraha Temples',
  'The Spiritual Significance of the Navagraha Temples',
  'Dravidian Architecture of the Navagraha Temples',
  'Famous Legends Behind the Navagraha Temples',
  'The Enduring Beliefs of the Navagraha Temples',
] as const;

const historyIntroParagraphs = [
  "The Navagraha Temples of Tamil Nadu are among India's most significant spiritual and architectural landmarks. While millions of devotees visit these sacred shrines seeking divine blessings, each temple also preserves centuries of history, remarkable Dravidian architecture, and fascinating legends rooted in Hindu tradition.",
  'Explore the history, beliefs, architecture, and spiritual significance of the Navagraha temples and discover why they continue to inspire pilgrims from around the world.',
];

const historyContent: Record<(typeof historySections)[number], HistorySection> = {
  'History of the Navagraha Temples': {
    paragraphs: [
      'The Navagraha temples were primarily built and expanded during the reign of the Chola Dynasty between the 7th and 12th centuries. Renowned for their architectural excellence and devotion to Lord Shiva, the Chola kings transformed these temples into enduring centers of worship, culture, and heritage.',
      'Today, these temples remain living monuments that beautifully preserve the traditions of ancient Tamil civilization.',
    ],
  },
  'The Spiritual Significance of the Navagraha Temples': {
    paragraphs: [
      'A common misconception is that all nine temples were built exclusively to worship the Navagrahas. In reality, with the exception of Suriyanar Kovil, the remaining temples are dedicated to Lord Shiva, with separate shrines for each planetary deity.',
      'According to the Agama Shastras, the Navagrahas are regarded as attendants of the Supreme Lord. Their shrines are carefully positioned according to sacred architectural principles, ensuring harmony between the planetary energies.',
    ],
  },
  'Dravidian Architecture of the Navagraha Temples': {
    paragraphs: ['The Navagraha temples showcase some of the finest examples of Dravidian temple architecture in Tamil Nadu.'],
    items: [
      {
        title: 'Rajagopurams (Temple Towers)',
        text: 'The towering Rajagopurams welcome devotees with intricate sculptures depicting stories from Hindu epics and Puranas.',
      },
      {
        title: 'Granite Mandapams',
        text: 'Beautiful pillared halls carved from granite feature exquisite sculptures of dancers, musicians, deities, and mythical creatures, reflecting the remarkable craftsmanship of the Chola period.',
      },
      {
        title: 'Sacred Temple Tanks (Theerthams)',
        text: 'Almost every Navagraha temple has a sacred temple tank, traditionally used for ritual purification and historically designed to conserve rainwater while supporting the surrounding ecosystem.',
      },
    ],
  },
  'Famous Legends Behind the Navagraha Temples': {
    paragraphs: ['Every Navagraha temple is associated with unique legends that continue to shape the faith and traditions of devotees.'],
    items: [
      {
        title: 'The Legend of Suriyanar Kovil',
        text: 'According to tradition, the Navagrahas were once cursed by Lord Brahma. Seeking relief, they performed intense penance to Lord Shiva near present-day Kumbakonam. Pleased with their devotion, Lord Shiva blessed them and granted them the ability to bestow blessings upon devotees who worship at this sacred temple.',
      },
      {
        title: 'The Legend of Thirunallar',
        text: "The famous Thirunallar Saneeswaran Temple is closely connected with King Nala. After enduring immense hardships attributed to Saturn's influence, King Nala prayed at Thirunallar and bathed in the sacred Nala Theertham. According to tradition, his suffering ended, and he regained prosperity and peace.",
      },
      {
        title: 'The Legend of Vaitheeswaran Kovil',
        text: 'The history of Vaitheeswaran Kovil is linked to the Ramayana. Tradition holds that Lord Rama performed the final rites of the brave eagle king Jatayu at this sacred site after his battle with Ravana, making the temple deeply significant to devotees.',
      },
    ],
  },
  'The Enduring Beliefs of the Navagraha Temples': {
    paragraphs: [
      'For generations, devotees have visited the Navagraha temples seeking blessings for health, prosperity, education, marriage, career, and spiritual well-being. These temples continue to symbolize faith, devotion, and the timeless connection between Hindu spirituality, temple traditions, and Tamil heritage.',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(guidePages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = guidePages[params.slug as GuideSlug];

  if (!page) {
    return { title: 'Navagraha Guide | Sivam Travels' };
  }

  return {
    title: `${page.title} | Sivam Travels`,
    description: page.description,
  };
}

export default function NavagrahaGuidePage({ params }: { params: { slug: string } }) {
  const slug = params.slug as GuideSlug;
  const page = guidePages[slug];

  if (!page) notFound();

  return (
    <>
      <Navbar />
      <div className="bg-ivory">
        <GuideHero page={page} />
        <main>
          <article className="py-16 lg:py-24">
            {slug === 'order-to-visit' ? <OrderToVisitLayout /> : null}
            {slug === 'doshas-remedies' ? <DoshasLayout /> : null}
            {slug === 'history-beliefs' ? <HistoryLayout /> : null}
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}

function GuideHero({ page }: { page: GuidePage }) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden lg:min-h-[520px]">
      <div className="absolute inset-0">
        <img src={page.heroImage} alt={page.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-maroon/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10 lg:pb-16">
        <div className="mb-4 mt-16 md:mt-0">
          <Link
            href="/#navagraha"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-body text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guide
          </Link>
        </div>

        <nav aria-label="Breadcrumb" className="mb-5">
          <ol
            className="flex flex-wrap items-center gap-2 text-sm text-white/75"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="transition-colors hover:text-gold">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gold/70">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/#navagraha" itemProp="item" className="transition-colors hover:text-gold">
                <span itemProp="name">Navagraha Information Guide</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-gold/70">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-gold">
              <span itemProp="name">{page.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <span className="inline-flex items-center gap-2 rounded-full bg-gold/90 px-5 py-2 font-body text-base tracking-wide text-maroon">
          <Sparkles className="h-4 w-4" />
          {page.eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-medium text-white sm:text-6xl lg:text-[4.25rem]">{page.title}</h1>
        <p className="mt-4 max-w-2xl font-body text-xl leading-[1.8] text-white/80 lg:text-2xl">{page.description}</p>
      </div>
    </section>
  );
}

function OrderToVisitLayout() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">Introduction</h2>
        <p className="mb-8">
          Planning your Navagraha Temple Tour from Kumbakonam requires the right route, proper timing, and local guidance. 
          The nine Navagraha temples are spread across Kumbakonam, Mayiladuthurai, and Karaikal, making route planning essential for a smooth pilgrimage.
        </p>
        <p className="mb-12">
          This guide covers the Navagraha Temple Order to Visit, temple timings, travel distances, and the best itinerary to help devotees complete their spiritual journey comfortably.
        </p>



        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">Best Place to Stay for Your Navagraha Temple Tour</h2>
        <p className="mb-8">
          Kumbakonam is the ideal starting point and the best base for any Navagraha Tour Package. Located centrally within the temple circuit, it offers convenient access to all nine temples along with comfortable hotels, great vegetarian restaurants, and experienced local travel operators.
        </p>
        <ul className="list-disc pl-8 mb-12 space-y-4">
          <li><strong>Nearest Airport:</strong> Tiruchirappalli (Trichy - TRZ) - 90 km (Approx. 2.5 Hours)</li>
          <li><strong>Nearest Railway Station:</strong> Kumbakonam Railway Station (KMU). Well connected to Chennai, Bengaluru, Madurai, Trichy and other major cities.</li>
        </ul>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">Navagraha Temple Timings</h2>
        <p className="mb-8">
          Before finalizing your route, it is vital to note the standard temple opening hours. Unlike regular tourist spots, South Indian temples strictly observe resting times for the deities.
        </p>
        <ul className="list-disc pl-8 mb-8 space-y-4">
          <li><strong>Morning Darshan:</strong> 6:00 AM - 12:30 PM</li>
          <li><strong>Evening Darshan:</strong> 4:00 PM - 8:30 PM</li>
        </ul>
        <p className="mb-12 italic text-maroon/80">
          Travel Tip: Avoid planning temple visits between 12:30 PM and 4:00 PM, as almost all temples will remain closed during this period. Use this time to have lunch and travel between towns.
        </p>



        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">Recommended Navagraha Temple Order to Visit (2 Days)</h2>
        <p className="mb-10">
          Trying to cover all nine temples in a single day is exhausting. This 2-day itinerary provides a comfortable and efficient route from Kumbakonam, reducing your driving time while giving you enough peace to perform your darshan and rituals.
        </p>

        <h3 className="font-heading text-3xl text-maroon mb-6">Day 1 - Kumbakonam & Mayiladuthurai Route</h3>
        <p className="mb-6">Cover the eastern and northern cluster of temples first. The recommended flow is:</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          <li>Thingalur - Chandra Temple (Start early morning)</li>
          <li>Alangudi - Guru Temple</li>
          <li>Suriyanar Kovil - Surya Temple</li>
          <li>Kanjanur - Sukra Temple</li>
          <li><em>Lunch Break</em></li>
          <li>Thirunageswaram - Rahu Temple (Time this around Rahu Kaalam for the milk abhishekam)</li>
        </ul>

        <h3 className="font-heading text-3xl text-maroon mt-12 mb-6">Day 2 - Karaikal & Sirkazhi Route</h3>
        <p className="mb-6">On your second day, complete the remaining temples situated toward the coastal and southern belts:</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          <li>Thirunallar - Shani Temple (Expect heavy crowds, so arrive as early as possible)</li>
          <li>Keezhaperumpallam - Ketu Temple</li>
          <li>Thiruvenkadu - Budha Temple</li>
          <li>Vaitheeswaran Kovil - Angaraka Temple</li>
        </ul>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">Distance of Navagraha Temples from Kumbakonam</h2>
        <p className="mb-8">Use this quick distance reference to understand your travel logistics:</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          <li><strong>Thirunageswaram (Rahu):</strong> 7 km</li>
          <li><strong>Suriyanar Kovil (Surya):</strong> 15 km</li>
          <li><strong>Alangudi (Guru):</strong> 17 km</li>
          <li><strong>Kanjanur (Sukra):</strong> 18 km</li>
          <li><strong>Thingalur (Chandra):</strong> 33 km</li>
          <li><strong>Vaitheeswaran Kovil (Angaraka):</strong> 50 km</li>
          <li><strong>Thirunallar (Shani):</strong> 55 km</li>
          <li><strong>Thiruvenkadu (Budha):</strong> 60 km</li>
          <li><strong>Keezhaperumpallam (Ketu):</strong> 65 km</li>
        </ul>



        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">Essential Travel Tips</h2>
        <p className="mb-8">Follow these practical tips to make your pilgrimage smoother and more comfortable:</p>
        <ul className="list-disc pl-8 space-y-4">
          <li>Start your journey early in the morning, around 6:00 AM, to beat the crowds and the heat.</li>
          <li>Wear comfortable traditional attire. Men should wear dhotis or proper pants (no shorts), and women should wear sarees, half-sarees, or salwar kameez.</li>
          <li>Carry plenty of drinking water and light refreshments for the long drives between villages.</li>
          <li>Allocate enough time for darshan at each temple—do not rush the experience.</li>
          <li>Booking a private AC vehicle with a local driver is highly recommended as rural routes can be confusing to navigate alone.</li>
        </ul>
      </div>

      <div className="mt-24">
        <BottomCta />
      </div>
    </div>
  );
}

function DoshasLayout() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">Introduction</h2>
        {doshaIntroParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-8">{paragraph}</p>
        ))}



        <div className="mt-16 space-y-20">
          {Object.entries(doshaDetails).map(([planet, detail], index) => (
            <div key={planet} className="border-b border-gold/20 pb-16 last:border-0 last:pb-0">
              <h2 className="font-heading text-4xl text-maroon mb-8">{index + 1}. {detail.temple}</h2>
              
              <p className="mb-6">
                <strong className="text-maroon/90">Astrological Significance:</strong><br/>
                {detail.significance}
              </p>
              
              <p className="mb-6">
                <strong className="text-maroon/90">Common Doshas (Afflictions):</strong><br/>
                {detail.doshas.join(', ')}
              </p>
              
              <p className="mb-6 text-maroon">
                <strong>Traditional Remedy (Pariharam):</strong><br/>
                {detail.remedy}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <BottomCta />
      </div>
    </div>
  );
}

function HistoryLayout() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">Introduction</h2>
        {historyIntroParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-8">{paragraph}</p>
        ))}



        <div className="space-y-20 mt-16">
          {historySections.map((section, index) => {
            const content = historyContent[section];
            return (
              <div key={section}>
                <h2 className="font-heading text-4xl text-maroon mb-8">{section}</h2>
                
                {content.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-8">{paragraph}</p>
                ))}

                {content.items && (
                  <ul className="list-disc pl-8 space-y-6 mt-8">
                    {content.items.map((item) => (
                      <li key={item.title}>
                        <strong className="text-maroon/90">{item.title}:</strong> {item.text}
                      </li>
                    ))}
                  </ul>
                )}


              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-24">
        <BottomCta />
      </div>
    </div>
  );
}

function BottomCta() {
  return (
    <div className="rounded-[30px] border border-gold/20 bg-gradient-to-br from-maroon to-maroon/95 p-10 lg:p-14 shadow-luxe my-8">
      <p className="font-title text-base tracking-[0.3em] text-gold uppercase mb-5">Sivam Travels</p>
      <h2 className="font-heading text-4xl lg:text-5xl leading-tight text-white mb-6">
        Continue Your Navagraha Journey With a Thoughtfully Planned Pilgrimage
      </h2>
      <p className="font-body text-xl text-white/80 mb-10 max-w-3xl">
        Explore our curated Navagraha tour packages from Kumbakonam for a more comfortable, seamless, and spiritually focused travel experience.
      </p>
      <Link
        href="/#packages"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-5 font-body text-lg font-medium text-maroon transition-all hover:shadow-lg hover:scale-[1.02]"
      >
        Explore Packages
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}