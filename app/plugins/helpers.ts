export default defineNuxtPlugin(() => {
    const appResourceStore = useMyAppResourceStore();

    const getState = <K extends TypeAppResourceKeys>(key: K): TypeAppResource[K] => {
        return appResourceStore[key];
    };

    const setState = <K extends TypeAppResourceKeys>(key: K, value: TypeAppResource[K]) => {
        appResourceStore.$patch({ [key]: value } as Partial<TypeAppResource>);
    };
    return {
        provide: {
            getState,
            setState,
        },
    };
});
