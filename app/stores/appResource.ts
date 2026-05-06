import { defineStore } from "pinia";

export const useMyAppResourceStore = defineStore("myAppResourceStore", {
	state: (): TypeAppResource => ({
		viewportWidth: 0,
		backgroundBlur: "",
		projects: [
			{
				slug: "project-nelfund",
				title: "National Student Loan Application Scheme (SLAS)",
				description:
					"Digital infrastructure enabling Nigerian students to access federal education loans—secure financial data handling and nationwide integration with universities.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743773/banner_ucog8u.jpg",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743773/logo_wo90r6.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743767/1_wlvjew.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743768/2_jdnccr.jpg",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743771/3_x82mdd.jpg",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743772/4_lu49fk.jpg",
				},
				challenge: {
					title:
						"A secure, scalable platform integrated with universities to process Nigerian student loan applications while meeting security and data sovereignty requirements.",
					contents: [
						"The system needed integration with universities across Nigeria.",
						"The system needed to handle sensitive financial and personal data securely.",
						"The platform needed the capacity to process thousands of applications during peak periods.",
						"The system had to comply with government security standards and data sovereignty requirements.",
						"The system needed to protect sensitive financial and personal data from cyber threats.",
						"Maintaining strict compliance with government security and data sovereignty regulations.",
					],
				},
				solution: {
					title:
						"Digital infrastructure enabling Nigerian students to access federal education loans—secure financial data handling and nationwide integration with universities.",
					deliverables: [
						"Built comprehensive loan application and processing platform",
						"Implemented secure data handling for student financial information",
						"Created integration framework connecting 50+ tertiary institutions",
						"Designed for scalability to accommodate program expansion",
						"Deployed with disaster recovery and business continuity protocols",
					],
					impact: [
						"Mission-critical government service delivered on schedule",
						"Secure handling of student financial data at national scale",
						"Integration with 50+ tertiary institutions across Nigeria",
						"Platform designed for future expansion as program scales",
					],
				},
				technology:
					"Used an array of technologies to build the project including Cloud infrastructure, Data warehouse architecture, Automated analytics engine with Multi-stakeholder integration framework",
				link: "https://nelf.gov.ng",
				client: "Government",
				type: "education",
				duration: "1 year",
				year: "2024",
			},
			{
				slug: "project-nti",
				title: "National Teachers' Institute",
				description:
					"Academic and administrative systems for universities and polytechnics. Our platforms manage student applications, records, course delivery, and payments, serving tens of thousands of students annually.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743828/banner_zjjhpj.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743801/logo_d7htys.svg",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743816/1_fi5o3x.jpg",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743840/2_go3nqn.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743824/4_pi56uu.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743848/3_hgoqpf.jpg",
				},
				challenge: {
					title:
						"Nigerian universities, polytechnics, and colleges required reliable digital systems to manage core academic operations.",
					contents: [
						"Handle 50,000+ applications annually during peak admission windows",
						"Operate under intermittent connectivity conditions",
						"Integrate with legacy academic and financial systems",
						"Ensure long-term data accuracy and security",
						"Downtime during admissions directly impacts institutional revenue and reputation.",
						"Optimize platforms based on 10 years of operational data",
					],
				},
				solution: {
					title:
						"Designed, deployed, and operated student portal platforms for over 10 years, engineered for scale, reliability, and continuous optimization.",
					deliverables: [
						"Developed and operated student portal platforms for 10+ years",
						"Built systems handling 50,000+ applications annually (500,000+ total)",
						"Implemented load balancing for peak admission periods",
						"Created offline-capable interfaces for low-connectivity scenarios",
						"Integrated with the existing university academic and financial systems",
					],
					impact: [
						"500,000+ student applications successfully processed",
						"99.9% uptime maintained during critical admission windows",
						"Zero data loss incidents over decade of operations",
						"Platforms continuously optimized based on 10 years of usage data",
					],
				},
				technology:
					"Used an array of technologies to build the project including Cloud infrastructure, Data warehouse architecture, Automated analytics engine with Multi-stakeholder integration framework",
				link: "https://www.my.nti.edu.ng/",
				client: "Government",
				type: "education",
				duration: "1 year",
				year: "2023",
			},
			{
				slug: "project-primes",
				title: "Presidential Metering Initiative Platform",
				description:
					"An enterprise-grade system to track and manage the entire meter asset lifecycle, from procurement and warehousing through installation and operation",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743942/banner_lokkfl.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743907/logo_avbvss.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743914/1_ed9riu.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743907/2_lcw4jp.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743955/3_rabrsv.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743939/4_q2ov7l.jpg",
				},
				challenge: {
					title:
						"Managing a 5-million-meter deployment across a 3-year national rollout",
					contents: [
						"Building an enterprise-grade system to manage and track the end-to-end meter asset lifecycle at national scale",
						"Deploying and managing 5 million electricity meters within 3 years",
						"Handling complex coordination between procurement, warehousing, installation, and operations",
						"Enabling effective cost management and financial tracking",
						"Supporting data-driven decision-making across the initiative",
						"Scaling the system to handle national-level operations and high data volume",
					],
				},
				solution: {
					title:
						"Built a cloud-hosted enterprise platform providing end-to-end visibility and control over the national meter deployment program",
					deliverables: [
						"5 million meter deployment tracked across 3-year national rollout across all 36 states and the FCT",
						"Complete meter asset lifecycle management system",
						"Cost and benefit tracking across the program",
						"Analytics dashboards for data-driven decision-making",
						"Comprehensive data warehouse for collection, storage, and analysis",
						"Automated reporting and analytics engine",
					],
					impact: [
						"5 million meter deployment tracked across 3-year national rollout",
						"Real-time data accessible to stakeholders from anywhere",
						"Automated progress and analytics reports generated continuously",
						"Data-driven insights supporting program optimization decisions",
						"Scalable cloud infrastructure ensuring high availability and global access",
					],
				},
				technology:
					"Used an array of technologies to build the project including Cloud infrastructure, Secure databases, API integration framework and Compliance security layers",
				link: "https://64-23-142-69.nip.io",
				client: "Government",
				type: "power",
				duration: "2 years",
				year: "2023",
			},
			{
				slug: "project-asterlio",
				title: "Asterlio",
				description:
					"Omnichannel customer-support CRM that pulls social, chat, and email into one Nuxt dashboard—tickets, routing, automations, and team analytics so agents respond faster with clearer context. Public experience at asterlio.com; authenticated product workspace at dev-app.asterlio.com.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743466/banner_cc5bbs.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743461/logo_vthc9n.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743464/1_bmjsec.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743467/2_fepxro.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743467/3_czhewm.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743465/4_yfmoip.png",
				},
				challenge: {
					title:
						"Give growing teams one place to run support across WhatsApp, Instagram, Facebook, live site chat, and email—without losing speed, accountability, or visibility into volume, SLAs, and satisfaction.",
					contents: [
						"Conversations were scattered across channels, making it hard to prioritize work, avoid duplicate replies, and keep a single customer timeline.",
						"Leaders needed trustworthy metrics—ticket mix, response and resolution times, CSAT, and staff availability—without exporting everything to spreadsheets.",
						"Support workflows had to scale with teams: assignments, escalations, categories, and lightweight automation so agents focus on complex issues.",
						"The product had to feel approachable for non-technical operators: fast onboarding, trial-friendly onboarding, and integrations connected with guided steps rather than custom code.",
						"Customer data handling had to align with expectations around security and compliance (e.g. GDPR/CCPA) as messaging volume and retention grow.",
						"The authenticated CRM experience needed a modern, responsive Nuxt workspace separate from the marketing site, with social sign-in options where appropriate.",
					],
				},
				solution: {
					title:
						"Shipped a Nuxt-based Asterlio workspace and marketing presence that unifies omnichannel conversations, ticket operations, collaboration, and analytics in one CRM-style dashboard.",
					deliverables: [
						"Built the customer-facing story and flows on asterlio.com—positioning, pricing, FAQs, and trial entry points including team-dashboard messaging.",
						"Implemented the authenticated support CRM at https://app.asterlio.com/ with login, email/password, and OAuth options (e.g. Google and Facebook) aligned with the product narrative.",
						"Delivered an omnichannel inbox model covering WhatsApp Business, Instagram DMs, Facebook Messenger, website live chat, and email in one operational view.",
						"Implemented ticket management patterns—categories, status views, recent queues, and collaboration primitives such as assignment and escalation—to keep workloads organized.",
						"Added analytics surfaces for operational insight: ticket counts and trends, response/resolution time ranges, CSAT, category breakdowns, date-range filters, and staff online/offline summaries.",
						"Documented a low-friction integration story for business users (guided connection, no coding required) and enterprise-oriented assurances around encryption, data residency posture, and regulatory alignment described on the public site.",
					],
					impact: [
						"Support teams can centralize conversations instead of context-switching across vendor apps, improving consistency and time-to-first-response.",
						"Managers gain readable operational dashboards that tie channel volume to team performance and customer satisfaction.",
						"The split between marketing (asterlio.com) and the Nuxt CRM (app.asterlio.com) keeps acquisition clear while giving agents a focused daily workspace.",
					],
				},
				technology:
					"Nuxt.js (Vue, TypeScript) authenticated CRM at dev-app.asterlio.com; public marketing and trial flows at asterlio.com; omnichannel integrations (WhatsApp Business, Instagram, Facebook Messenger, live chat, email); in-product ticket workflows and analytics; OAuth on the login experience (e.g. Google, Facebook); security and compliance messaging aligned with public documentation (encryption, GDPR/CCPA).",
				link: "https://asterlio.com/",
				client: "Omniswift",
				type: "productivity",
				duration: "1 year",
				year: "2025",
			},
			{
				slug: "project-beezlinq",
				title: "Beezlinq",
				description:
					"Digital wallet and networking platform that keeps professional contacts in one place. It brings digital business cards, NFC cards, email signatures, and virtual backgrounds into a single workflow so users can create, update, and share their presence without scattered tools or lost leads—built for fast, consistent connection anywhere.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743726/banner_yxv9g8.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743714/logo_n9pbdr.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743713/1_q95duu.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743719/2_zamk6r.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743721/3_fryg92.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743725/4_dzfl5y.png",
				},
				challenge: {
					title:
						"Replace scattered “contact me” links, PDFs, and one-off profiles with one shareable digital identity that feels premium, stays current, and works everywhere professionals meet.",
					contents: [
						"Professionals still lose momentum when their details live in too many places—static cards, inboxes, and social DMs—without a single canonical profile they can update once.",
						"First-time users need a low-friction path from discovery to an active card: clear sign-up, familiar login options, and password recovery when they return after a gap.",
						"A digital card product has to earn trust quickly: polished visuals, responsive layouts, and authentication choices (email/password plus OAuth) that match how people already sign in elsewhere.",
						"Networking products compete on speed to share: generating links, QR-style handoffs, NFC, signatures, or backgrounds must not feel like separate mini-apps bolted together.",
						"As profiles grow richer (media, links, social proof), the “wallet” metaphor should keep cards organized and easy to manage without overwhelming casual users.",
						"The stack had to stay maintainable as the product evolves—Nuxt gives structured routing, SSR/SPA flexibility, and a consistent component model for marketing and authenticated surfaces.",
					],
				},
				solution: {
					title:
						"Delivered a Nuxt-based Beezlinq experience that centers an eWallet for digital business cards, with onboarding and return visits handled through the dedicated login and sign-up flows.",
					deliverables: [
						"Implemented the public product story on beezlinq.com around an eWallet for digital business cards—emphasizing a stylish, easy-to-share card for meaningful connections.",
						"Built the authentication surface at beezlinq.com/login with email/password login, account creation, forgot-password recovery, and OAuth entry points for Google and LinkedIn.",
						"Structured the app as a Nuxt application so marketing, auth, and wallet-style card management can share layouts, state patterns, and deployment conventions.",
						"Aligned UX copy and flows with the product promise: grow your network with a digital business card that is simple to use and share at the point of introduction.",
						"Extended the networking model beyond a single static page—supporting richer presence formats (e.g. NFC, email signatures, virtual backgrounds) within one coherent product narrative where applicable.",
					],
					impact: [
						"Users move from fragmented contact exchange to one primary link or asset they control, reducing “wrong number / old title” moments after a role change.",
						"Social and email-based sign-in lowers drop-off for returning users compared to forcing yet another unique password for a niche tool.",
						"Nuxt’s conventions support faster iteration on landing, auth, and in-app surfaces as Beezlinq adds channels and card formats.",
					],
				},
				technology:
					"Nuxt.js (Vue, TypeScript) application for marketing and authenticated experiences; email/password authentication with sign-up and password reset flows; OAuth (Google, LinkedIn) on the login surface; digital business card / eWallet domain features as exposed in the product (e.g. NFC, signatures, backgrounds) integrated into a single Nuxt codebase pattern.",
				link: "https://beezlinq.com/",
				client: "Beezlinq",
				type: "productivity",
				duration: "1 year",
				year: "2023",
			},
			{
				slug: "project-savingsbox",
				title: "Savings Box",
				description:
					"Nigerian fintech and e-commerce app for savings, loans, and investments. Users manage money and goals in one simple flow, with higher-yield savings and credit where available. The Jolly plan ties in everyday groceries and household goods to ease food inflation pressure and support disciplined spending.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743905/banner_pl6qpc.jpg",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743906/logo_k0n9qn.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743902/1_yuz76v.jpg",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743903/2_gzzr3p.jpg",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743902/3_w259a3.jpg",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743904/4_ujh6f5.jpg",
				},
				challenge: {
					title:
						"Deliver a secure Nigerian fintech and e-commerce experience that combines savings, credit, and investments with curated retail (Jolly), strong admin controls, and clear data for operations and users.",
					contents: [
						"Users needed one place to save, borrow, invest, and access essentials without juggling multiple products or losing visibility into goals and balances.",
						"Handling money and identity required trustworthy authentication (including 2FA and local auth), session boundaries, and protection against abuse (rate limits and cooldowns surfaced in the UI and enforced server-side).",
						"The admin surface had to match a Figma design while staying responsive, with dynamic content, media workflows (including drag-and-drop image selection), and tools that stay usable under real operational load.",
						"Operations needed granular control: role-based restrictions so pages, actions, and content only appear when the user’s role includes the right permissions.",
						"Payments had to work through established Nigerian providers (Paystack and Flutterwave), including reliable flows for account-to-account transfers where applicable.",
						"Leadership and support teams needed practical reporting: charts, custom views, date filters, progress summaries, and exports (e.g. spreadsheets) without a separate analytics stack for every question.",
					],
				},
				solution: {
					title:
						"Shipped a Nuxt/Vue admin and customer experience with Laravel-backed services, payments, RBAC, CMS-driven content, and reporting that matches design and security expectations.",
					deliverables: [
						"Implemented the Figma-designed admin CMS and core flows, including responsiveness and UX fixes on the landing page and user dashboard.",
						"Integrated Paystack and Flutterwave for payments and related money movement, including account-to-account transfer flows as supported by the product.",
						"Built a permission model where roles group permissions and access to pages, functions, and content is enforced consistently on the client and server.",
						"Hardened authentication and session handling (correct credentials, limited sessions) and added request throttling with user-visible limits and cooldowns.",
						"Centralized admin-managed content for admin and user surfaces, with steps streamlined for day-to-day curation.",
						"Added data visualization (charts, custom charts, date selectors), progress views, and table export to sheets for operational reporting.",
					],
					impact: [
						"Users get a single, coherent path for savings, loans, investments, and the Jolly retail layer—supporting discipline against impulse spending and pressure from food inflation.",
						"Stronger trust posture through 2FA, local auth patterns, and mobile biometric options where applicable, plus abuse-aware API usage.",
						"Admins can govern the product safely (RBAC) and run the business from curated content plus charts and exports instead of ad-hoc spreadsheets.",
					],
				},
				technology:
					"Frontend: Vue.js, Nuxt.js (TypeScript), Vuetify, SCSS; animation: Nuxt-AOS, GSAP. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker, Kubernetes. Payments: Paystack, Flutterwave.",
				link: "https://savingsbox.ng/",
				client: "Savings Box",
				type: "fintech",
				duration: "1 year",
				year: "2024",
			},
			{
				slug: "project-senahomes",
				title: "Sena Homes Real Estate",
				description:
					"UAE-focused listing platform for renting, leasing, and buying property—with no commission to users. It brings sale, purchase, and rental flows together so people can discover and compare homes in one place, with an emphasis on quality listings, a polished experience, and straightforward search and discovery.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743978/banner_apdaso.jpg",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743986/logo_l0njei.jpg",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743972/1_dtvywr.jpg",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743977/2_mhem0b.jpg",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743975/3_ummvhx.jpg",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743977/4_liiwza.jpg",
				},
				challenge: {
					title:
						"Build a commission-free UAE property marketplace with a polished public experience, a Figma-faithful admin, and controls strong enough for listings, users, and sensitive account data.",
					contents: [
						"Buyers and renters needed a fast, trustworthy way to discover UAE properties for purchase, lease, or rental—with clear information and a smooth search flow, not a fragmented brochure site.",
						"Operations and marketing needed a CMS-driven site so listings, FAQs, testimonials, reviews, and other surfaces stay current without developer bottlenecks.",
						"The admin app had to follow design specs (Figma), stay responsive, and cover day-to-day UX for both admin and end-user journeys.",
						"Access had to be governed end-to-end: roles bundle permissions, and pages, actions, and content render only when provisioned—reducing mistakes and unauthorized changes.",
						"Authentication and abuse prevention mattered for a public product: correct credentials, optional OAuth alongside local login, 2FA, bounded sessions, and rate limits with cooldowns visible in the UI and enforced server-side.",
						"Leadership needed lightweight analytics inside the product: charts (including custom views), date filters, progress-style reporting, and exporting tables to spreadsheets.",
					],
				},
				solution: {
					title:
						"Delivered a Nuxt/Vue (TypeScript, Vuex) front end with Laravel services, CMS workflows, RBAC, hardened auth, and reporting—so listings and content scale with the business.",
					deliverables: [
						"Implemented the Figma design for the admin application, including core flows, UX polish, and responsive layouts across admin and user surfaces.",
						"Built CMS sections to create, update, and delete property listings plus supporting content (testimonials, reviews, users, FAQs, and related user-facing blocks).",
						"Implemented a role-and-permission restriction model: roles aggregate permissions; pages, functions, and content respect those grants on client and server.",
						"Shipped authentication options (OAuth and local), 2FA where required, session limits, and request throttling with user-visible limits and cooldown feedback.",
						"Added dynamic content patterns, media handling with drag-and-drop image selection, and data visualization (charts, custom charts, date selectors, exports to sheets).",
					],
					impact: [
						"End users get a more direct, less noisy path to relevant UAE properties—supporting a streamlined, lower-friction search than typical commission-heavy journeys.",
						"Internal teams and partner brokers/agents can keep inventory and trust signals (reviews, testimonials) fresh through the CMS instead of one-off updates.",
						"Stronger operational control and clearer reporting support better decisions and a more dependable experience as listing volume and traffic grow.",
					],
				},
				technology:
					"Frontend: Vue.js, Nuxt.js (TypeScript), Vuex. UI: Vuetify, SCSS. Animation: Nuxt-AOS. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker.",

				link: "https://senahomesrealestate.com/",
				client: "Sena Homes",
				type: "real estate",
				duration: "6 Months",
				year: "2024",
			},
			{
				slug: "project-realtimepay",
				title: "RealtimePay",
				description:
					"Modern utility web app for paying bills in one place—tokens, airtime, data, cable, and education pins—with secure wallet funding and real-time delivery. The experience is built around a single, clean dashboard for purchases, wallet top-ups, and account management, with security measures including two-factor authentication and protected payments.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743920/banner_ot3g5s.jpg",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743912/logo_hjkxyu.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743947/3_wwj2he.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743913/1_vpwvrf.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743920/2_s1pbpd.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743913/4_oav9vf.png",
				},
				challenge: {
					title:
						"Ship a modern, one-stop utility payments product—wallet-funded purchases, many bill categories, and admin tooling—without sacrificing speed, clarity, or trust at checkout.",
					contents: [
						"Users needed a single place to buy electricity tokens, mobile airtime, internet data, cable TV subscriptions, and education pins (e.g. WAEC registration and result checker)—instead of juggling multiple vendors and portals.",
						"Utility purchases demand reliability: users expect secure payments, funded wallets, and near real-time fulfillment when services are dispatched.",
						"The experience had to feel contemporary and easy to scan—strong landing and app UI, responsive layouts, and consistent UX across admin and customer surfaces, implemented from Figma.",
						"Operations required a CMS-driven workflow so marketing pages, banners, FAQs, and in-app content can change quickly, including media workflows (dynamic content and drag-and-drop image selection).",
						"Because money movement is involved, access control had to be strict: roles group permissions, and pages, functions, and user-visible content must align with what each role is provisioned to do.",
						"The platform needed practical safeguards: OAuth and local login paths, 2FA, bounded sessions, and anti-abuse controls with rate limits and cooldowns communicated in the UI and enforced server-side—plus reporting for monitoring performance and volume.",
					],
				},
				solution: {
					title:
						"Built a Nuxt/Vue (TypeScript) utility stack on Laravel with Paystack funding, RBAC, CMS-driven content, and in-product analytics—optimized for fast bill purchases and dependable operations.",
					deliverables: [
						"Implemented Figma designs for the admin app and landing page, including core purchase and account flows, UX refinements, and responsive behavior across admin, user app, and marketing surfaces.",
						"Integrated Paystack as the payment channel for wallet funding and bill payments, aligned with the product’s checkout and reconciliation needs.",
						"Implemented role-based restrictions: permissions are provisioned through roles and enforced for pages, actions, and content on both client and server.",
						"Delivered authentication and security controls (OAuth and local auth, 2FA, session limits) plus request throttling with user-visible limits and cooldown states.",
						"Shipped CMS-backed content for admin and user experiences with simplified editorial steps, alongside charts, custom charts, date selectors, progress reporting, and spreadsheet exports.",
					],
					impact: [
						"Customers replace several fragmented portals with one streamlined bill-payment workflow, improving convenience for individuals and businesses.",
						"Stronger security posture and clearer controls reduce operational risk as transaction volume grows.",
						"Admin reporting and exports support faster decisions and fewer manual reconciliations compared to ad-hoc spreadsheets.",
					],
				},
				technology:
					"Frontend: Vue.js, Nuxt.js (TypeScript), Pinia, Vuex. UI: Vuetify, SCSS, Tailwind. Animation: Nuxt-AOS, GSAP, vue-auto-animate. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker. Payments: Paystack.",
				link: "https://realtimepay.ng",
				client: "RealtimePay",
				type: "power",
				duration: "6 Months",
				year: "2024",
			},
			{
				slug: "project-safecircle",
				title: "SafeCircle Capital",
				description:
					"Digital group savings for families, friends, and coworkers—inspired by rotating savings circles (susu, partner, tanda) with clear schedules, transparent balances, and direct bank rails instead of informal cash handling. Marketing and education live at safecirclecapital.com; members run circles in a Next.js app at app.safecirclecapital.com, including login with phone or email, Google, and Apple.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743921/banner_lg2eg0.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743920/logo_x8iwgn.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743931/1_kqwbbd.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743948/2_zfs3ll.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743934/3_dn1vuy.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743918/4_bh9mso.png",
				},
				challenge: {
					title:
						"Move trusted community saving online without losing clarity: fixed rules, visible payout order, honest contribution history, and bank-linked money movement people can audit—without the platform acting as an opaque custodian.",
					contents: [
						"Informal circles work on trust but break down when schedules, who paid, and whose turn is next live only in chats and memory.",
						"Members expect payouts to hit real bank accounts on time, with notifications and a clear rotation—not informal handoffs that create disputes.",
						"The product promised “no intermediaries” positioning: connect banks and facilitate member-to-member flows rather than pooling funds in a black box.",
						"Automatic contributions require bank-grade connections and identity checks (e.g. Plaid-style linking and KYC) so fraud and mistaken pulls are minimized.",
						"Admins need control to define contribution size, cadence, group size, start date, payout order, and member invites—while members need read-only transparency into the same plan.",
						"Missed payments need a fair, visible policy: risk signals, admin alerts, retries where automation exists, and eventual removal paths that stay consistent with group agreements.",
					],
				},
				solution: {
					title:
						"Shipped a Next.js member experience and public acquisition site that digitizes rotating group savings with schedules, transparency tooling, and Plaid-backed bank connectivity framed around U.S. security expectations.",
					deliverables: [
						"Reflected the public value proposition on safecirclecapital.com: “Save Smarter Together,” how-it-works storytelling, FAQs (payouts, security, group creation, missed payments, payout order), pricing tiers, and resources (blogs, help center, guides).",
						"Implemented the authenticated product entry at app.safecirclecapital.com/login—welcome flows for trusted circles, phone-or-email login, SMS consent paths where required, password recovery, and OAuth with Google and Apple plus account creation gated by Terms and Privacy acceptance.",
						"Modeled group lifecycle flows aligned with the marketing narrative: admins create savings groups, set contribution amount, frequency, size, and start date, invite members, and configure payout order visible to the whole circle.",
						"Surfaced transparency features described on the site: who contributed, what is due next, and group health in near real time so the circle stays aligned without side spreadsheets.",
						"Documented and productized operational rules from the FAQ layer—direct bank payout on a member’s turn, KYC expectations for automated payments, retry behavior, and admin discretion on persistent delinquency.",
					],
					impact: [
						"Groups can keep the cultural savings model they already trust while reducing confusion and conflict from informal tracking.",
						"Bank-linked, KYC-aware automation makes recurring contributions and payouts more repeatable than cash-only circles at scale.",
						"Clear admin-configured payout order and member visibility reinforce the “full transparency” promise central to adoption.",
					],
				},
				technology:
					"Next.js (React, TypeScript) for the member web app at app.safecirclecapital.com; public marketing and self-serve education at safecirclecapital.com; bank connectivity and security positioning including Plaid for integrations, bank-level encryption, and KYC for automated payments; OAuth (Google, Apple) and phone/email authentication on the login experience; mobile distribution via App Store and Google Play as listed on the marketing site.",
				link: "https://www.safecirclecapital.com/",
				client: "SafeCircle Capital",
				type: "fintech",
				duration: "8 Months",
				year: "2025",
			},
			{
				slug: "project-pharmachain",
				title: "Pharmachain AI",
				description:
					"AI-assisted medicine discovery across a large verified pharmacy network—search by location, see availability-oriented results, and reduce blind phone calls. Public story and token positioning live on pharmachains.ai; authenticated access and search workflows run in a Nuxt app at app.pharmachains.ai, with sign-in via username, email, or phone, password, remember-me, Google OAuth, and sign-up.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743821/banner_xrpoow.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743798/logo_dwq4gr.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743801/1_jmz0sa.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743809/2_rflile.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743834/3_ehpjav.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743803/4_ngyin2.png",
				},
				challenge: {
					title:
						"Help patients find real stock and fair options fast—without pharmacy-hopping, opaque pricing, or weak authenticity signals—while still fitting into how people already search when they are stressed or ill.",
					contents: [
						"Classic workflows force people into queues and repeated calls, often learning a medicine is unavailable only after travel or long waits.",
						"There is rarely trustworthy, near–real-time visibility into which nearby pharmacies actually carry a SKU before someone leaves home.",
						"Price and convenience vary widely, yet most consumers lack a simple way to compare trusted options side by side.",
						"Counterfeits and uncertain provenance erode confidence; patients need stronger authenticity and traceability narratives than a generic web search.",
						"The product must scale discovery across a very large pharmacy footprint while keeping results localized and understandable for non-technical users.",
						"A utility token and Web3 layer ($PHAI) has to be explained without alienating mainstream users who only want medicine quickly and safely.",
					],
				},
				solution: {
					title:
						"Shipped a Nuxt-powered Pharmachain workspace plus a marketing site that frames AI search, in-app pharmacy messaging, location-aware matching, and $PHAI-powered utility—from discovery through pharmacy onboarding.",
					deliverables: [
						"Built the acquisition narrative on pharmachains.ai: “Find Your Medicine in Seconds,” problem/solution story (queues, blind search, access, cost, trust), location-first search UX, chat-and-confirm positioning, and “Pharmachain in action” walkthroughs.",
						"Surfaced the $PHAI utility story as described publicly—search fuel, contributor rewards tied to a decentralized knowledge graph, authenticity/traceability framing, and sustainability mechanics (burn/redistribution)—alongside starter incentives such as bonus $PHAI for new users.",
						"Implemented the authenticated entry at app.pharmachains.ai/login with flexible identifier login (username, email, or phone), password, remember-me, forgot-password recovery, Google OAuth, and sign-up paths with Terms and Privacy links.",
						"Aligned product flows with the marketed loop: set location, run a single AI-backed search across the verified pharmacy network, compare nearby options, and shortlist a pharmacy with confidence before pickup.",
						"Added pharmacy-side growth surface on the marketing site (e.g. pre-registration / onboarding interest) so the network can expand beyond consumer search alone.",
					],
					impact: [
						"Patients can replace ad-hoc calling with one guided search and optional in-app confirmation, shrinking time-to-answer when a prescription is urgent.",
						"Pharmacies gain a clearer channel for demand and verification instead of only reactive phone traffic.",
						"Tokenized authenticity and reward narratives, when adopted, strengthen trust and data quality feedback loops beyond a traditional directory.",
					],
				},
				technology:
					"Nuxt.js (Vue, TypeScript) for the authenticated web app at app.pharmachains.ai; public marketing and education at pharmachains.ai; AI-driven medicine search and availability matching across a broad verified pharmacy set; Web3 / $PHAI utility positioning for searches, contributor rewards, and on-chain authenticity narratives; OAuth (Google) on the login surface.",
				link: "https://pharmachains.ai/",
				client: "Pharmachain AI",
				type: "healthcare",
				duration: "8 Months",
				year: "2025",
			},
			{
				slug: "project-successbox",
				title: "SuccessBOX",
				description:
					"Premium Nigerian digital learning for JSS1-SS3: 45+ curriculum-aligned subjects, 120+ interactive e-Textbooks, 50,000+ CBT-style practice items, smart progress analytics, and exam tracks for WAEC, NECO, JAMB, and BECE—studiable across devices with account sync. Marketing and acquisition live on successbox.ng; learners continue on a React web app at successbox.ng/login with email/password, remember-me, Google and Facebook sign-in, and password recovery.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743991/banner_pansnv.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743985/logo_ab48es.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743992/1_pdz37i.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743982/2_rvbenx.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743991/3_hrmqnn.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743986/4_lp9psn.png",
				},
				challenge: {
					title:
						"Deliver a national-grade secondary learning product that feels as rich as paper plus video, yet stays organized, measurable, and affordable at scale for students, parents, and partner schools.",
					contents: [
						"Learners need Nigerian curriculum fidelity (JSS1-SS3) with credible pathways into high-stakes exams—not generic international content bolted on.",
						"Digital textbooks must go beyond PDFs: embedded media, in-chapter interaction, search, and annotation patterns that survive real study sessions.",
						"Practice at scale (tens of thousands of CBT items) only helps if explanations, analytics, and weak-area routing turn volume into better outcomes.",
						"Students study on phones, tablets, and desktops; progress, bookmarks, and attempts must sync so switching devices never resets momentum.",
						"Schools and families expect transparent pricing, institutional options, and trust signals (reviews, partner schools) comparable to offline tutoring brands.",
						"Authentication and return visits must be frictionless—familiar email login plus social options—so daily study habits actually stick.",
					],
				},
				solution: {
					title:
						"Shipped a React-based SuccessBOX experience and public marketing site that package curriculum breadth, interactive e-Textbooks, large practice banks, analytics, and exam prep into one coherent student journey.",
					deliverables: [
						"Implemented the public story on successbox.ng: positioning as Nigeria's advanced digital education platform, feature grid (curriculum, e-Textbooks, CBT practice, analytics, multi-device, exam prep), subject showcase, partner-school trust band, testimonials, FAQ (product definition, pricing from ₦2,500/month, multi-device sync, curriculum alignment), and contact paths.",
						"Built the learner entry at successbox.ng/login—welcome-back framing, email and password with remember-me, forgot password, OAuth with Google and Facebook, and sign-up handoff for new accounts.",
						"Reflected the interactive textbook value proposition: highlights and notes, embedded explanatory video, in-chapter quizzes, and cross-library search as marketed on the landing experience.",
						"Surfaced analytics and exam-excellence modules aligned with public copy: performance insight, WAEC/NECO/JAMB/BECE preparation tracks, and large CBT question banks with explanations.",
						"Documented multi-device continuity and subscription flexibility in-product and on marketing pages so institutions can inquire while individuals self-serve.",
					],
					impact: [
						"Students replace fragmented PDFs, random YouTube, and last-minute cram apps with one structured path tied to Nigerian standards and major exams.",
						"Teachers and families gain visibility into progress instead of guessing whether self-study is working.",
						"Partner schools can endorse a single digital layer that still feels premium enough to sit beside physical textbooks.",
					],
				},
				technology:
					"React.js (TypeScript) web platform for authenticated learning and account flows on successbox.ng (including successbox.ng/login); curriculum-aligned digital content delivery; interactive e-Textbook patterns (media, annotations, in-content assessment); large-scale CBT practice with analytics; OAuth (Google, Facebook); multi-device session/sync as described on the public site; operated in ecosystem context with Chronicles Software as noted on successbox.ng.",
				link: "https://successbox.ng/",
				client: "SuccessBOX",
				type: "education",
				duration: "1 year",
				year: "2021",
			},
			{
				slug: "project-tiqwa",
				title: "Tiqwa",
				description:
					"Travel technology stack that opens inventory to agencies, tour operators, and fintechs: REST developer APIs, smart booking widget, white-label OTA, B2B agent tooling, and corporate travel—combining Amadeus Enterprise with Tiqwa's consolidator layer for SOTO and African local airline coverage. Public platform story at tiqwa.com; next-generation Anchor onboarding and account creation at https://v2.tiqwa.com/create-account.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743992/banner_jf7nlb.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743974/logo_l1t9u9.ico",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743971/1_r8gdfl.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743971/2_kldbdk.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743987/3_fnxp1k.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743972/4_r27rct.png",
				},
				challenge: {
					title:
						"Unify global GDS-grade flight capability with local African inventory, then ship it through multiple go-to-market shapes—raw API, embeddable widget, full OTA, B2B desks, and corporate policy—without fragmenting admin, payments, or trust.",
					contents: [
						"Travel sellers still rebuild the same integrations, booking rails, and reporting stacks instead of buying a composable platform that scales from API-only to full white-label.",
						"Product surfaces span marketing, authenticated admin, embeddable booking widgets, and email—each must stay visually aligned, responsive, and fast enough for conversion-heavy flows.",
						"Money movement is multi-channel (Paystack, Flutterwave, bank transfer); reconciliation and operator UX cannot be an afterthought.",
						"Large teams need strict governance: roles bundle permissions, and pages, actions, and CMS-driven content must respect what each operator is provisioned to see or change.",
						"Authentication and abuse resistance matter at API and UI layers—local login with 2FA expectations, bounded sessions, and rate limits with cooldown feedback mirrored server-side.",
						"Leadership needs operational truth in the product: charts, custom views, date filters, progress reporting, and spreadsheet exports instead of manual reporting loops.",
					],
				},
				solution: {
					title:
						"Delivered Nuxt/Vue (TypeScript) admin, customer, widget, and email experiences on Laravel-backed services—payment diversity, RBAC, CMS-driven dynamic content, and analytics—aligned with Tiqwa’s API-first travel platform narrative.",
					deliverables: [
						"Implemented Figma designs across the admin application, smart booking widget surfaces, and responsive user journeys—including cross-platform email templates and structure testing.",
						"Integrated multiple payment channels (Paystack, Flutterwave, bank transfer) so agencies and platforms can collect funds with flexibility appropriate to each market.",
						"Built a role-and-permission system where roles aggregate permissions and access to pages, functions, and user-visible content is validated consistently on client and server.",
						"Hardened authentication (local auth with 2FA posture), session limits, and request throttling with user-visible limits and cooldown states enforced server-side.",
						"Shipped CMS workflows so admin-curated content powers both admin and user-facing areas with simplified editorial steps, plus drag-and-drop image selection where required.",
						"Implemented operational analytics: charts (including custom charts), date selectors, progress views, and table export to sheets for reporting and decision support.",
						"Supported the next-generation Anchor experience entry at v2.tiqwa.com/create-account alongside the public developer and product story on tiqwa.com (APIs, Anchor OTA, corporate, white-label, B2B).",
					],
					impact: [
						"Agencies and partners ship faster by integrating one consolidated travel stack instead of stitching GDS, local inventory, and booking UI separately.",
						"Stronger internal controls and clearer reporting reduce operational risk as transaction volume and headcount grow.",
						"Consistent UI, widget, and email quality improves end-customer trust and retention for Tiqwa-powered brands.",
					],
				},
				technology:
					"Frontend: Vue.js, Nuxt.js (TypeScript), Pinia, Vuex. Styling: SCSS, Tailwind. Animation: vue-auto-animate. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker, AWS Amplify, Vercel. Payments: Paystack, Flutterwave, bank transfer. APIs and sandboxes as offered publicly (e.g. sandbox.tiqwa.com).",
				link: "https://www.tiqwa.com/",
				client: "Tiqwa",
				type: "productivity",
				duration: "2 years",
				year: "2024",
			},
			{
				slug: "project-korner",
				title: "Korner",
				description:
					"E-commerce for beauty and skincare on Korner.ng—a curated catalog for women and men spanning hair care, grooming, oral care, K-beauty, anti-aging, acne, sensitive skin, gift sets, and more, with merchandising rails like new & trending, featured, top-rated, and top-selling plus brand/price/rating filters. Shoppers check out with multiple payment options; operators run the business from a Laravel-backed admin CMS.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743744/banner_h3my6g.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743732/logo_jttetg.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743752/1_drjrat.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743740/2_at3sdk.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743732/3_oxtivt.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743746/4_falyls.png",
				},
				challenge: {
					title:
						"Launch a premium-feeling skincare marketplace that merchandises a wide attribute-heavy catalog without overwhelming shoppers—while giving ops a CMS, payments, RBAC, and analytics that keep inventory and campaigns honest at scale.",
					contents: [
						"Beauty SKUs explode across brands, concerns, and claims; navigation, filters (brand, price, rating), and category trees must stay fast and trustworthy on real devices.",
						"Merchandising is continuous—hero campaigns, “new & trending,” confidence-led storytelling, and product grids need CMS control without developer bottlenecks.",
						"Checkout must support the payment mix customers expect in-market (cards, wallets, Apple Pay) without fragile one-off integrations per channel.",
						"Catalog data is relational-heavy: products, suppliers, categories, subcategories, and attributes must stay consistent between admin authoring and storefront rendering.",
						"Teams need governance: roles bundle permissions so only provisioned staff touch pricing, suppliers, sensitive settings, or customer data.",
						"Authentication, fraud, and abuse resistance matter for retail peaks—2FA posture, local credentials, bounded sessions, and rate limits with cooldown feedback mirrored server-side.",
					],
				},
				solution: {
					title:
						"Delivered a Nuxt/Vue (TypeScript, Pinia) storefront and admin CMS on Laravel with Vuetify—multi-gateway checkout, RBAC, rich CMS (products, suppliers, taxonomy, attributes), drag-and-drop media, and operational analytics.",
					deliverables: [
						"Implemented Figma-driven admin CMS and customer storefront UX—including responsive layouts, promotional sections (e.g. hero and “Get your Confidence Back” style campaigns), category hubs, and product discovery grids aligned with Korner.ng.",
						"Built storefront filtering and merchandising patterns reflected on the live site: brand, price, and rating filters; rails for new/trending, featured, top-rated, and top-selling inventory.",
						"Integrated multiple payment channels (Paystack, Opay, Flutterwave, Apple Pay) so checkout matches regional and premium-wallet expectations.",
						"Implemented role-based access: permissions are grouped into roles and enforced for pages, functions, and CMS-backed content on client and server.",
						"Shipped authentication hardening—verified email and password sign-in at korner.ng/auth/login with registration and forgot-password flows, session limits, optional OAuth paths where the product enables social sign-in, and 2FA-ready posture for sensitive accounts.",
						"Delivered CMS workflows with simplified steps, dynamic content, drag-and-drop image selection, and commerce primitives for products, suppliers, categories, subcategories, and attributes.",
						"Added operational reporting: charts (including custom charts), date selectors, progress summaries, and spreadsheet exports for catalog, orders, and growth decisions.",
					],
					impact: [
						"Customers discover curated skincare and grooming faster with filters and editorial rails instead of endless scrolling.",
						"Operators scale catalog and campaigns through the CMS instead of redeploying the storefront for every merchandising tweak.",
						"Finance and trust improve when payments and permissions are consistent, observable, and exportable for reconciliation.",
					],
				},
				technology:
					"Frontend: Vue.js, Nuxt.js (TypeScript), Pinia. UI: Vuetify, SCSS, Tailwind. Animation: Nuxt-AOS, GSAP. Backend: PHP, Laravel. Data: MySQL, PostgreSQL. Infra: AWS, Docker, Kubernetes. Payments: Paystack, Opay, Flutterwave, Apple Pay. Storefront and auth entry at korner.ng and korner.ng/auth/login; mobile distribution links as presented on Korner.ng (Google Play, App Store).",
				link: "https://korner.ng/",
				client: "Korner",
				type: "ecommerce",
				duration: "6 Months",
				year: "2024",
			},
			{
				slug: "project-omniswift",
				title: "Omniswift",
				description:
					"Public mission-critical brand and pipeline site for Omniswift—Nigeria-based engineers and consultants who design, build, and operate digital platforms government agencies, universities, and energy companies depend on daily. omniswift.com translates that promise into featured programme stories (EduTech, GovTech, energy), quantitative proof (e.g. 500,000+ applications processed, 99.9% uptime framing, 5M+ meters tracked nationally), services for institutions that cannot afford downtime, and a consultation path for new engagements.",
				images: {
					banner:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743815/banner_vvmp4j.png",
					icon: "https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743809/logo_z5masn.png",
					intro:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743836/1_b25l2z.png",
					challenges: [
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743805/2_zy0att.png",
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743855/3_dkqfdt.png",
					],
					technology:
						"https://res.cloudinary.com/da7ucu50f/image/upload/q_auto/f_auto/v1776743857/4_lj3eb4.png",
				},
				challenge: {
					title:
						"Turn a decade-scale institutional delivery record into a credible, scannable web narrative—without drowning procurement officers in jargon or hiding the human team behind the logo.",
					contents: [
						"Public-sector and enterprise buyers evaluate vendors on proof: uptime, data security, disaster recovery, and scale metrics must read as earned, not marketing fluff.",
						"Omniswift spans multiple regulated sectors; the site has to segment EduTech, GovTech, and energy stories while still feeling like one coherent partnership.",
						"Services must map cleanly to buyer intent—custom build, modernization, mission-critical support, and transformation consulting—so visitors self-identify quickly.",
						"Featured programmes (NTI-scale admissions, SLAS-style national platforms, metering initiatives) each deserve depth without duplicating the entire case study on the homepage.",
						"Lead generation has to be low-friction (e.g. email capture and “schedule a call”) while signaling seriousness and response expectations (e.g. discovery call, 24-hour turnaround messaging).",
						"Trust extends beyond projects: leadership, delivery model, and “why us” differentiators (African sector expertise, transformation partnership, reliability) need space without cluttering navigation.",
					],
				},
				solution: {
					title:
						"Shipped omniswift.com as a mission-critical marketing and credibility platform—hero positioning, programme carousels, quantified outcomes, services grid, leadership narrative, and conversion-oriented consultation requests.",
					deliverables: [
						"Implemented the homepage story arc from omniswift.com: “Mission Critical” headline, sector scope (government, universities, energy), and scale proof points (applications processed, platforms serving millions, uptime and metering scale).",
						"Built featured-project rails and deeper programme teasers for National Teachers’ Institute, National Student Loan Application Scheme (SLAS), and Presidential Metering Initiative Platform—each with sector labels and “Learn more” style pathways.",
						"Structured “Why Omniswift” pillars—deep African sector expertise, transformation partnership with documentation and knowledge transfer, and mission-critical reliability (uptime, security, DR, scale).",
						"Published a services index aligned with institutional buyers: custom platform development, modernization and integration, mission-critical platform support, and digital transformation consulting.",
						"Surfaced delivery leadership (“senior engineers” narrative) with team bios and roles to humanize large-scale engagements.",
						"Added case-study and social-proof moments (e.g. SLAS uptime callout with supporting copy) plus footer discovery, policies, and social channels as presented on the public site.",
					],
					impact: [
						"Prospects can validate Omniswift against peer vendors using concrete programme references and quantitative outcomes instead of generic “we build apps” claims.",
						"Sector teams find their lane faster through EduTech / GovTech / energy storytelling and linked programme detail.",
						"Consultation CTAs give business development a measurable top-of-funnel aligned with the site’s “schedule a call” positioning.",
					],
				},
				technology:
					"Public marketing and case-study web platform at omniswift.com—responsive layout system, modular content blocks for featured projects and carousels, services taxonomy, team profiles, lead capture (consultation / email request), policy and legal footers, and performance-oriented delivery suitable for institutional audiences; underlying implementation follows modern front-end and hosting practices appropriate to an enterprise vendor site (exact framework per deployment).",
				link: "https://www.omniswift.com/",
				client: "Omniswift",
				type: "productivity",
				duration: "2 Months",
				year: "2026",
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
	actions: {},
});
