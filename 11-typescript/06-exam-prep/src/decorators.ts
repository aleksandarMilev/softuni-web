export const NotifyOnSuccess = (notificationType: "Email" | "Push") => {
  return function (
    _target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value as (...args: any[]) => any;

    descriptor.value = function (...args: any[]) {
      const result = original.apply(this, args);
      const isSuccessful =
        typeof result === "string" && !result.toLowerCase().startsWith("error");

      if (isSuccessful) {
        console.log(
          `[NOTIFY] Sending ${notificationType} notification for successful action "${methodName}".`
        );
      }

      return result;
    };

    return descriptor;
  };
};
