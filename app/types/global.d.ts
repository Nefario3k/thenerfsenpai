import type { Project } from "../../shared/projects";

declare global {
    interface EmailJsResponseStatus {
        status: number;
        text: string;
    }

    interface EmailJsClient {
        init: (userId: string, origin?: string) => void;
        send: (
            serviceId: string,
            templateId: string,
            templateParams?: Record<string, unknown>,
            userId?: string
        ) => Promise<EmailJsResponseStatus>;
        sendForm: (
            serviceId: string,
            templateId: string,
            form: HTMLFormElement | string,
            userId?: string
        ) => Promise<EmailJsResponseStatus>;
    }

    interface Window {
        emailjs?: EmailJsClient;
    }

    type ColorScheme = "light" | "dark";

    interface TypeToastEventAction {
        label: string;
        action: () => void;
    }

    interface TypeToastEventData {
        prop: unknown;
        header: string;
        playAudio?: boolean;
        actions?: TypeToastEventAction[];
        /** When true, prop is rendered as HTML via v-html */
        html?: boolean;
    }
    /** Defined next to the data in shared/projects.ts. */
    type TypeProjects = Project;
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