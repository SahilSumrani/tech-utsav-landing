export const WHATSAPP_COMMUNITY_URL = "";
// Official verified WhatsApp community link (replace with live link):
export const OFFICIAL_WHATSAPP_COMMUNITY_URL =
  WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/invite-placeholder";

export const COMMUNITY_MEMBER_COUNT = 1000;

export interface EventListing {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  category: "Hackathon" | "Meetup" | "Workshop" | "Salon";
  registrationStatus: "open" | "coming-soon" | "closed";
  isFeatured?: boolean;
  description?: string;
  href?: string;
  coverUrl?: string;
  badge?: "Luma" | "Unstop" | "Devfolio" | "TechUtsav" | "HackerEarth" | "External";
  chapterName?: string;
}

export const EVENT_LISTINGS: EventListing[] = [
  {
    id: "delhi-open-systems",
    title: "Delhi NCR Open Systems Salon: Distributed DBs & Local Inference",
    date: "Saturday, Nov 14, 2026",
    time: "2:00 PM – 6:30 PM IST",
    venue: "Innov8 Hub, Connaught Place",
    city: "New Delhi",
    category: "Salon",
    registrationStatus: "open",
    isFeatured: true,
    coverUrl: "/images/gallery/gallery-1.jpg",
    badge: "Luma",
    chapterName: "Delhi NCR",
    description:
      "A deep-dive technical symposium on running high-throughput open database clusters and optimizing quantized LLM inference for low-latency Indian workloads.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
  {
    id: "bengaluru-build-sprint",
    title: "Bengaluru Saturday Build Sprint: 0 to 1 Prototype Jam",
    date: "Saturday, Nov 21, 2026",
    time: "10:30 AM – 5:00 PM IST",
    venue: "Indiranagar Community Space",
    city: "Bengaluru",
    category: "Hackathon",
    registrationStatus: "open",
    coverUrl: "/images/gallery/gallery-2.jpg",
    badge: "Devfolio",
    chapterName: "Bengaluru",
    description: "Bring an unfinished repository or a fresh idea. Ship working code alongside 40+ local builders.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
  {
    id: "pune-oss-workshop",
    title: "Pune Open Source Maintenance & Linux Kernel Fundamentals",
    date: "Sunday, Nov 29, 2026",
    time: "3:00 PM – 7:00 PM IST",
    venue: "COEP Tech Hub",
    city: "Pune",
    category: "Workshop",
    registrationStatus: "coming-soon",
    coverUrl: "/images/community/pair-coding.jpg",
    badge: "Unstop",
    chapterName: "Pune",
    description: "Hands-on guide to submitting your first PR to upstream C/Rust systems and understanding kernel subsystems.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
  {
    id: "hyderabad-rooftop-meetup",
    title: "Hyderabad Founders & Builders Chai Circle",
    date: "Friday, Dec 04, 2026",
    time: "6:30 PM – 9:00 PM IST",
    venue: "T-Hub Terrace",
    city: "Hyderabad",
    category: "Meetup",
    registrationStatus: "coming-soon",
    coverUrl: "/images/community/rooftop-meetup.jpg",
    badge: "TechUtsav",
    chapterName: "Hyderabad",
    description: "Informal, candid evening discussions on tech debt, early PMF, and building for Bharat.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
  {
    id: "mumbai-bharat-ui",
    title: "Mumbai Bharat UI/UX & Indic Typography Salon",
    date: "Saturday, Dec 12, 2026",
    time: "3:00 PM – 7:30 PM IST",
    venue: "WeWork BKC",
    city: "Mumbai",
    category: "Salon",
    registrationStatus: "open",
    coverUrl: "/images/gallery/gallery-4.jpg",
    badge: "Luma",
    chapterName: "Mumbai",
    description: "Designing bilingual user interfaces, typography hierarchy, and ergonomics for Indian languages.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
  {
    id: "jaipur-iot-sprint",
    title: "Jaipur Hardware & ESP32 Edge IoT Buildathon",
    date: "Saturday, Dec 19, 2026",
    time: "10:00 AM – 6:00 PM IST",
    venue: "MNIT Incubation Cell",
    city: "Jaipur",
    category: "Hackathon",
    registrationStatus: "open",
    coverUrl: "/images/gallery/gallery-5.jpg",
    badge: "Devfolio",
    chapterName: "Jaipur",
    description: "Build open-hardware sensors and firmware pipelines with microcontrollers and MQTT brokers.",
    href: "https://chat.whatsapp.com/invite-placeholder",
  },
];

export interface CommunityProject {
  id: string;
  title: string;
  tagline: string;
  creator: string;
  creatorCity: string;
  problemStatement: string;
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
}

export const COMMUNITY_PROJECTS: CommunityProject[] = [
  {
    id: "bhasha-dev",
    title: "BhashaDev",
    tagline: "Sub-millisecond Indic Tokenizer & POS Tagger for Developer Terminal",
    creator: "Aditya & Tanvi",
    creatorCity: "Pune",
    problemStatement:
      "Existing tokenizer benchmarks neglect Indian morphology and compound Sandhi rules, resulting in high latency and token cost for Indic applications.",
    techStack: ["Rust", "Python", "WebAssembly", "C++"],
    image: "/images/projects/indic-nlp.jpg",
    githubUrl: "https://github.com",
    demoUrl: "https://github.com",
    isFeatured: true,
  },
  {
    id: "open-upi-recon",
    title: "ReconFlow",
    tagline: "Auditable Settlement & Webhook Reconciliation Engine for Indian Fintechs",
    creator: "Karthik R.",
    creatorCity: "Bengaluru",
    problemStatement:
      "Small developer tools frequently suffer from lost webhook callbacks and mismatched bank settlement logs without expensive enterprise gateways.",
    techStack: ["Go", "PostgreSQL", "Kafka", "Docker"],
    image: "/images/community/pair-coding.jpg",
    githubUrl: "https://github.com",
  },
  {
    id: "campus-bus-pulse",
    title: "CampusPulse",
    tagline: "Crowdsourced Open-Hardware Transit Tracker for State Universities",
    creator: "Shreya & Team",
    creatorCity: "Jaipur",
    problemStatement:
      "Tier-2 university campus routes lack live GPS feeds, leaving students stranded during exam commutes.",
    techStack: ["ESP32", "MQTT", "Next.js", "Leaflet"],
    image: "/images/community/rooftop-meetup.jpg",
    githubUrl: "https://github.com",
  },
];

export interface OpportunityItem {
  id: string;
  title: string;
  organization: string;
  category: "Internship" | "Hackathon" | "Fellowship" | "Grant";
  eligibility: string;
  deadline: string;
  location: string;
  href: string;
  isVerified: boolean;
}

export const OPPORTUNITY_ITEMS: OpportunityItem[] = [
  {
    id: "opp-1",
    title: "Systems Engineering Research Internship (Winter 2026)",
    organization: "Indic Computing Labs",
    category: "Internship",
    eligibility: "Students & self-taught developers with C++/Rust foundations",
    deadline: "Nov 30, 2026",
    location: "Bengaluru / Hybrid",
    href: "https://chat.whatsapp.com/invite-placeholder",
    isVerified: true,
  },
  {
    id: "opp-2",
    title: "Bharat AI Hackathon & Prototype Grant",
    organization: "Open Tech Foundation India",
    category: "Hackathon",
    eligibility: "Open to teams of 2–4 builders across India",
    deadline: "Dec 15, 2026",
    location: "Online + Delhi Finale",
    href: "https://chat.whatsapp.com/invite-placeholder",
    isVerified: true,
  },
  {
    id: "opp-3",
    title: "Open Source India Fellowship 2027",
    organization: "FOSS Bharat Collective",
    category: "Fellowship",
    eligibility: "Active contributors to public open-source repos",
    deadline: "Jan 10, 2027",
    location: "Remote (Pan-India)",
    href: "https://chat.whatsapp.com/invite-placeholder",
    isVerified: true,
  },
  {
    id: "opp-4",
    title: "Grassroots Tech Educator Micro-Grants",
    organization: "TechUtsav Seed Fund",
    category: "Grant",
    eligibility: "Community organizers hosting free local workshops",
    deadline: "Rolling Monthly",
    location: "Tier 2 & 3 Cities",
    href: "https://chat.whatsapp.com/invite-placeholder",
    isVerified: true,
  },
];

export interface CityHub {
  id: string;
  name: string;
  state: string;
  coordinates: string;
  focusArea: string;
  activeStatus: "Active Hub" | "Growing Circle" | "Forming Chapter";
  highlights: string;
}

export const CITY_HUBS: CityHub[] = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    coordinates: "12.9716° N, 77.5946° E",
    focusArea: "Distributed Systems, AI Infrastructure & 0-to-1 Startups",
    activeStatus: "Active Hub",
    highlights: "Weekly Saturday build salons, open-source sprints, and peer-to-peer code reviews.",
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    coordinates: "28.6139° N, 77.2090° E",
    focusArea: "Campus Evangelism, Public Policy & Web Architecture",
    activeStatus: "Active Hub",
    highlights: "Bi-weekly community symposiums, college hackathons, and open dev meetups.",
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    coordinates: "18.5204° N, 73.8567° E",
    focusArea: "Linux Kernel, Systems Tooling & Developer Tooling",
    activeStatus: "Active Hub",
    highlights: "Focused technical deep-dives and university open-source mentoring sessions.",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    coordinates: "17.3850° N, 78.4867° E",
    focusArea: "Cloud Native, Enterprise Scalability & Backend Engineering",
    activeStatus: "Active Hub",
    highlights: "Rooftop builder circles, architecture teardowns, and networking evenings.",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    coordinates: "19.0760° N, 72.8777° E",
    focusArea: "Fintech Systems, Security & Real-Time Trading Infrastructure",
    activeStatus: "Growing Circle",
    highlights: "Fintech protocol jams and developer coffee meetups in BKC and Lower Parel.",
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    coordinates: "26.9124° N, 75.7873° E",
    focusArea: "Hardware IoT, Student Communities & Web Frameworks",
    activeStatus: "Growing Circle",
    highlights: "Campus engineering chapters bringing tier-2 developers into open source.",
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    coordinates: "13.0827° N, 80.2707° E",
    focusArea: "SaaS Architecture, Compiler Tech & Deep Tech R&D",
    activeStatus: "Growing Circle",
    highlights: "Focus on clean engineering fundamentals and functional programming circles.",
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    coordinates: "22.5726° N, 88.3639° E",
    focusArea: "Algorithmic Computing, Math & Open Science",
    activeStatus: "Forming Chapter",
    highlights: "Academic-to-industry transition forums and student open-source clubs.",
  },
];

export interface CommunityStory {
  id: string;
  name: string;
  role: string;
  city: string;
  journey: string;
  avatar: string;
  keyHighlight: string;
}

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-1",
    name: "Aman Verma",
    role: "Open Source Contributor & Student",
    city: "Bhopal → Bengaluru",
    journey:
      "Coming from a tier-3 college with no local tech events, TechUtsav's online build sessions gave me code reviews from senior engineers. Within 6 months, my first pull request was merged into an upstream database repository.",
    avatar: "/images/community/pair-coding.jpg",
    keyHighlight: "First open-source contribution to upstream Rust DB",
  },
  {
    id: "story-2",
    name: "Pooja Hegde",
    role: "Full-Stack Engineer & Meetup Lead",
    city: "Pune",
    journey:
      "We started hosting weekend architecture salons at local cafes. What began with 5 people grew into a consistent group of 40+ developers dissecting distributed system papers and building in public.",
    avatar: "/images/community/meetup-main.jpg",
    keyHighlight: "Organized 8 free local developer salons in Pune",
  },
  {
    id: "story-3",
    name: "Raghav Menon",
    role: "Founder, Indic LLM Tooling",
    city: "Kochi → Delhi",
    journey:
      "Met my current technical co-founder during a TechUtsav hackathon. We built the initial benchmark prototype overnight over cutting chai, which later turned into our first funded venture.",
    avatar: "/images/community/rooftop-meetup.jpg",
    keyHighlight: "Found co-founder & launched open Indic tokenizer",
  },
];

export const SOCIAL_PROFILE_LINKS: { label: string; href: string }[] = [];

export interface WhatWeDoItem {
  id: string;
  type: "hackathon" | "workshop" | "community" | "project";
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export const WHAT_WE_DO_ITEMS: WhatWeDoItem[] = [
  {
    id: "hackathons",
    type: "hackathon",
    badge: "</>",
    badgeBg: "bg-[#84cc16]",
    badgeText: "text-black",
    title: "HACKATHONS",
    description: "Compete in high-energy coding battles to build solutions for real-world problems.",
    stat: "12+",
    statLabel: "HOSTED",
  },
  {
    id: "workshops",
    type: "workshop",
    badge: "megaphone",
    badgeBg: "bg-[#00308F]",
    badgeText: "text-white",
    title: "WORKSHOPS",
    description: "Hands-on learning experiences on latest tech stacks led by industry experts.",
    stat: "50+",
    statLabel: "SESSIONS",
  },
  {
    id: "community",
    type: "community",
    badge: "briefcase",
    badgeBg: "bg-[#eab308]",
    badgeText: "text-black",
    title: "COMMUNITY",
    description: "A growing network of developers across India collaborating on open source.",
    stat: "5k+",
    statLabel: "MEMBERS",
  },
  {
    id: "projects",
    type: "project",
    badge: "code",
    badgeBg: "bg-[#ef4444]",
    badgeText: "text-white",
    title: "PROJECTS",
    description: "Building production-ready applications that make a difference.",
    stat: "100+",
    statLabel: "SHIPPED",
  },
];

export interface NerdsSuccessStory {
  id: string;
  name: string;
  role: string;
  image: string;
  paragraphs: Array<{
    before?: string;
    bold?: string;
    middle?: string;
    bold2?: string;
    after?: string;
  }>;
}

export const NERDS_SUCCESS_STORIES: NerdsSuccessStory[] = [
  {
    id: "amit-verma",
    name: "Amit Verma",
    role: "Android Developer",
    image: "/images/avatars/amit.jpg",
    paragraphs: [
      {
        bold: "TechUtsav India introduced me to open-source tech communities.",
        after:
          " Their guidance helped me advance my career, and I'm grateful for the opportunities TechUtsav provided. I'm now excited to share my own experiences as a speaker!",
      },
    ],
  },
  {
    id: "karan-mehta",
    name: "Karan Mehta",
    role: "Project Coordinator",
    image: "/images/community/pair-coding.jpg",
    paragraphs: [
      {
        before:
          "Being part of TechUtsav India was transformative for me. It was more than a community; it was where I found my voice and my people. TechUtsav was my safe space to share ideas and learn without fear. ",
        bold: "I'll never forget speaking at the hackathon event.",
        after:
          " I was terrified, but they believed in me and gave me the courage to step into the spotlight. ",
        bold2: "The connections I made built a reliable support system.",
        middle:
          " The conversations, brainstorming, and sense of belonging helped me grow.",
      },
    ],
  },
  {
    id: "rohan-sharma",
    name: "Rohan Sharma",
    role: "Full Stack Developer",
    image: "/images/community/rooftop-meetup.jpg",
    paragraphs: [
      {
        before:
          "In college, I faced many distractions that could have led me astray. In my second year, joining the TechUtsav community was a turning point.",
      },
    ],
  },
  {
    id: "simran-kaur",
    name: "Simran Kaur",
    role: "Product Designer",
    image: "/images/avatars/priya.jpg",
    paragraphs: [
      {
        before:
          "TechUtsav is my happy place. When I joined this community 2 years ago, I had no experience in proper communication. The team, especially the organizers, were so helpful and always encouraged me. ",
        bold: "Thanks to TechUtsav, I've improved my analytical thinking and task management skills and landed great opportunities.",
      },
    ],
  },
  {
    id: "priya-singh",
    name: "Priya Singh",
    role: "UX Designer",
    image: "/images/avatars/priya.jpg",
    paragraphs: [
      {
        before:
          "I had the privilege of meeting amazing designers at TechUtsav events. I learned the fundamentals of design from their workshops. As distinguished speakers at the events, they left an indelible mark on me. ",
        bold: "I am grateful to TechUtsav for providing me with this opportunity to connect with great designers,",
        after:
          " which has accelerated my career growth and development.",
      },
    ],
  },
  {
    id: "neha-patel",
    name: "Neha Patel",
    role: "Associate Project Manager",
    image: "/images/community/meetup-main.jpg",
    paragraphs: [
      {
        before:
          "Their guidance helped me advance my career, and I'm grateful for the opportunities TechUtsav provided. ",
        bold: "The sessions and hands-on workshops inspired me to contribute to open source,",
        after: " and collaborations sparked new friendships.",
      },
    ],
  },
];

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    src: "/images/gallery/gallery-1.jpg",
    alt: "Young Indian developers at build sprint table",
    caption: "Hackathon Sprint '26 — Late-night prototype brainstorming",
    tag: "Hackathon",
  },
  {
    id: "gal-2",
    src: "/images/gallery/gallery-2.jpg",
    alt: "Speaker delivering keynote on stage",
    caption: "Keynote Symposium — Microservices & local inference architectures",
    tag: "Conference",
  },
  {
    id: "gal-3",
    src: "/images/gallery/gallery-3.jpg",
    alt: "Hands-on engineering workshop with mentor",
    caption: "Hands-on Workshop — Deep Learning & Systems Engineering",
    tag: "Workshop",
  },
  {
    id: "gal-4",
    src: "/images/gallery/gallery-4.jpg",
    alt: "Winning team celebrating trophy on stage",
    caption: "HackFest Grand Finale — Student teams celebrating victory",
    tag: "Finale",
  },
  {
    id: "gal-5",
    src: "/images/gallery/gallery-5.jpg",
    alt: "Community meetup circle",
    caption: "Open Architecture Salon — 50+ engineers dissecting distributed protocols",
    tag: "Meetup",
  },
  {
    id: "gal-6",
    src: "/images/gallery/gallery-6.jpg",
    alt: "Rooftop evening builder chat",
    caption: "Rooftop Chai & Code — Candid founder teardowns at sunset",
    tag: "Chai & Code",
  },
  {
    id: "gal-7",
    src: "/images/gallery/gallery-7.jpg",
    alt: "Pair coding session",
    caption: "Pair Programming Lab — Mentors debugging student PRs line by line",
    tag: "Open Source",
  },
];

