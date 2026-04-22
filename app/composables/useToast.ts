
export default function useToast() {
  const toast_duration = ref(6000);
  const permanent = ref(false);
  const reloadData = ref(false);
  const tableLoader = ref(false);
  const searchContents = ref(false);
  const loading = ref(false);
  const errors = ref<string | null>(null);
  const errorsObj = ref<Record<string, any>>({});

  const { emit } = useEventBus();

  // Handle different error types
  function processError(err: any): string | null {
    const processNonStrings = (obj: any): string => {
      let m = "";
      m = Object.entries(obj)
        .map(([key, value]) => {
          let val = `${key}: `;
          if (Array.isArray(value)) {
            val += value.join(", ");
          } else {
            val += value;
          }
          return val;
        })
        .join("\n");
      return m;
    };
    let message: string | null = null;
    if (typeof err === "string") {
      message = err;
    } else if (err?.response?.data?.errors) {
      // Handle validation errors
      errorsObj.value = err.response.data.errors;
      if (typeof err.response.data.errors === "object")
        message = processNonStrings(err.response.data.errors);
      else message = err.response.data.errors || "Validation errors occurred";
    } else if (err?.response?.data?.message) {
      // Handle axios response with data.message
      if (typeof err.response.data.message === "object") {
        message = processNonStrings(err.response.data.message);
      } else {
        message = err.response.data.message || "An unexpected error occurred";
      }
    } else if (err?.response?.message) {
      // Handle direct response message
      message = err.response.message;
    } else if (err instanceof Error && err?.message) {
      // Handle JavaScript Error objects
      message = err.message;
    } else {
      // Fallback for unknown error types
      message = "An unexpected error occurred";
    }

    // Clean up message (remove "Error: " prefix if present)
    if (message && message.startsWith("Error: ")) {
      message = message.substring(7);
    }
    return message;
  }
  // show error toast
  function showError(
    res: unknown,
    head: string | null = null,
    playAudio: boolean = true,
    actions: TypeToastEventAction[] = [],
    html: boolean = true
  ) {
    const payload = {
      title: head || "An Error Occurred",
      message: String(res) || "Seems something went wrong!",
      duration: toast_duration.value,
      props: { actions: actions ?? [], html: html ?? false },
    };
    push.error(payload);

    permanent.value = false;
    tableLoader.value = false;
    loading.value = false;
    reloadData.value = false;
    searchContents.value = false;
    emit("loading-animation-finish");
  }
  // show success toast
  function showSuccess(
    res: unknown,
    head: string | null = null,
    playAudio: boolean = true,
    actions: TypeToastEventAction[] = [],
    html: boolean = true
  ) {
    push.success({
      title: head || "Success",
      message: String(res) || "Action carried out successfully",
      duration: toast_duration.value,
      props: { actions: actions ?? [], html: html ?? false },
    });

    emit("loading-animation-finish");
  }
  // show info toast
  function showInfo(
    res: unknown,
    head: string | null = null,
    playAudio: boolean = false,
    actions: TypeToastEventAction[] = [],
    html: boolean = true
  ) {
    push.info({
      title: head || "Warning",
      message: String(res) || "Something is wrong with your action",
      duration: toast_duration.value,
      props: { actions: actions ?? [], html: html ?? false },
    });

    emit("loading-animation-finish");
  }
  // show table loader
  function showTableLoader() {
    tableLoader.value = !tableLoader.value;
  }
  // catch error
  function catchError(
    err: unknown,
    head: string | null = null,
    playAudio: boolean = true,
    actions: TypeToastEventAction[] = [],
    html: boolean = true
  ) {
    const message = processError(err);
    // Determine toast type based on message content
    if (message && message.toLowerCase().includes("network error")) {
      showInfo(message, "Connection error", playAudio, actions, html);
    } else if (message && message.toLowerCase().includes("unauthorized")) {
      showError(message, "Unauthorized", playAudio, actions, html);
    } else {
      showError(message, head, playAudio, actions, html);
    }

    errors.value = message;
    loading.value = false;
  }
  // return all the functions and variables
  return {
    permanent,
    reloadData,
    tableLoader,
    searchContents,
    loading,
    errors,
    errorsObj,
    showError,
    showSuccess,
    showInfo,
    showTableLoader,
    catchError,
    processError,
  };
}
