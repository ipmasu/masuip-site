const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const series = [
  {
    id: "examiner-insights",
    title: "Examiner Insights",
    kicker: "China prosecution",
    description:
      "Former-examiner analysis for China filing, inventive-step responses, claim reconstruction, and office-action strategy.",
  },
  {
    id: "innovation-map",
    title: "Innovation Map",
    kicker: "Patent-map guided innovation",
    description:
      "Patent information, technical-feature decomposition, and structured invention mining for companies and R&D teams.",
  },
  {
    id: "global-ip",
    title: "Global IP",
    kicker: "Cross-border strategy",
    description:
      "Cross-border patent strategy for Chinese companies and individual inventors going overseas, and for overseas innovators entering China.",
  },
  {
    id: "youth-innovation",
    title: "Youth Innovation",
    kicker: "Science innovation education",
    description:
      "Project-based science innovation education, AI-era curriculum design, topic selection, prototype testing, and student IP awareness.",
  },
];

const articles = [
  {
    slug: "from-patent-examiner-to-innovation-methodology",
    title: "From Patent Examiner to Innovation Methodology Practitioner",
    description:
      "Ma Su's personal story: from CNIPA patent examiner to inventor, patent attorney, innovation methodology practitioner, youth science innovation educator, and cross-border patent strategist.",
    category: "Personal Story",
    series: "examiner-insights",
    date: "2026-07-27",
  },
  {
    slug: "xiegang-yafan-cup-youth-innovation-competition",
    title: "Xiegang Yafan Cup Youth Innovation Competition Case",
    description:
      "A youth science innovation competition plan that connects local education, enterprise R&D resources, patent literacy, product design, and commercialization.",
    category: "Youth Innovation Case",
    series: "youth-innovation",
    date: "2026-07-27",
  },
  {
    slug: "yafan-cup-water-cup-innovation-practical-manual",
    title: "Yafan Cup Water Cup Innovation Practical Manual: From Real Problem to Competition Project",
    description:
      "An excerpt from Ma Su's practical handbook for the Yafan Cup, showing how students move from real water-cup problems to surveys, data, patent search, MVP prototypes, AI-assisted 3D expression, and IP-aware presentations.",
    category: "Youth Innovation Manual",
    series: "youth-innovation",
    date: "2026-07-27",
  },
  {
    slug: "ai-ip-strategy-for-global-innovators-china",
    title: "AI and IP Strategy for Global Innovators Entering China",
    description:
      "A practical IP strategy note for AI-heavy companies, overseas innovators, and patent firms preparing China patent filings in the age of generative AI.",
    category: "AI and IP",
    series: "global-ip",
    date: "2026-07-24",
  },
  {
    slug: "enterprise-ipr-patent-mining-five-step-method",
    title: "Enterprise IPR Patent Mining: A Five-Step Method for Finding High-Value Inventions",
    description: "A practical workflow for enterprise IPR teams to discover patentable technical solutions from real R&D work.",
    category: "Patent Mining",
    series: "innovation-map",
    date: "2026-06-20",
  },
  {
    slug: "responding-to-inventive-step-office-actions",
    title: "Responding to Inventive-Step Office Actions in Chinese Invention Patent Applications",
    description: "A practice note on how to read, decompose, and respond to creativity objections during Chinese examination.",
    category: "China Prosecution",
    series: "examiner-insights",
    date: "2026-06-20",
  },
  {
    slug: "using-divisional-applications-to-extend-patent-protection",
    title: "Using Divisional Applications to Extend the Patent Protection Chain",
    description: "How divisional practice can support layered protection, prosecution flexibility, and long-term portfolio control.",
    category: "Portfolio Strategy",
    series: "examiner-insights",
    date: "2026-06-20",
  },
  {
    slug: "ai-era-patent-mining-and-layout",
    title: "Patent Mining and Portfolio Layout in the AI Era",
    description: "A discussion of how AI can lower the cost of patent mining while increasing the need for expert legal judgment.",
    category: "AI and IP",
    series: "innovation-map",
    date: "2026-06-20",
  },
  {
    slug: "how-patents-balance-public-interest",
    title: "How Patents Balance Private Rights and the Public Interest",
    description: "A public-facing explanation of why patent systems disclose technical knowledge while granting time-limited exclusivity.",
    category: "IP Policy",
    series: "global-ip",
    date: "2026-06-20",
  },
  {
    slug: "generic-drug-patent-layout-strategy",
    title: "Patent Layout Strategy for Generic Drugs",
    description: "A structured reading of how generic pharmaceutical players can understand and respond to patent barriers.",
    category: "Pharma IP",
    series: "global-ip",
    date: "2026-06-20",
  },
  {
    slug: "patent-claim-drafting-guide",
    title: "A Simple Guide to Patent Claim Drafting",
    description: "A practical explanation of claim drafting logic, centered on technical features and defensible scope.",
    category: "Claim Drafting",
    series: "examiner-insights",
    date: "2026-06-20",
  },
  {
    slug: "easy-path-for-patent-mining",
    title: "The Easiest Path for Patent Mining",
    description: "A direct route for IP teams to identify patentable improvements through problem decomposition and technical substitution.",
    category: "Patent Mining",
    series: "innovation-map",
    date: "2026-06-20",
  },
  {
    slug: "protecting-ip-protects-innovation-and-the-future",
    title: "Protecting Intellectual Property Means Protecting Innovation and the Future",
    description: "A broad essay on the social, educational, and industrial meaning of intellectual property protection.",
    category: "IP Education",
    series: "global-ip",
    date: "2026-06-20",
  },
  {
    slug: "reverse-thinking-as-an-innovation-method",
    title: "Reverse Thinking as a Powerful Innovation Method",
    description: "An innovation-method essay on using reverse thinking to break fixed assumptions and generate new technical paths.",
    category: "Innovation Methodology",
    series: "innovation-map",
    date: "2026-06-20",
  },
  {
    slug: "is-innovation-really-difficult",
    title: "Is Innovation Really Difficult?",
    description: "A concise essay arguing that innovation can be taught through structured problem discovery and technical recombination.",
    category: "Innovation Education",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "youth-science-innovation-topic-selection-questionnaire",
    title: "Youth Science Innovation Topic Selection Questionnaire",
    description: "A guided questionnaire for helping young students discover real innovation topics instead of forcing empty ideas.",
    category: "Youth Innovation",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "rejection-and-asking-for-help-in-innovation-competitions",
    title: "Rejection and Asking for Help: Lesson Two of an Innovation Competition",
    description: "A project-based learning reflection on how students learn from rejection, outreach, and real-world communication.",
    category: "Project-Based Learning",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "interdisciplinary-integration-in-science-innovation",
    title: "Interdisciplinary Integration: Using Mathematics After a Practical Setback",
    description: "A teaching note on how a science innovation project can integrate mathematics after encountering real-world limits.",
    category: "Project-Based Learning",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "youth-innovation-competition-practical-lessons-four-and-five",
    title: "Youth Innovation Competition Practical Lessons Four and Five",
    description: "A continued project diary on guiding young innovators from concept formation toward testing and presentation.",
    category: "Youth Innovation",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "why-i-wrote-a-practical-science-innovation-textbook",
    title: "Why I Decided to Write These Experiences into a Practical Science Innovation Textbook",
    description: "A personal essay explaining why Ma Su converted practical education experience into a science innovation textbook.",
    category: "Book and Curriculum",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "using-patent-information-for-innovation",
    title: "Using Patent Information for Innovation",
    description: "How patent information can guide invention mining, R&D decisions, and patent portfolio design.",
    category: "Patent Maps",
    series: "innovation-map",
    date: "2026-06-20",
  },
  {
    slug: "ai-era-science-innovation-framework",
    title: "A Practical Course Framework for Science and Innovation",
    description: "From discovering real problems to patent search, AI collaboration, prototyping, validation, and IP protection.",
    category: "AI Era",
    series: "youth-innovation",
    date: "2026-06-20",
  },
  {
    slug: "china-prosecution-for-foreign-firms",
    title: "What Foreign Patent Firms Should Know Before China Prosecution",
    description: "Why China entry should be treated as a strategic examination event, not a translation task.",
    category: "China Practice",
    series: "examiner-insights",
    date: "2026-06-20",
  },
];

