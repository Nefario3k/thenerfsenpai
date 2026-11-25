// composables/eventBus.ts
interface EventBus {
  [key: string]: any;
}

interface EventWatchers {
  [key: string]: (() => void)[];
}

const eventBus = reactive<EventBus>({});
const eventWatchers: EventWatchers = {};

export default function useEventBus() {
  return {
    ...toRefs(eventBus),
    emit(event: string, payload: any = null) {
      if (!import.meta.client) return;
      const { $getType, $deepClone } = useNuxtApp();
      const type = $getType(payload);
      let load = null;
      if (!type || type === "null") load = Math.random();
      else if (typeof payload === "function") load = payload();
      else if ("prop" in payload && "header" in payload) load = payload;
      else load = $deepClone(payload);
      eventBus[event] = load;
    },
    on(event: string, callback: (payload: any) => void) {
      // Watch for changes on the event and trigger the callback
      const stop = watch(() => eventBus[event], callback);

      // Register the watcher function for the event
      if (!eventWatchers[event]) {
        eventWatchers[event] = [];
      }
      eventWatchers[event].push(stop);

      // Return the function to stop watching the event
      return stop;
    },
    off(event: string) {
      // Stop all watchers for the given event
      if (eventWatchers[event]) {
        eventWatchers[event].forEach((stop) => stop());
        // Clear the array of watchers for the event
        eventWatchers[event] = [];
      }
    },
  };
}
