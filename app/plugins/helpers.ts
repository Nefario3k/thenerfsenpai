export default defineNuxtPlugin(() => {
    const appResourceStore = useMyAppResourceStore();

    const getState = <K extends TypeAppResourceKeys>(key: K): TypeAppResource[K] => {
        return appResourceStore[key];
    };

    const setState = <K extends TypeAppResourceKeys>(key: K, value: TypeAppResource[K]) => {
        appResourceStore.$patch({ [key]: value } as Partial<TypeAppResource>);
    };

    const scrollPageToTop = () => {
        nextTick(() => {
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }, 200);
        });
    };
    return {
        provide: {
            getState,
            setState,
            scrollPageToTop,
        },
    };
});