function nav(prefix = "") {
  return `<header class="site-header content-header">
      <a class="brand" href="${prefix}index.html" aria-label="Ma Su IP Strategy">
        <span class="brand-mark">MS</span>
        <span>
          <strong>Ma Su Team</strong>
          <small>Cross-border Patent Strategy</small>
        </span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="${prefix}index.html">Home</a>
        <a href="${prefix}articles.html">Articles</a>
        <a href="${prefix}methodology.html">Methodology</a>
        <a href="${prefix}about.html">About</a>
        <a href="${prefix}contact.html">Contact</a>
      </nav>
    </header>`;
}

function footer(prefix = "") {
  return `<footer>
      <p>&copy; 2026 Ma Su Team</p>
      <p>Overseas patent layout for Chinese innovators and China patent layout for overseas innovators.</p>
    </footer>
    <script src="${prefix}content-data.js"></script>
    <script src="${prefix}content-ui.js"></script>`;
}

function articleCard(article, prefix = "") {
  const s = series.find((item) => item.id === article.series);
  return `<article class="content-card" data-series="${article.series}" data-date="${article.date}">
            <p>${article.category} · ${article.date}</p>
            <h3>${article.title}</h3>
            <span>${article.description}</span>
            <a href="${prefix}articles/${article.slug}.html">Read article</a>
            <small>${s.title}</small>
          </article>`;
}