export const COMMUNITY_COMMUNICATION_CHANNELS = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    label: "Join our WhatsApp Channel",
    href: OFFICIAL_WHATSAPP_COMMUNITY_URL,
    color: "from-emerald-500 to-green-600",
    hoverBg: "hover:border-emerald-500 group-hover:text-emerald-600",
  },
  {
    id: "discord",
    name: "Discord",
    label: "Join us on Discord",
    href: "https://discord.gg/techutsav",
    color: "from-indigo-500 to-purple-600",
    hoverBg: "hover:border-indigo-500 group-hover:text-indigo-600",
  },
  {
    id: "instagram",
    name: "Instagram",
    label: "Follow us on Instagram",
    href: "https://instagram.com/techutsavindia",
    color: "from-pink-500 to-rose-600",
    hoverBg: "hover:border-pink-500 group-hover:text-pink-600",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    label: "Follow us on LinkedIn",
    href: "https://linkedin.com/company/techutsavindia",
    color: "from-blue-600 to-cyan-600",
    hoverBg: "hover:border-blue-500 group-hover:text-blue-600",
  },
  {
    id: "telegram",
    name: "Telegram",
    label: "Join us on Telegram",
    href: "https://t.me/techutsavindia",
    color: "from-sky-400 to-blue-500",
    hoverBg: "hover:border-sky-500 group-hover:text-sky-500",
  },
];