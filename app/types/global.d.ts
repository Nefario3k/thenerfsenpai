declare global {
    type ColorScheme = "light" | "dark";
    interface TypeProjects {
        slug: string;
        title: string;
        description: string;
        images: {
            banner: string;
            icon: string;
            intro: string;
            challenges: string[];
            technology: string;
        };
        challenge: { title: string; contents: string[] };
        solution: { title: string; deliverables: string[]; impact: string[] };
        technology: string;
        link: string;
        client: string;
        type: 'fintech' | 'ecommerce' | 'real estate' | 'healthcare' | 'education' | 'power' | 'productivity';
        duration: string;
        year: string;
    }
    interface TypeCareerHistory {
        company: string;
        role: string;
        duration?: string;
        location?: string;
        employmentType?: string;
        descriptions: string[];
    }
    interface TypeTechStack {
        title: string;
        content: string[];
    }

    interface TypeAppResource {
        viewportWidth: number;
        careerHistory: TypeCareerHistory[];
        techStack: TypeTechStack[];
        projects: TypeProjects[];
        backgroundBlur: string | null;
    }

    type TypeAppResourceKeys = keyof TypeAppResource;
}

export { };