function pageShell(title, description, body, prefix = "") {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="stylesheet" href="${prefix}styles.css" />
  </head>
  <body class="content-site">
    ${nav(prefix)}
    <main>
${body}
    </main>
    ${footer(prefix)}
  </body>
</html>
`;
}

function homePage() {
  const latest = articles.slice(0, 4).map((a) => articleCard(a)).join("\n");
  const seriesCards = series
    .map(
      (s) => `<article class="series-card">
          <p>${s.kicker}</p>
          <h3>${s.title}</h3>
          <span>${s.description}</span>
          <a href="series/${s.id}.html">Explore series</a>
        </article>`
    )
    .join("\n");
  const body = `
      <section class="content-hero" data-editable="home-hero">
        <div>
          <p class="eyebrow">Cross-border patent strategy</p>
          <h1>Patent layout for Chinese innovators going overseas and overseas innovators entering China.</h1>
          <p>Ma Su helps Chinese companies and individual inventors plan overseas patent portfolios, while also helping overseas innovation teams enter China with examiner-style patentability screening, claim reconstruction, and portfolio strategy.</p>
          <div class="hero-actions">
            <a class="primary-action" href="articles.html">Read the knowledge center</a>
            <a class="secondary-action" href="contact.html">Discuss cooperation</a>
          </div>
        </div>
      </section>

      <section class="trust-strip" data-editable="home-trust">
        <div><strong>Former CNIPA examiner</strong><span>Examiner-style analysis for China entry and outbound patent decisions.</span></div>
        <div><strong>20+ articles</strong><span>A structured knowledge center for cross-border patent strategy.</span></div>
        <div><strong>Patent-map method</strong><span>Turn real technical problems into portfolio options.</span></div>
        <div><strong>Two-way layout</strong><span>China-to-overseas portfolios and overseas-to-China filings.</span></div>
      </section>

      <section class="content-band light" data-editable="home-latest">
        <div class="section-heading">
          <p class="eyebrow">Latest Articles</p>
          <h2>New thinking for AI, Chinese innovation, China entry, and overseas patent strategy.</h2>
        </div>
        <div class="content-grid">${latest}</div>
      </section>

      <section class="content-band" data-editable="home-series">
        <div class="section-heading">
          <p class="eyebrow">Popular Series</p>
          <h2>Follow the knowledge by topic.</h2>
        </div>
        <div class="series-grid">${seriesCards}</div>
      </section>

      <section class="content-band light" data-editable="home-services">
        <div class="section-heading">
          <p class="eyebrow">Service Overview</p>
          <h2>Strategy services built around cross-border patent layout.</h2>
        </div>
        <div class="service-grid content-service-grid">
          <article><span>01</span><h3>Chinese Innovators Going Overseas</h3><p>Overseas patent layout, prior-art landscape reading, PCT and national-phase planning, and portfolio sequencing for Chinese companies and individual inventors.</p><a href="services.html">View services</a></article>
          <article><span>02</span><h3>Overseas Innovators Entering China</h3><p>Pre-filing China review, claim reconstruction, examiner-style office-action reasoning, and China portfolio design.</p><a href="china-entry.html">View service</a></article>
          <article><span>03</span><h3>Patent-Map Innovation</h3><p>Use patent information to discover technical white space and guide invention mining before drafting begins.</p><a href="methodology.html">View method</a></article>
          <article><span>04</span><h3>Patent Firm Cooperation</h3><p>Cross-border strategy memos, bilingual explanations, and technical analysis for Chinese and overseas patent counsel.</p><a href="services.html">View services</a></article>
        </div>
      </section>

      <section class="honors-band" data-editable="home-honors">
        <div>
          <p class="eyebrow">Publication and Honors</p>
          <h2>Practical Science and Innovation in the AI Era.</h2>
          <p>Ma Su's work connects patent examination logic, science innovation education, and technology commercialization. The complete personal story now lives as a pinned article in the knowledge center, while this homepage keeps the proof concise.</p>
        </div>
        <dl class="trust-data">
          <div><dt>10+</dt><dd>years in patent examination, IP education, and technology transfer</dd></div>
          <div><dt>CNIPA</dt><dd>former patent examiner perspective</dd></div>
          <div><dt>CSU</dt><dd>external graduate mentor</dd></div>
        </dl>
      </section>

      <section class="testimonial-band" data-editable="home-testimonial">
        <blockquote>Strong IP work is not only legal procedure. It is the ability to read technology, market direction, and examination logic at the same time.</blockquote>
        <p>Ma Su Team</p>
      </section>

      <section class="honors-band" data-editable="home-final-cta">
        <div>
          <p class="eyebrow">Work with Ma Su</p>
          <h2>Turn technical problems into protectable inventions.</h2>
          <p>For China entry, overseas patent layout, enterprise invention mining, or youth science innovation coaching, start with a focused conversation about the real technical problem.</p>
        </div>
        <a class="primary-action" href="contact.html">Discuss cooperation</a>
      </section>`;
  return pageShell("Ma Su | Cross-border Patent Strategy and Innovation", "Ma Su Team publishes examiner-grade patent strategy for Chinese innovators going overseas and overseas innovators entering China.", body);
}

function articlesPage() {
  const cards = articles.map((a) => articleCard(a)).join("\n");
  const pinned = articles.find((a) => a.slug === "from-patent-examiner-to-innovation-methodology");
  const buttons = [`<button type="button" class="active" data-filter="all">All</button>`]
    .concat(series.map((s) => `<button type="button" data-filter="${s.id}">${s.title}</button>`))
    .join("\n");
  const body = `
      <section class="subpage-hero compact-hero" data-editable="articles-hero">
        <p class="eyebrow">Knowledge Center</p>
        <h1>Articles organized as an IP strategy library.</h1>
        <p>Filter by series, sort by time, and follow the method from examiner insight to patent-map guided innovation.</p>
      </section>
      <section class="pinned-article" data-editable="articles-pinned-story">
        <p class="eyebrow">Pinned Story</p>
        <h2>Ma Su's complete story lives in the article center.</h2>
        <p>${pinned.description}</p>
        <a class="primary-action" href="articles/${pinned.slug}.html">${pinned.title}</a>
      </section>
      <section class="article-toolbar" data-editable="articles-filters">
        <div class="filter-buttons">${buttons}</div>
        <label>Sort <select id="article-sort"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></label>
      </section>
      <section class="article-index-section">
        <div class="content-grid article-index" id="article-list">${cards}</div>
      </section>
      <section class="honors-band">
        <div>
          <p class="eyebrow">Next Step</p>
          <h2>Use the articles as a map, then discuss the real patent problem.</h2>
          <p>The article center is organized to help readers move from examiner logic to practical invention mining and cross-border patent layout.</p>
        </div>
        <a class="primary-action" href="contact.html">Contact Ma Su</a>
      </section>`;
  return pageShell("Articles and Insights | Ma Su", "Articles by Ma Su Team, organized by examiner insights, innovation maps, cross-border patent strategy, and youth innovation.", body);
}

function seriesPage(s) {
  const cards = articles.filter((a) => a.series === s.id).map((a) => articleCard(a, "../")).join("\n");
  const body = `
      <section class="subpage-hero compact-hero" data-editable="series-${s.id}">
        <p class="eyebrow">${s.kicker}</p>
        <h1>${s.title}</h1>
        <p>${s.description}</p>
      </section>
      <section class="article-index-section">
        <div class="content-grid">${cards}</div>
      </section>`;
  return pageShell(`${s.title} | Ma Su Articles`, s.description, body, "../");
}

function aboutPage() {
  const credentials = [
    ["cnipa-work-id-web.jpg", "Former CNIPA Patent Examiner", "Archival credential supporting Ma Su's patent examination background."],
    ["patent-agent-certificate-web.jpg", "Chinese Patent Agent Qualification", "Professional patent agency qualification."],
    ["csu-mentor-web.jpg", "External Graduate Mentor", "Central South University graduate mentor appointment."],
    ["inventions-association-web.jpg", "China Association of Inventions", "Membership connected with invention and innovation practice."],
    ["cnki-expert-web.jpg", "CNKI Galaxy Expert Library", "Certified expert profile."],
    ["science-communication-expert-web.jpg", "Science Communication Expert", "Appointment related to science communication and innovation education."],
    ["hunan-science-writers-web.jpg", "Hunan Science Writers Association", "Membership certificate for science communication writing and public science education."],
    ["icc-first-prize-web.jpg", "ICC National Finals Instructor Award", "Instructor record for Invention Convention China National Finals First Prize."],
    ["ip-teacher-training-web.jpg", "IP Education Training", "Intellectual property education teacher training record."],
  ];
  const credentialCards = credentials
    .map(([file, title, desc]) => `<figure>
          <img src="assets/credentials/${file}" alt="${title}" loading="lazy" />
          <figcaption><strong>${title}</strong><span>${desc}</span></figcaption>
        </figure>`)
    .join("\n");
  const body = `
      <section class="about-brief" data-editable="about-brief">
        <figure><img src="assets/credentials/ma-su-train-portrait.jpg" alt="Ma Su portrait" /></figure>
        <div>
          <p class="eyebrow">About Ma Su</p>
          <h1>A person who understands invention, examination, and patent grant at the same time.</h1>
          <p>Ma Su is a former CNIPA patent examiner, inventor, patent attorney, and innovation methodology practitioner. His distinctive value is the combination of three roles: he knows how an idea becomes an invention, how an examiner judges it, and how to write it into a patent application with a stronger chance of grant.</p>
          <a class="text-action" href="articles/from-patent-examiner-to-innovation-methodology.html">Read the full personal story</a>
        </div>
      </section>
      <section class="content-band light about-story" data-editable="about-positioning">
        <div class="section-heading">
          <p class="eyebrow">Personal IP Positioning</p>
          <h2>Inventor + examiner + patent attorney + innovation methodology author.</h2>
        </div>
        <div class="series-grid">
          <article class="series-card">
            <p>2012</p>
            <h3>Entered the Chinese patent office</h3>
            <span>After becoming a patent examiner, Ma Su set a personal rule: beyond ordinary examination work, he would read more than 100 patent documents every day and track the newest patent developments.</span>
          </article>
          <article class="series-card">
            <p>Reading to invent</p>
            <h3>From patent reading to patent creation</h3>
            <span>Through massive patent reading, he began writing his own patent applications. That early batch was successfully granted, proving that invention can be trained through method.</span>
          </article>
          <article class="series-card">
            <p>After 2017</p>
            <h3>Two years studying how innovation happens</h3>
            <span>After leaving the patent office, he spent two years researching innovation and gradually formed a mature methodology based on technical-problem decomposition, patent information, and grant logic.</span>
          </article>
          <article class="series-card">
            <p>Practice</p>
            <h3>Hundreds of invention patents in one year</h3>
            <span>He once supported hundreds of invention patent applications within a year, then used the method to help companies upgrade products and guide students to win science innovation awards.</span>
          </article>
        </div>
      </section>
      <section class="trust-strip about-trust" data-editable="about-trust">
        <div><strong>Former CNIPA examiner</strong><span>China patent examination perspective.</span></div>
        <div><strong>Inventor and attorney</strong><span>Understands both creation and grant procedure.</span></div>
        <div><strong>Innovation method</strong><span>Guided companies and youth science innovation projects.</span></div>
        <div><strong>Textbook author</strong><span>Youth science innovation guide and competition handbook builder.</span></div>
      </section>
      <section class="book-feature" data-editable="about-book">
        <figure>
          <img src="assets/book/science-innovation-guide-cover-front.jpg" alt="Science and technology innovation practical tutorial book cover" width="612" height="596" loading="lazy" />
        </figure>
        <div>
          <p class="eyebrow">Book and Curriculum</p>
          <h2>Science and Technology Innovation Practical Tutorial.</h2>
          <p>This book cover represents Ma Su's youth science innovation guide: a practical curriculum that turns observation, problem discovery, patent search, prototype testing, and IP awareness into a route students can actually follow.</p>
          <p>The same method is also being developed into a youth innovation competition handbook, using comics and practical tasks to help students understand how science innovation works in real projects.</p>
          <a class="text-action" href="assets/book/science-innovation-guide-cover-spread.jpg">View full cover spread</a>
        </div>
      </section>
      <section class="content-band light" data-editable="about-yafan-case">
        <div class="section-heading">
          <p class="eyebrow">Youth Innovation Case</p>
          <h2>Planning the Xiegang Yafan Cup youth science innovation competition.</h2>
          <p>Ma Su's youth innovation methodology is not only a textbook idea. It is being translated into local competition design, enterprise R&D visits, IP education, patent search training, product design guidance, roadshow practice, and commercialization pathways.</p>
        </div>
        <div class="series-grid">
          <article class="series-card">
            <p>Local education</p>
            <h3>Xiegang youth innovation brand</h3>
            <span>The competition is designed for primary and secondary students in Xiegang, helping local schools build a repeatable science innovation and IP education activity.</span>
          </article>
          <article class="series-card">
            <p>Enterprise scenario</p>
            <h3>Water-cup product innovation</h3>
            <span>Students work around functional, material, shape, smart-hardware, and prototype innovation for cups, connecting creative ideas with real manufacturing resources.</span>
          </article>
          <article class="series-card">
            <p>IP pathway</p>
            <h3>From idea to patent to product</h3>
            <span>The model introduces patent literacy, patent search, expert review, product design, and selected commercialization so students can see how innovation creates value.</span>
          </article>
        </div>
        <div class="manual-preview">
          <figure>
            <img src="assets/yafan-manual/manual-cover.webp" alt="Yafan Cup water cup innovation practical manual cover" loading="lazy" />
          </figure>
          <div>
            <p class="eyebrow">Practical Handbook</p>
            <h3>From a real cup problem to a competition-ready innovation project.</h3>
            <p>The handbook turns the competition into a step-by-step workbook: observe real use scenes, design a survey, analyze data, search patents, read product cases, build an MVP, use AI for 3D expression, test and iterate, then prepare the roadshow and IP materials.</p>
            <a class="text-action" href="articles/yafan-cup-water-cup-innovation-practical-manual.html">Read the handbook excerpt</a>
          </div>
        </div>
        <a class="text-action" href="articles/xiegang-yafan-cup-youth-innovation-competition.html">Read the competition case</a>
      </section>
      <section class="credentials-section" data-editable="about-credentials">
        <div class="section-heading">
          <p class="eyebrow">Credentials and Proof</p>
          <h2>Documents behind the personal IP story.</h2>
          <p>These credentials support Ma Su's combined identity as a former examiner, patent professional, invention-method practitioner, science communication contributor, and youth innovation mentor.</p>
        </div>
        <div class="credential-gallery">
          ${credentialCards}
        </div>
      </section>`;
  return pageShell("About Ma Su | Ma Su Team", "A concise profile of Ma Su, former CNIPA patent examiner and China IP strategy adviser.", body);
}

function methodologyRelated(html) {
  const related = `
      <section class="content-band light related-methodology" data-editable="methodology-related">
        <div class="section-heading">
          <p class="eyebrow">Related Articles</p>
          <h2>Read more about patent-map guided innovation.</h2>
        </div>
        <div class="content-grid">
          ${articleCard(articles.find((a) => a.slug === "using-patent-information-for-innovation"))}
          ${articleCard(articles.find((a) => a.slug === "enterprise-ipr-patent-mining-five-step-method"))}
          ${articleCard(articles.find((a) => a.slug === "ai-era-patent-mining-and-layout"))}
        </div>
      </section>`;
  const cleaned = html.replace(/\s*<section class="content-band light related-methodology" data-editable="methodology-related">[\s\S]*?<\/section>/g, "");
  return cleaned.replace(/(\s*<section class="contact-section">)/, `${related}$1`);
}

function normalizeTopLevelHeader(file) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) return;
  let html = fs.readFileSync(p, "utf8");
  html = html.replace(/<header class="article-header">[\s\S]*?<\/header>/, nav(""));
  html = html.replace(/<header class="site-header content-header">[\s\S]*?<\/header>/, nav(""));
  fs.writeFileSync(p, html, "utf8");
  fs.writeFileSync(path.join(root, "public", file), html, "utf8");
}

function writeBoth(file, html) {
  fs.writeFileSync(path.join(root, file), html, "utf8");
  fs.writeFileSync(path.join(root, "public", file), html, "utf8");
}

function copyToPublic(file) {
  fs.copyFileSync(path.join(root, file), path.join(root, "public", file));
}

function writeDataFiles() {
  const content = `window.MASU_CONTENT = ${JSON.stringify({ series, articles }, null, 2)};\n`;
  writeBoth("content-data.js", content);
  const ui = `(() => {
  const data = window.MASU_CONTENT || { articles: [], series: [] };
  const list = document.querySelector("#article-list");
  const buttons = document.querySelectorAll("[data-filter]");
  const sort = document.querySelector("#article-sort");
  function renderList(filter = "all") {
    if (!list) return;
    const cards = Array.from(list.querySelectorAll("[data-series]"));
    const order = sort && sort.value === "oldest" ? 1 : -1;
    cards.sort((a, b) => order * a.dataset.date.localeCompare(b.dataset.date));
    cards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.series !== filter;
      list.appendChild(card);
    });
  }
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.toggle("active", item === button));
    renderList(button.dataset.filter);
  }));
  if (sort) sort.addEventListener("change", () => {
    const active = document.querySelector("[data-filter].active");
    renderList(active ? active.dataset.filter : "all");
  });
  renderList();

  const shell = document.querySelector(".article-shell");
  if (!shell) return;
  const slug = location.pathname.split("/").pop().replace(".html", "");
  const current = data.articles.find((article) => article.slug === slug);
  if (!current) return;
  const related = data.articles.filter((article) => article.series === current.series && article.slug !== slug).slice(0, 3);
  const prefix = location.pathname.includes("/articles/") ? "../" : "";
  const author = document.createElement("aside");
  author.className = "author-box";
  author.innerHTML = '<img src="' + prefix + 'assets/credentials/ma-su-portrait.jpg" alt="Ma Su portrait" /><div><p class="eyebrow">Author</p><h3>Ma Su</h3><p>Former CNIPA patent examiner, China IP strategy adviser, and founder of Ma Su Team knowledge center.</p></div>';
  const share = document.createElement("aside");
  share.className = "share-box";
  const pageUrl = encodeURIComponent(location.href);
  share.innerHTML = '<p class="eyebrow">Share</p><a href="https://www.linkedin.com/sharing/share-offsite/?url=' + pageUrl + '">LinkedIn</a><a href="https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + encodeURIComponent(current.title) + '">X</a><button type="button" data-copy-link>Copy link</button>';
  const rec = document.createElement("aside");
  rec.className = "related-articles";
  rec.innerHTML = '<p class="eyebrow">Related Articles</p><h2>Continue this series</h2><div class="content-grid">' + related.map((article) => '<article class="content-card"><p>' + article.category + '</p><h3>' + article.title + '</h3><span>' + article.description + '</span><a href="' + article.slug + '.html">Read article</a></article>').join("") + '</div>';
  shell.prepend(author);
  shell.append(share, rec);
  const copy = share.querySelector("[data-copy-link]");
  copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(location.href);
    copy.textContent = "Copied";
  });
})();\n`;
  writeBoth("content-ui.js", ui);
}

function injectArticleScripts(dir, prefix) {
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".html")) continue;
    const p = path.join(dir, file);
    let html = fs.readFileSync(p, "utf8");
    html = html.replace(/<header class="article-header">[\s\S]*?<\/header>/, nav(prefix));
    html = html.replace(/<header class="site-header content-header">[\s\S]*?<\/header>/, nav(prefix));
    if (!html.includes("content-ui.js")) {
      html = html.replace("</body>", `  <script src="${prefix}content-data.js"></script>\n  <script src="${prefix}content-ui.js"></script>\n</body>`);
    }
    fs.writeFileSync(p, html, "utf8");
  }
}

function main() {
  writeDataFiles();
  writeBoth("index.html", homePage());
  writeBoth("articles.html", articlesPage());
  writeBoth("about.html", aboutPage());
  fs.mkdirSync(path.join(root, "series"), { recursive: true });
  fs.mkdirSync(path.join(root, "public", "series"), { recursive: true });
  for (const s of series) {
    writeBoth(`series/${s.id}.html`, seriesPage(s));
  }
  for (const file of ["methodology.html"]) {
    const updated = methodologyRelated(fs.readFileSync(path.join(root, file), "utf8"));
    writeBoth(file, updated);
  }
  for (const file of ["china-entry.html", "contact.html", "education.html", "europe.html", "hong-kong.html", "methodology.html", "services.html", "vietnam.html"]) {
    normalizeTopLevelHeader(file);
  }
  injectArticleScripts(path.join(root, "articles"), "../");
  injectArticleScripts(path.join(root, "public", "articles"), "../");
  require("./apply_multilingual_support").applyAll();
}

main();
