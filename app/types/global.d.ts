declare global {
    type ColorScheme = "light" | "dark";
    interface TypeAppResource {
        viewportWidth: number;
    }

    type TypeAppResourceKeys = keyof TypeAppResource;
}

export { }