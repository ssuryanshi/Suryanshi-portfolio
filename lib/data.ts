export const profile = {
  name: "Suryanshi Singh",
  role: "Business Development Executive @ Unison Flow",
  focus: "product · business analytics · consulting",
  education: "B.Tech CSE (Data Science) — Manipal University Jaipur",
  email: "singh.suryanshi101@gmail.com",
  status: "open to opportunities",
};

export const links = {
  github: "https://github.com/ssuryanshi",
  linkedin: "https://www.linkedin.com/in/singhsuryanshi",
  x: "https://x.com/Suryanshi18_",
  medium: "https://medium.com/@singh.suryanshi101",
  email: "mailto:singh.suryanshi101@gmail.com",
  resume: "https://drive.google.com/file/d/1dn7XcNv0auZE_rX-AYch72W2DkNOEtJO/view?usp=sharing",
};

export const projects = [
  {
    slug: "venturepulse",
    name: "VenturePulse",
    tagline: "Startup intelligence from 5,956 YC companies",
    problem:
      "Raw startup data is noisy — investors and analysts can't read momentum from spreadsheets.",
    approach:
      "End-to-end ETL pipeline into a SQLite warehouse, 7 analytical SQL queries with window functions (LAG, ROW_NUMBER) for YoY industry growth and team-size analysis.",
    outcome:
      "Interactive Streamlit dashboard with KPI cards and filterable trend charts — momentum signals readable by non-technical stakeholders.",
    metric: "5,956 startups · 7 analytical queries",
    stack: ["Python", "pandas", "SQL", "SQLite", "Streamlit", "ETL"],
    github: "https://github.com/ssuryanshi/VenturePulse",
    demo: "",
  },
  {
    slug: "mlfoundry",
    name: "MLFoundry",
    tagline: "Explainable AutoML from a single CSV upload",
    problem:
      "Non-ML stakeholders can't trust model outputs they can't interpret — and tuning models manually doesn't scale.",
    approach:
      "Managed end-to-end delivery: scoped requirements, coordinated phases, shipped with CI/CD. 4 ML models, Bayesian HPO (50 Optuna trials vs 1,000+ for grid search), SHAP explainability, 5-fold CV ranking.",
    outcome:
      "Production-ready full-stack platform — upload a CSV, get ranked explainable models.",
    metric: "50 trials vs 1,000+ · 4 models",
    stack: ["Python", "FastAPI", "React", "XGBoost", "Optuna", "SHAP"],
    github: "https://github.com/ssuryanshi/MLFoundry",
    demo: "",
  },
  {
    slug: "codelens",
    name: "CodeLens",
    tagline: "AI architecture summaries for unfamiliar codebases",
    problem:
      "Onboarding onto an unknown repository is slow — architecture knowledge lives in nobody's head.",
    approach:
      "Cloud-native repository analysis on AWS Lambda, S3, and Bedrock — generates architecture summaries and documentation automatically.",
    outcome:
      "Top 100 nationwide among 10,000+ teams — AWS AI for Bharat Hackathon.",
    metric: "Top 100 / 10,000+ teams",
    stack: ["Python", "AWS Lambda", "S3", "Bedrock"],
    github: "https://github.com/ssuryanshi/CodeLens-AI",
    demo: "",
  },
];

export const experience = [
  {
    role: "Business Development Executive",
    org: "Unison Flow Pvt. Ltd.",
    period: "Jul 2025 — Present",
    points: [
      "Represent the company in client-facing meetings across 3+ ongoing institutional pilots — stakeholder communication and requirement gathering end-to-end.",
      "Track delivery timelines and coordinate across product and engineering teams to maintain SLA adherence through weekly status reporting and dependency tracking.",
    ],
  },
  {
    role: "Product Intern",
    org: "Indian Army",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Contributed to the redesign of a vehicle tracking system across 5+ distributed checkpoints — improved operational visibility, reduced manual reporting overhead.",
      "Defined requirements with stakeholders, validated tracking accuracy, documented operational continuity workflows for low-connectivity environments.",
    ],
  },
  {
    role: "National Executive Head & State Convener",
    org: "INDGenius India",
    period: "Jul 2025 — Present",
    points: [
      "Led program operations for a Government of India initiative across multiple state-level events — scheduling, resource allocation, cross-chapter coordination for a 5,000+ student community.",
      "Led state-level operations for 5+ events including stakeholder engagement and post-event reporting.",
    ],
  },
];

export const skills = {
  "programming & data": ["Python", "SQL", "Pandas", "NumPy"],
  analytics: ["EDA", "Data Cleaning", "Data Visualization", "KPI Tracking"],
  "tools & platforms": ["AWS", "Power BI", "Streamlit", "Excel", "Git", "Notion"],
  "ai tooling": ["Claude", "ChatGPT", "Gemini", "Workflow Automation"],
  "business & ops": ["Stakeholder Coordination", "Requirement Gathering", "Process Documentation"],
};

export const achievements = [
  {
    title: "Top 100 — AWS AI for Bharat Hackathon",
    detail: "10,000+ competing teams (CodeLens)",
    highlight: true,
  },
  {
    title: "Rank 330 — Amazon ML Challenge 2025",
    detail: "out of 3,290+ competing teams nationwide",
    highlight: true,
  },
  {
    title: "1st Runner Up — Inter-College Kagglethon",
    detail: "",
    highlight: true,
  },
  { title: "Rank 250 — National AI Olympiad", detail: "Accenture", highlight: false },
  { title: "Selected — Google Build with AI Bootcamp", detail: "", highlight: false },
  { title: "Open Source Contributor — RapidFuzz", detail: "merged PR, Python ecosystem", highlight: false },
];