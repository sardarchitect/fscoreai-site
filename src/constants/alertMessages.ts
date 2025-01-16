
export type AlertType = "success" | "error" | "warning" | "info";

export type AlertMessage = {
  message: string;
  type: AlertType;
};

export const ALERT_MESSAGES: Record<string, AlertMessage> = {
  FORM_SUBMITTED: {
    message: "Thank you for submitting your form. We will get back to you shortly.",
    type: "success",
  },
  SUBSCRIPTION_SUCCESS: {
    message: "Thanks for Subscribing",
    type: "success",
  },
  ERROR_OCCURRED: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
  WARNING_MESSAGE: {
    message: "Please double-check the entered information.",
    type: "warning",
  },
};
