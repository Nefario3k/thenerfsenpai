export default defineNuxtPlugin(() => {
    const appResourceStore = useMyAppResourceStore();
    const { emit } = useEventBus();

    const getState = <K extends TypeAppResourceKeys>(key: K): TypeAppResource[K] => {
        return appResourceStore[key];
    };

    const setState = <K extends TypeAppResourceKeys>(key: K, value: TypeAppResource[K]) => {
        appResourceStore.$patch({ [key]: value } as Partial<TypeAppResource>);
    };

    const getType = (value: any): string => {
        const typeStr = typeof value;

        // Handle special cases for more precise typing
        if (typeStr === "object") {
            if (value === null) {
                return "null";
            } else if (Array.isArray(value)) {
                return "array";
            } else if (value instanceof Date) {
                return "date";
            } else if (value instanceof RegExp) {
                return "regexp";
            } else {
                return "object";
            }
        } else {
            return typeStr;
        }
    };

    const deepClone = (obj: unknown): unknown => {
        // if statement to handle non object and array types
        if (typeof obj !== "object" || obj === null) {
            return obj; // Handle primitive values
        }
        // handes arrays
        if (Array.isArray(obj)) {
            return obj.map(deepClone); // Recursively clone array elements
        }

        const clone: any = {};
        for (const key in obj) {
            if (key in obj) {
                // @ts-ignore-next-line
                clone[key] = deepClone(obj[key]); // Recursively clone object properties
            }
        }
        return clone;
    };

    const globalEmit = (val: string, payload: unknown = null) =>
        emit(val, payload);

    const showToast = (
        type: "success" | "error" | "info",
        payload: TypeToastEventData
    ) => {
        globalEmit(type, payload);
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
            getType,
            deepClone,
            showToast,
            globalEmit,
        },
    };
});
