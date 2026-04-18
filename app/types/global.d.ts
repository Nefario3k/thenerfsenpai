declare global {
    type ColorScheme = "light" | "dark";
    interface TypeProjects {
        title: string;
        description: string;
        images: {
            banner: string;
            icon: string;
            intro: string;
            challenges: string[];
            technology: string;
        };
        challenge: string;
        technology: {
            description: string;
            list: string[];
        };
        outcome: string;
        link: string;
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
    }

    type TypeAppResourceKeys = keyof TypeAppResource;
}

export { };