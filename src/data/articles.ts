import { categories } from "./categories";
import { pillars } from "./pillars";
import { withBasePath, type Lang } from "./i18n";

export type LocalizedText = { id: string; en: string };

export type Article = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  categoryId: string;
  tags: LocalizedText[];
  pillarId: string;
  date: string;
  readTime: LocalizedText;
  author: string;
  featured: boolean;
  content: { heading: LocalizedText; body: LocalizedText }[];
};

export type LocalizedArticle = Omit<
  Article,
  "title" | "excerpt" | "categoryId" | "tags" | "pillarId" | "readTime" | "content"
> & {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  pillar: string;
  readTime: string;
  content: { heading: string; body: string }[];
  categoryId: string;
  pillarId: string;
  href: string;
};

const categoryMap = Object.fromEntries(
  categories.map((category) => [category.id, category.label])
);
const pillarMap = Object.fromEntries(pillars.map((pillar) => [pillar.id, pillar.title]));

export const articles: Article[] = [
  {
    slug: "starter-path-hygiene-stations",
    title: {
      id: "Jalur Awal: Stasiun Cuci Tangan untuk Sekolah",
      en: "Starter Path: Hygiene Stations for Schools",
    },
    excerpt: {
      id: "Jalur belajar enam langkah untuk merancang, mendanai, dan merawat stasiun cuci tangan di kelas dan halaman sekolah.",
      en: "A six-step learning path to design, fund, and maintain handwashing stations for classrooms and school yards.",
    },
    categoryId: "learning-kit",
    tags: [
      { id: "sekolah", en: "schools" },
      { id: "cuci tangan", en: "handwashing" },
      { id: "kurikulum", en: "curriculum" },
    ],
    pillarId: "learn-sanitation",
    date: "2026-02-02",
    readTime: { id: "7 menit", en: "7 min" },
    author: "Rina Marcell",
    featured: true,
    content: [
      {
        heading: {
          id: "Peta perjalanan belajar",
          en: "Map the learning journey",
        },
        body: {
          id: "Mulai dengan survei kelas, audit foto fasilitas yang ada, dan kuis singkat keterampilan. Gunakan hasilnya untuk membagi peserta ke tim yang bertanggung jawab atas penyimpanan air, logistik sabun, dan desain perilaku.",
          en: "Start with a class survey, a photo audit of existing facilities, and a short skills quiz. Use the results to group learners into teams responsible for water storage, soap logistics, and behavior design.",
        },
      },
      {
        heading: {
          id: "Rancang dengan masukan siswa",
          en: "Design with student feedback",
        },
        body: {
          id: "Jalankan dua sprint desain dan minta siswa memberi skor prototipe pada kemudahan pakai, keamanan, dan kebanggaan. Desain terbaik menjadi standar kelas, sementara pilihan kedua disesuaikan untuk tamu.",
          en: "Run two design sprints and ask students to score prototypes on ease of use, safety, and pride. The top design becomes the class standard while the second-best is adapted for visiting guests.",
        },
      },
      {
        heading: {
          id: "Jaga stasiun tetap hidup",
          en: "Keep the station alive",
        },
        body: {
          id: "Buat jadwal mingguan, daftar periksa inspeksi sederhana, dan pelacak pengisian ulang. Saat siswa dapat melaporkan kebutuhan air dan sabun sebelum habis, pemakaian tetap tinggi.",
          en: "Create a weekly rota, a simple inspection checklist, and a refill tracker. When students can report water and soap needs before shortages happen, usage stays high.",
        },
      },
    ],
  },
  {
    slug: "micro-lessons-water-operators",
    title: {
      id: "Pelajaran Mikro untuk Operator Titik Air",
      en: "Micro-Lessons for Water Point Operators",
    },
    excerpt: {
      id: "Latihan singkat yang dapat diulang untuk membantu operator menguji kadar klorin, mencatat perbaikan, dan membimbing rumah tangga tentang penyimpanan aman.",
      en: "Short, repeatable drills that help operators test chlorine levels, log repairs, and coach households on safe storage.",
    },
    categoryId: "operations-training",
    tags: [
      { id: "klorin", en: "chlorine" },
      { id: "perawatan", en: "maintenance" },
      { id: "lapangan", en: "fieldwork" },
    ],
    pillarId: "learn-sanitation",
    date: "2026-01-29",
    readTime: { id: "5 menit", en: "5 min" },
    author: "Kenji Ibarra",
    featured: false,
    content: [
      {
        heading: {
          id: "Fokus pada latihan lima menit",
          en: "Focus on five-minute drills",
        },
        body: {
          id: "Setiap pelajaran dirancang untuk satu jeda giliran kerja. Operator mempraktikkan satu tugas, menerima umpan balik, dan mencatat hasil di buku log bersama.",
          en: "Each lesson is designed for a single shift break. Operators practice one task, receive feedback, and record results in a shared logbook.",
        },
      },
      {
        heading: {
          id: "Terhubung dengan rumah tangga",
          en: "Connect with households",
        },
        body: {
          id: "Operator dapat berbagi tips cepat tentang penyimpanan, penggunaan penutup, dan rutinitas pembersihan saat kunjungan rutin. Tujuannya interaksi singkat yang membangun kepercayaan.",
          en: "Operators can share quick tips on storage, cover usage, and cleaning routines during routine visits. The goal is short interactions that build trust.",
        },
      },
      {
        heading: {
          id: "Ukur peningkatan",
          en: "Measure improvement",
        },
        body: {
          id: "Setelah dua minggu, bandingkan log sisa klorin dan umpan balik rumah tangga. Peningkatan harus terlihat pada lebih sedikit kerusakan dan kualitas air yang lebih konsisten.",
          en: "After two weeks, compare chlorine residual logs and household feedback. Improvements should be visible in fewer breakdowns and more consistent water quality.",
        },
      },
    ],
  },
  {
    slug: "policy-tracker-budget-2026",
    title: {
      id: "Pelacak Kebijakan: Anggaran Sanitasi Nasional 2026",
      en: "Policy Tracker: National Sanitation Budget 2026",
    },
    excerpt: {
      id: "Ringkasan alokasi nasional terbaru dan dampaknya bagi target cakupan sanitasi regional.",
      en: "A digest of the latest national allocations and what they mean for regional sanitation coverage targets.",
    },
    categoryId: "policy-watch",
    tags: [
      { id: "anggaran", en: "budget" },
      { id: "nasional", en: "national" },
      { id: "perencanaan", en: "planning" },
    ],
    pillarId: "news-policies",
    date: "2026-01-31",
    readTime: { id: "6 menit", en: "6 min" },
    author: "Alma Rowe",
    featured: true,
    content: [
      {
        heading: {
          id: "Ke mana dana dialokasikan",
          en: "Where the funds are landing",
        },
        body: {
          id: "Rencana 2026 memprioritaskan peningkatan sanitasi peri-urban dan infrastruktur tahan banjir. Manajer regional diminta mengirim revisi proyek dalam 60 hari.",
          en: "The 2026 plan prioritizes peri-urban sanitation upgrades and flood-resilient infrastructure. Regional managers are asked to submit project revisions within 60 days.",
        },
      },
      {
        heading: {
          id: "Dampak bagi tim lokal",
          en: "Implications for local teams",
        },
        body: {
          id: "Anggaran naik untuk pemantauan dan pelaporan data, berarti distrik membutuhkan lebih banyak enumerator lapangan dan alat pelaporan digital.",
          en: "Budgets increase for monitoring and data reporting, which means districts will need more field enumerators and digital reporting tools.",
        },
      },
      {
        heading: {
          id: "Apa yang perlu dipantau selanjutnya",
          en: "What to track next",
        },
        body: {
          id: "Pantau rilis pedoman pelaksanaan dan rapat tinjauan bersama yang akan datang. Ini akan memperjelas proyek mana yang bisa masuk pengadaan.",
          en: "Look for the release of implementation guidelines and the upcoming joint review meetings. These will clarify which projects can move to procurement.",
        },
      },
    ],
  },
  {
    slug: "regional-spotlight-coastal-upgrades",
    title: {
      id: "Sorotan Regional: Peningkatan Air Limbah Pesisir",
      en: "Regional Spotlight: Coastal Wastewater Upgrades",
    },
    excerpt: {
      id: "Wilayah pesisir berinvestasi dalam peningkatan pengolahan yang melindungi zona wisata dan perikanan.",
      en: "Coastal regions are investing in treatment upgrades that protect tourism zones and fisheries.",
    },
    categoryId: "regional-bulletin",
    tags: [
      { id: "pesisir", en: "coastal" },
      { id: "air limbah", en: "wastewater" },
      { id: "ketahanan", en: "resilience" },
    ],
    pillarId: "news-policies",
    date: "2026-01-26",
    readTime: { id: "4 menit", en: "4 min" },
    author: "Avery Dole",
    featured: false,
    content: [
      {
        heading: {
          id: "Koridor prioritas",
          en: "Priority corridors",
        },
        body: {
          id: "Pemerintah kota fokus pada muara sungai dan permukiman tepi pantai. Peningkatan menggabungkan ekspansi kapasitas pengolahan dengan jaringan transport lumpur yang lebih kuat.",
          en: "Municipalities are focusing on river mouths and beachside settlements. The upgrades combine treatment capacity expansion with stronger sludge transport networks.",
        },
      },
      {
        heading: {
          id: "Kemitraan pariwisata",
          en: "Tourism partnerships",
        },
        body: {
          id: "Hotel dan asosiasi lokal memberikan pendanaan bersama untuk laboratorium pemantauan dan kampanye kesadaran publik yang menjaga pantai tetap bersih.",
          en: "Hotels and local associations are providing co-funding for monitoring labs and public awareness campaigns that keep beaches clean.",
        },
      },
      {
        heading: {
          id: "Umpan balik warga",
          en: "Community feedback",
        },
        body: {
          id: "Warga melaporkan bau berkurang dan air lebih jernih sejak fase awal peningkatan, menunjukkan kemenangan awal yang dapat membuka dukungan lanjutan.",
          en: "Residents report fewer odors and better water clarity since the first phase of upgrades, showing early wins that can unlock more support.",
        },
      },
    ],
  },
  {
    slug: "iot-sensor-kits-septic",
    title: {
      id: "Paket Sensor IoT untuk Pemantauan Septik",
      en: "IoT Sensor Kits for Septic Monitoring",
    },
    excerpt: {
      id: "Paket sensor berbiaya rendah yang mengirim peringatan tingkat isi ke operator dan rumah tangga.",
      en: "Low-cost sensor bundles that send fill-level alerts to operators and households.",
    },
    categoryId: "tech-lab",
    tags: [
      { id: "iot", en: "iot" },
      { id: "sensor", en: "sensors" },
      { id: "data", en: "data" },
    ],
    pillarId: "business-technology",
    date: "2026-02-01",
    readTime: { id: "5 menit", en: "5 min" },
    author: "Priya Jang",
    featured: true,
    content: [
      {
        heading: {
          id: "Mengapa sensor penting",
          en: "Why sensors matter",
        },
        body: {
          id: "Inspeksi manual mahal dan tidak konsisten. Sensor memberi peringatan awal agar tim penyedot dapat merencanakan rute sebelum keadaan darurat.",
          en: "Manual inspections are expensive and inconsistent. Sensors give early warnings so desludging teams can plan routes before emergencies.",
        },
      },
      {
        heading: {
          id: "Isi paket utama",
          en: "Bundle essentials",
        },
        body: {
          id: "Paket memasangkan sensor ultrasonik dengan gateway dasar. Data disimpan lokal saat jaringan turun, lalu disinkronkan pada koneksi berikutnya.",
          en: "The kits pair ultrasonic sensors with a basic gateway. Data is stored locally when coverage drops, then synced during the next connection.",
        },
      },
      {
        heading: {
          id: "Membuat data berguna",
          en: "Making data useful",
        },
        body: {
          id: "Dasbor sebaiknya menampilkan tren tingkat isi dan menyoroti tangki terlambat. Pengingat SMS rumah tangga membantu mengurangi panggilan mendadak.",
          en: "Dashboards should show fill-level trends and highlight overdue tanks. Household SMS reminders help reduce last-minute call-outs.",
        },
      },
    ],
  },
  {
    slug: "csr-playbook-small-cities",
    title: {
      id: "Panduan CSR: Cakupan Layanan untuk Kota Kecil",
      en: "CSR Playbook: Service Coverage for Small Cities",
    },
    excerpt: {
      id: "Bagaimana mitra swasta dapat memperluas layanan sanitasi tanpa menciptakan kesenjangan operasi jangka panjang.",
      en: "How private partners can expand sanitation services without creating long-term operating gaps.",
    },
    categoryId: "csr-brief",
    tags: [
      { id: "csr", en: "csr" },
      { id: "pembiayaan", en: "financing" },
      { id: "operasional", en: "operations" },
    ],
    pillarId: "business-technology",
    date: "2026-01-24",
    readTime: { id: "6 menit", en: "6 min" },
    author: "Lukas Fero",
    featured: false,
    content: [
      {
        heading: {
          id: "Mulai dari peta cakupan",
          en: "Start with coverage maps",
        },
        body: {
          id: "Petakan lingkungan dengan kesenjangan layanan terbesar dan identifikasi operator yang ada. Investasi CSR pertama harus mengurangi waktu tempuh operator.",
          en: "Map neighborhoods with the largest service gaps and identify existing operators. The first CSR investments should reduce travel time for operators.",
        },
      },
      {
        heading: {
          id: "Padukan modal dan pelatihan",
          en: "Blend capital and training",
        },
        body: {
          id: "Saat hibah peralatan dipasangkan dengan pelatihan operator, kualitas layanan meningkat cepat. Pertimbangkan model mikro-franchise untuk keberlanjutan.",
          en: "When equipment grants are paired with operator training, service quality improves quickly. Consider micro-franchising models for longer-term viability.",
        },
      },
      {
        heading: {
          id: "Ukur dampak",
          en: "Measure impact",
        },
        body: {
          id: "Lacak rumah tangga yang terjangkau, waktu layanan aktif, dan keterjangkauan biaya. Publikasi hasil triwulanan membantu menjaga kepercayaan publik.",
          en: "Track households reached, service uptime, and affordability. Publishing results quarterly helps sustain public confidence in the program.",
        },
      },
    ],
  },
  {
    slug: "morning-sanitation-reset",
    title: {
      id: "Rutinitas Keluarga: Reset Sanitasi 10 Menit di Pagi Hari",
      en: "Family Routine: 10-Minute Morning Sanitation Reset",
    },
    excerpt: {
      id: "Rutinitas sederhana bagi keluarga untuk menjaga toilet, wastafel, dan penyimpanan air siap setiap pagi.",
      en: "A simple routine for families to keep toilets, sinks, and water storage ready each morning.",
    },
    categoryId: "household-routine",
    tags: [
      { id: "rumah tangga", en: "household" },
      { id: "rutinitas", en: "routine" },
      { id: "pembersihan", en: "cleaning" },
    ],
    pillarId: "family-lifestyle",
    date: "2026-01-30",
    readTime: { id: "4 menit", en: "4 min" },
    author: "Sani Rahma",
    featured: true,
    content: [
      {
        heading: {
          id: "Tetapkan standar dasar",
          en: "Set the baseline",
        },
        body: {
          id: "Mulai dengan lap cepat, cek isi ulang, dan ganti handuk. Rutinitas ini pas antara persiapan sarapan dan waktu berangkat sekolah.",
          en: "Begin with a quick wipe-down, a refill check, and a towel swap. The entire routine fits between breakfast prep and school departures.",
        },
      },
      {
        heading: {
          id: "Bagi tugas",
          en: "Share the tasks",
        },
        body: {
          id: "Tetapkan tiap anggota keluarga satu tugas mikro. Rotasi tanggung jawab membuat semua orang terlibat menjaga ruang bersama tetap bersih.",
          en: "Assign each family member a micro-task. Rotating responsibilities keeps everyone invested in keeping shared spaces clean.",
        },
      },
      {
        heading: {
          id: "Rayakan kebiasaan",
          en: "Celebrate the habit",
        },
        body: {
          id: "Gunakan penanda visual kecil di dinding. Rangkaian pagi bersih membangun kebanggaan dan mendorong anak-anak ikut serta.",
          en: "Use a small visual tracker on the wall. A streak of clean mornings builds pride and encourages children to participate.",
        },
      },
    ],
  },
  {
    slug: "youth-clubs-peer-hygiene",
    title: {
      id: "Klub Remaja dan Kebersihan Sebaya",
      en: "Youth Clubs and Peer-to-Peer Hygiene",
    },
    excerpt: {
      id: "Kelompok remaja mengubah praktik sanitasi menjadi ritual bersama dan kepemimpinan komunitas.",
      en: "Youth groups are turning sanitation practices into shared rituals and community leadership.",
    },
    categoryId: "youth-practice",
    tags: [
      { id: "remaja", en: "youth" },
      { id: "komunitas", en: "community" },
      { id: "kepemimpinan", en: "leadership" },
    ],
    pillarId: "family-lifestyle",
    date: "2026-01-22",
    readTime: { id: "5 menit", en: "5 min" },
    author: "Dita Surya",
    featured: false,
    content: [
      {
        heading: {
          id: "Bangun perangkat klub",
          en: "Build a club toolkit",
        },
        body: {
          id: "Sediakan kit awal untuk pemimpin remaja: panduan fasilitasi, visual, dan kalender aktivitas sederhana. Kit membantu klub berjalan mandiri.",
          en: "Provide youth leaders with a starter kit: facilitation guides, visuals, and a simple activity calendar. The toolkit helps clubs run independently.",
        },
      },
      {
        heading: {
          id: "Gunakan pendampingan sebaya",
          en: "Use peer mentoring",
        },
        body: {
          id: "Pasangan mentor dapat memimpin demonstrasi saat istirahat sekolah atau pertemuan akhir pekan. Kedekatan sesama remaja membuat pelajaran lebih melekat.",
          en: "Pairs of mentors can lead demonstrations during school breaks or weekend gatherings. The familiarity of peers makes the lessons stick.",
        },
      },
      {
        heading: {
          id: "Hubungkan dengan proyek komunitas",
          en: "Connect to community projects",
        },
        body: {
          id: "Undang klub remaja mendukung hari bersih-bersih dan gerakan pelaporan. Ini menguatkan gagasan bahwa sanitasi adalah tanggung jawab bersama.",
          en: "Invite youth clubs to support clean-up days and reporting drives. This reinforces the idea that sanitation is a shared civic responsibility.",
        },
      },
    ],
  },
];

export const getLocalizedArticles = (lang: Lang): LocalizedArticle[] =>
  articles.map((article) => ({
    ...article,
    title: article.title[lang],
    excerpt: article.excerpt[lang],
    category: categoryMap[article.categoryId]?.[lang] ?? article.categoryId,
    tags: article.tags.map((tag) => tag[lang]),
    pillar: pillarMap[article.pillarId]?.[lang] ?? article.pillarId,
    readTime: article.readTime[lang],
    content: article.content.map((section) => ({
      heading: section.heading[lang],
      body: section.body[lang],
    })),
    href: withBasePath(`/articles/${article.slug}`, lang),
  }));
