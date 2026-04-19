import { defineStore } from 'pinia'

export const useMyAppResourceStore = defineStore('myAppResourceStore', {
  state: (): TypeAppResource => ({
    viewportWidth: 0,
    projects: [
      {
        slug: 'project-nelfund',
        title: 'National Student Loan Application Scheme (SLAS)',
        description: 'Digital infrastructure enabling Nigerian students to access federal education loans—secure financial data handling and nationwide integration with universities.',
        images: {
          banner: 'https://res.cloudinary.com/omniswift/image/upload/v1774882485/contact-us-uploads/rrrjrpmcf2fictlobdz8.jpg',
          icon: 'https://nelf.gov.ng/assets/NELFUND-logo.png',
          intro: 'https://res.cloudinary.com/omniswift/image/upload/v1771848069/oswebsite/ubdsylr9tv4tfnjkobhi.jpg',
          challenges: ['https://res.cloudinary.com/omniswift/image/upload/v1775047642/contact-us-uploads/q8seqzfxdgavynghfx9v.jpg', 'https://res.cloudinary.com/omniswift/image/upload/v1771848182/oswebsite/rrmnrtgi1xwlywbiui5q.jpg'],
          technology: 'https://res.cloudinary.com/omniswift/image/upload/v1774882555/contact-us-uploads/okzpiwrq0oqzmx9wyi0x.jpg',
        },
        challenge: {
          title: 'A secure, scalable platform integrated with universities to process Nigerian student loan applications while meeting security and data sovereignty requirements.',
          contents: [
            'The system needed integration with universities across Nigeria.',
            'The system needed to handle sensitive financial and personal data securely.',
            'The platform needed the capacity to process thousands of applications during peak periods.',
            'The system had to comply with government security standards and data sovereignty requirements.',
            'The system needed to protect sensitive financial and personal data from cyber threats.',
            'Maintaining strict compliance with government security and data sovereignty regulations.',
          ],
        },
        solution: {
          title: 'Digital infrastructure enabling Nigerian students to access federal education loans—secure financial data handling and nationwide integration with universities.',
          deliverables: [
            'Built comprehensive loan application and processing platform',
            'Implemented secure data handling for student financial information',
            'Created integration framework connecting 50+ tertiary institutions',
            'Designed for scalability to accommodate program expansion',
            'Deployed with disaster recovery and business continuity protocols',
          ],
          impact: [
            'Mission-critical government service delivered on schedule',
            'Secure handling of student financial data at national scale',
            'Integration with 50+ tertiary institutions across Nigeria',
            'Platform designed for future expansion as program scales',
          ],
        },
        technology: 'Used an array of technologies to build the project including Cloud infrastructure, Data warehouse architecture, Automated analytics engine with Multi-stakeholder integration framework',
        link: 'https://nelf.gov.ng',
      },
      {
        slug: 'project-beezlinq',
        title: 'Beezlinq',
        description: 'Digital wallet and networking platform that keeps professional contacts in one place. It brings digital business cards, NFC cards, email signatures, and virtual backgrounds into a single workflow so users can create, update, and share their presence without scattered tools or lost leads—built for fast, consistent connection anywhere.',
        images: {
          banner: 'banner',
          icon: 'icon',
          intro: 'intro',
          challenges: ['challenge1', 'challenge2'],
          technology: 'technology',
        },

        challenge: {
          title: 'Challenge',
          contents: ['content1', 'content2'],
        },
        solution: {
          title: 'Solution',
          deliverables: ['deliverable1', 'deliverable2'],
          impact: ['impact1', 'impact2'],
        },
        technology: 'wwdwdwd',

        link: 'https://beezlinq.com/',
      },
      {
        slug: 'project-savingsbox',
        title: 'Savings Box',
        description: 'Nigerian fintech and e-commerce app for savings, loans, and investments. Users manage money and goals in one simple flow, with higher-yield savings and credit where available. The Jolly plan ties in everyday groceries and household goods to ease food inflation pressure and support disciplined spending.',
        images: {
          banner: 'https://www.bexit.com.ng/wp-content/uploads/2023/10/SavingsBox-Portolifo-1.jpg',
          icon: '/images/projects/savingsbox.png',
          intro: 'https://www.bexit.com.ng/wp-content/uploads/2023/10/SavingsBox-Portolifo-3.jpg',
          challenges: [
            'https://www.bexit.com.ng/wp-content/uploads/2023/10/SavingsBox-Portolifo-4.jpg',
            'https://www.bexit.com.ng/wp-content/uploads/2023/10/SavingsBox-Portolifo-5.jpg'],
          technology: 'https://www.bexit.com.ng/wp-content/uploads/2023/10/SavingsBox-Portolifo-6.jpg',
        },
        challenge: {
          title:
            'Deliver a secure Nigerian fintech and e-commerce experience that combines savings, credit, and investments with curated retail (Jolly), strong admin controls, and clear data for operations and users.',
          contents: [
            'Users needed one place to save, borrow, invest, and access essentials without juggling multiple products or losing visibility into goals and balances.',
            'Handling money and identity required trustworthy authentication (including 2FA and local auth), session boundaries, and protection against abuse (rate limits and cooldowns surfaced in the UI and enforced server-side).',
            'The admin surface had to match a Figma design while staying responsive, with dynamic content, media workflows (including drag-and-drop image selection), and tools that stay usable under real operational load.',
            'Operations needed granular control: role-based restrictions so pages, actions, and content only appear when the user’s role includes the right permissions.',
            'Payments had to work through established Nigerian providers (Paystack and Flutterwave), including reliable flows for account-to-account transfers where applicable.',
            'Leadership and support teams needed practical reporting: charts, custom views, date filters, progress summaries, and exports (e.g. spreadsheets) without a separate analytics stack for every question.',
          ],
        },
        solution: {
          title:
            'Shipped a Nuxt/Vue admin and customer experience with Laravel-backed services, payments, RBAC, CMS-driven content, and reporting that matches design and security expectations.',
          deliverables: [
            'Implemented the Figma-designed admin CMS and core flows, including responsiveness and UX fixes on the landing page and user dashboard.',
            'Integrated Paystack and Flutterwave for payments and related money movement, including account-to-account transfer flows as supported by the product.',
            'Built a permission model where roles group permissions and access to pages, functions, and content is enforced consistently on the client and server.',
            'Hardened authentication and session handling (correct credentials, limited sessions) and added request throttling with user-visible limits and cooldowns.',
            'Centralized admin-managed content for admin and user surfaces, with steps streamlined for day-to-day curation.',
            'Added data visualization (charts, custom charts, date selectors), progress views, and table export to sheets for operational reporting.',
          ],
          impact: [
            'Users get a single, coherent path for savings, loans, investments, and the Jolly retail layer—supporting discipline against impulse spending and pressure from food inflation.',
            'Stronger trust posture through 2FA, local auth patterns, and mobile biometric options where applicable, plus abuse-aware API usage.',
            'Admins can govern the product safely (RBAC) and run the business from curated content plus charts and exports instead of ad-hoc spreadsheets.',
          ],
        },
        technology:
          'Frontend: Vue.js, Nuxt.js (TypeScript), Vuetify, SCSS; animation: Nuxt-AOS, GSAP. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker, Kubernetes. Payments: Paystack, Flutterwave.',
        link: 'https://savingsbox.ng/',
      },
      {
        slug: 'project-senahomes',
        title: 'Sena Homes Real Estate',
        description: 'UAE-focused listing platform for renting, leasing, and buying property—with no commission to users. It brings sale, purchase, and rental flows together so people can discover and compare homes in one place, with an emphasis on quality listings, a polished experience, and straightforward search and discovery.',
        images: {
          banner: '	https://www.bexit.com.ng/wp-content/uploads/2023/10/SenaHomes-Portfolio-6.jpg',
          icon: '/images/projects/sena-homes.png',
          intro: '	https://www.bexit.com.ng/wp-content/uploads/2023/10/SenaHomes-Portfolio-1.jpg',
          challenges: ['	https://www.bexit.com.ng/wp-content/uploads/2023/10/SenaHomes-Portfolio-5.jpg', '	https://www.bexit.com.ng/wp-content/uploads/2023/10/SenaHomes-Portfolio-4.jpg'],
          technology: '	https://www.bexit.com.ng/wp-content/uploads/2023/10/SenaHomes-Portfolio-3.jpg',
        },
        challenge: {
          title:
            'Build a commission-free UAE property marketplace with a polished public experience, a Figma-faithful admin, and controls strong enough for listings, users, and sensitive account data.',
          contents: [
            'Buyers and renters needed a fast, trustworthy way to discover UAE properties for purchase, lease, or rental—with clear information and a smooth search flow, not a fragmented brochure site.',
            'Operations and marketing needed a CMS-driven site so listings, FAQs, testimonials, reviews, and other surfaces stay current without developer bottlenecks.',
            'The admin app had to follow design specs (Figma), stay responsive, and cover day-to-day UX for both admin and end-user journeys.',
            'Access had to be governed end-to-end: roles bundle permissions, and pages, actions, and content render only when provisioned—reducing mistakes and unauthorized changes.',
            'Authentication and abuse prevention mattered for a public product: correct credentials, optional OAuth alongside local login, 2FA, bounded sessions, and rate limits with cooldowns visible in the UI and enforced server-side.',
            'Leadership needed lightweight analytics inside the product: charts (including custom views), date filters, progress-style reporting, and exporting tables to spreadsheets.',
          ],
        },
        solution: {
          title:
            'Delivered a Nuxt/Vue (TypeScript, Vuex) front end with Laravel services, CMS workflows, RBAC, hardened auth, and reporting—so listings and content scale with the business.',
          deliverables: [
            'Implemented the Figma design for the admin application, including core flows, UX polish, and responsive layouts across admin and user surfaces.',
            'Built CMS sections to create, update, and delete property listings plus supporting content (testimonials, reviews, users, FAQs, and related user-facing blocks).',
            'Implemented a role-and-permission restriction model: roles aggregate permissions; pages, functions, and content respect those grants on client and server.',
            'Shipped authentication options (OAuth and local), 2FA where required, session limits, and request throttling with user-visible limits and cooldown feedback.',
            'Added dynamic content patterns, media handling with drag-and-drop image selection, and data visualization (charts, custom charts, date selectors, exports to sheets).',
          ],
          impact: [
            'End users get a more direct, less noisy path to relevant UAE properties—supporting a streamlined, lower-friction search than typical commission-heavy journeys.',
            'Internal teams and partner brokers/agents can keep inventory and trust signals (reviews, testimonials) fresh through the CMS instead of one-off updates.',
            'Stronger operational control and clearer reporting support better decisions and a more dependable experience as listing volume and traffic grow.',
          ],
        },
        technology:
          'Frontend: Vue.js, Nuxt.js (TypeScript), Vuex. UI: Vuetify, SCSS. Animation: Nuxt-AOS. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker.',

        link: 'https://senahomesrealestate.com/',
      },
    ],
    careerHistory: [
      {
        company: "Omniswift",
        role: "Senior Software Engineer",
        duration: "Mar 2025 - present",
        location: "Abuja, Nigeria",
        employmentType: "Full time",
        descriptions: [
          "Developed and maintained mission critical applications for the Nigerian Government.",
          "Ran teams of upwards of 5 developers and provided technical guidance and mentorship.",
          "Increased client retention rates by completely overhauling new website design improving user experience and conversion rates.",
          "Increased consumer satisfaction rates to 80% by developing and maintaining versatile CRM platform for managing customer interactions and data with a return of new projects of ₦1.5 Billion in revenue",
          "Maintained security protocols accross all sites",
        ],
      },
      {
        company: "Tiqwa",
        role: "Senior Software Engineer",
        duration: "Jan 2024 - Feb 2025",
        location: "Abuja, Nigeria",
        employmentType: "Full time",
        descriptions: [
          "Maintained and improved the administrative section of the travel agency for multitenancy for multiple distinct apps.",
          "Increased client retention rate by 100% by improving and rewriting legacy codes, fixing local storage bugs and improving UI/UX of the admin app.",
          "Implemented new styles, animations and JS logic to give an app-like feel to the web apps.",
          "Created, implemented designs, and cross-platform testing of email structures for multiple email templates.",
          "Owned advanced styling, animation, logic, and fetch automation.",
          "Created a plugin widget that introduced a new pricing plan, raising sales and customer base by 30% and 50% respectively and earning over 3M in subscription sales.",
          "Responsible for user- and admin-facing surfaces across app, admin, and emails.",
        ],
      },
      {
        company: "THCO",
        role: "Frontend Engineer",
        employmentType: "Part time",
        duration: "Aug 2023 - Jan 2025",
        location: "Lagos Nigeria",
        descriptions: [
          "Developed and launched the first AI-driven recruitment software, contributing to a net gain of $98,000 in the first month.",
          "Implemented and maintained the AI-driven recruiting platform from inception through production, including key employee search and data management.",
          "Implemented email systems and campaigns to send, manage, and improve the recruiter experience.",
          "Owned advanced styling, animation, logic, and fetch automation.",
          "Improved user feedback management by creating and registering key employees on Agile, boosting efficiency by 75%.",
          "Responsible for user- and admin-facing surfaces across app, admin, and job boards.",
        ],
      },
      {
        company: "Bex-it Digital Solutions",
        role: "Senior Frontend Developer",
        duration: "Feb 2022 - Nov 2024",
        location: "Abuja, Nigeria",
        employmentType: "Full time",
        descriptions: [
          "Developed and maintained software using React, Nuxt, Vue, Laravel, and MySQL.",
          "Collaborated with cross-functional teams, reducing project delivery timelines from about 8 months to 4-5 months.",
          "Improved development efficiency by about 50% through automated testing and SOPs.",
          "Led CMS development.",
          "Engaged clients to clarify goals and requirements.",
          "Increased maintenance client retention by about 95% through solid code structure and engagement.",
        ],
      },
      {
        company: "Chronicles Software",
        role: "Frontend Developer",
        duration: "Jan 2021 - Nov 2021",
        location: "Lagos, Nigeria",
        employmentType: "Contract",
        descriptions: [
          "Developed and maintained applications using React, Next.js, and Redux.",
          "Collaborated with Windows, mobile, and backend teams, shortening Success-box delivery from about 15 months to about 6 months.",
          "Designed test sessions, ticket response automation, and book-reading animations.",
          "Built CMS features for admin, parents, and teachers.",
          "Engaged clients to clarify goals and requirements.",
          "Increased student retention by about 15% through strong animation and smooth transitions.",
        ],
      },
    ],
    techStack: [
      {
        title: "Frontend Development",
        content: [
          "Vue.js",
          "React.js",
          "Next.js",
          "Nuxt.js",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "GSAP",
          "JavaScript",
          "TypeScript",
        ],
      },
      {
        title: "Backend Development",
        content: ["Node.js", "PHP/Laravel", "Express.js", "MongoDB", "MySQL"],
      },
      {
        title: "Database Management",
        content: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "SQLite",
          "Oracle",
          "SQL Server",
        ],
      },
      {
        title: "DevOps",
        content: [
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Git",
          "GitHub",
          "GitLab",
          "Bitbucket",
        ],
      },
    ],
  }),
  getters: {},
  actions: {}
})
