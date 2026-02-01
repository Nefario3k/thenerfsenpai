export default defineNuxtPlugin(() => {
    const appResourceStore = useMyAppResourceStore();

    const getState = (key: TypeAppResourceKeys): TypeAppResource[TypeAppResourceKeys] => {
        return appResourceStore[key];
    }

    const setState = (key: TypeAppResourceKeys, value: TypeAppResource[TypeAppResourceKeys]) => {
        appResourceStore[key] = value;
    }
    return {
        provide: {
            getState,
            setState,
        },
    };
});
