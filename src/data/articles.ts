export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  pillar: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  content: { heading: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "starter-path-hygiene-stations",
    title: "Starter Path: Hygiene Stations for Schools",
    excerpt:
      "A six-step learning path to design, fund, and maintain handwashing stations for classrooms and school yards.",
    category: "Learning Kit",
    tags: ["schools", "handwashing", "curriculum"],
    pillar: "Learn Sanitation",
    date: "2026-02-02",
    readTime: "7 min",
    author: "Rina Marcell",
    featured: true,
    content: [
      {
        heading: "Map the learning journey",
        body:
          "Start with a class survey, a photo audit of existing facilities, and a short skills quiz. Use the results to group learners into teams responsible for water storage, soap logistics, and behavior design.",
      },
      {
        heading: "Design with student feedback",
        body:
          "Run two design sprints and ask students to score prototypes on ease of use, safety, and pride. The top design becomes the class standard while the second-best is adapted for visiting guests.",
      },
      {
        heading: "Keep the station alive",
        body:
          "Create a weekly rota, a simple inspection checklist, and a refill tracker. When students can report water and soap needs before shortages happen, usage stays high.",
      },
    ],
  },
  {
    slug: "micro-lessons-water-operators",
    title: "Micro-Lessons for Water Point Operators",
    excerpt:
      "Short, repeatable drills that help operators test chlorine levels, log repairs, and coach households on safe storage.",
    category: "Operations Training",
    tags: ["chlorine", "maintenance", "fieldwork"],
    pillar: "Learn Sanitation",
    date: "2026-01-29",
    readTime: "5 min",
    author: "Kenji Ibarra",
    featured: false,
    content: [
      {
        heading: "Focus on five-minute drills",
        body:
          "Each lesson is designed for a single shift break. Operators practice one task, receive feedback, and record results in a shared logbook.",
      },
      {
        heading: "Connect with households",
        body:
          "Operators can share quick tips on storage, cover usage, and cleaning routines during routine visits. The goal is short interactions that build trust.",
      },
      {
        heading: "Measure improvement",
        body:
          "After two weeks, compare chlorine residual logs and household feedback. Improvements should be visible in fewer breakdowns and more consistent water quality.",
      },
    ],
  },
  {
    slug: "policy-tracker-budget-2026",
    title: "Policy Tracker: National Sanitation Budget 2026",
    excerpt:
      "A digest of the latest national allocations and what they mean for regional sanitation coverage targets.",
    category: "Policy Watch",
    tags: ["budget", "national", "planning"],
    pillar: "News & Policies",
    date: "2026-01-31",
    readTime: "6 min",
    author: "Alma Rowe",
    featured: true,
    content: [
      {
        heading: "Where the funds are landing",
        body:
          "The 2026 plan prioritizes peri-urban sanitation upgrades and flood-resilient infrastructure. Regional managers are asked to submit project revisions within 60 days.",
      },
      {
        heading: "Implications for local teams",
        body:
          "Budgets increase for monitoring and data reporting, which means districts will need more field enumerators and digital reporting tools.",
      },
      {
        heading: "What to track next",
        body:
          "Look for the release of implementation guidelines and the upcoming joint review meetings. These will clarify which projects can move to procurement.",
      },
    ],
  },
  {
    slug: "regional-spotlight-coastal-upgrades",
    title: "Regional Spotlight: Coastal Wastewater Upgrades",
    excerpt:
      "Coastal regions are investing in treatment upgrades that protect tourism zones and fisheries.",
    category: "Regional Bulletin",
    tags: ["coastal", "wastewater", "resilience"],
    pillar: "News & Policies",
    date: "2026-01-26",
    readTime: "4 min",
    author: "Avery Dole",
    featured: false,
    content: [
      {
        heading: "Priority corridors",
        body:
          "Municipalities are focusing on river mouths and beachside settlements. The upgrades combine treatment capacity expansion with stronger sludge transport networks.",
      },
      {
        heading: "Tourism partnerships",
        body:
          "Hotels and local associations are providing co-funding for monitoring labs and public awareness campaigns that keep beaches clean.",
      },
      {
        heading: "Community feedback",
        body:
          "Residents report fewer odors and better water clarity since the first phase of upgrades, showing early wins that can unlock more support.",
      },
    ],
  },
  {
    slug: "iot-sensor-kits-septic",
    title: "IoT Sensor Kits for Septic Monitoring",
    excerpt:
      "Low-cost sensor bundles that send fill-level alerts to operators and households.",
    category: "Tech Lab",
    tags: ["iot", "sensors", "data"],
    pillar: "Business & Technology",
    date: "2026-02-01",
    readTime: "5 min",
    author: "Priya Jang",
    featured: true,
    content: [
      {
        heading: "Why sensors matter",
        body:
          "Manual inspections are expensive and inconsistent. Sensors give early warnings so desludging teams can plan routes before emergencies.",
      },
      {
        heading: "Bundle essentials",
        body:
          "The kits pair ultrasonic sensors with a basic gateway. Data is stored locally when coverage drops, then synced during the next connection.",
      },
      {
        heading: "Making data useful",
        body:
          "Dashboards should show fill-level trends and highlight overdue tanks. Household SMS reminders help reduce last-minute call-outs.",
      },
    ],
  },
  {
    slug: "csr-playbook-small-cities",
    title: "CSR Playbook: Service Coverage for Small Cities",
    excerpt:
      "How private partners can expand sanitation services without creating long-term operating gaps.",
    category: "CSR Brief",
    tags: ["csr", "financing", "operations"],
    pillar: "Business & Technology",
    date: "2026-01-24",
    readTime: "6 min",
    author: "Lukas Fero",
    featured: false,
    content: [
      {
        heading: "Start with coverage maps",
        body:
          "Map neighborhoods with the largest service gaps and identify existing operators. The first CSR investments should reduce travel time for operators.",
      },
      {
        heading: "Blend capital and training",
        body:
          "When equipment grants are paired with operator training, service quality improves quickly. Consider micro-franchising models for longer-term viability.",
      },
      {
        heading: "Measure impact",
        body:
          "Track households reached, service uptime, and affordability. Publishing results quarterly helps sustain public confidence in the program.",
      },
    ],
  },
  {
    slug: "morning-sanitation-reset",
    title: "Family Routine: 10-Minute Morning Sanitation Reset",
    excerpt:
      "A simple routine for families to keep toilets, sinks, and water storage ready each morning.",
    category: "Household Routine",
    tags: ["household", "routine", "cleaning"],
    pillar: "Family & Lifestyle",
    date: "2026-01-30",
    readTime: "4 min",
    author: "Sani Rahma",
    featured: true,
    content: [
      {
        heading: "Set the baseline",
        body:
          "Begin with a quick wipe-down, a refill check, and a towel swap. The entire routine fits between breakfast prep and school departures.",
      },
      {
        heading: "Share the tasks",
        body:
          "Assign each family member a micro-task. Rotating responsibilities keeps everyone invested in keeping shared spaces clean.",
      },
      {
        heading: "Celebrate the habit",
        body:
          "Use a small visual tracker on the wall. A streak of clean mornings builds pride and encourages children to participate.",
      },
    ],
  },
  {
    slug: "youth-clubs-peer-hygiene",
    title: "Youth Clubs and Peer-to-Peer Hygiene",
    excerpt:
      "Youth groups are turning sanitation practices into shared rituals and community leadership.",
    category: "Youth Practice",
    tags: ["youth", "community", "leadership"],
    pillar: "Family & Lifestyle",
    date: "2026-01-22",
    readTime: "5 min",
    author: "Dita Surya",
    featured: false,
    content: [
      {
        heading: "Build a club toolkit",
        body:
          "Provide youth leaders with a starter kit: facilitation guides, visuals, and a simple activity calendar. The toolkit helps clubs run independently.",
      },
      {
        heading: "Use peer mentoring",
        body:
          "Pairs of mentors can lead demonstrations during school breaks or weekend gatherings. The familiarity of peers makes the lessons stick.",
      },
      {
        heading: "Connect to community projects",
        body:
          "Invite youth clubs to support clean-up days and reporting drives. This reinforces the idea that sanitation is a shared civic responsibility.",
      },
    ],
  },
];
