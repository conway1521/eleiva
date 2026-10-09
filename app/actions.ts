"use server";

import { saveFeedback } from "@/lib/feedback";

export type FeedbackState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: { name?: string; email?: string; message?: string };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitFeedback(
  _prevState: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(formData, "company")) {
    return { status: "success", message: "Thank you for your thoughts.", errors: {} };
  }

  const name = field(formData, "name");
  const email = field(formData, "email");
  const message = field(formData, "message");

  const errors: FeedbackState["errors"] = {};
  if (name.length > 100) errors.name = "Please keep your name under 100 characters.";
  if (email && (email.length > 254 || !EMAIL_PATTERN.test(email))) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) errors.message = "Please write a message.";
  else if (message.length > 2000) errors.message = "Please keep your message under 2000 characters.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the form and try again.", errors };
  }

  try {
    await saveFeedback({ name, email, message });
  } catch (error) {
    console.error("[feedback] save failed", error);
    return {
      status: "error",
      message: "Something went wrong on our side. Please try again shortly.",
      errors: {},
    };
  }

  return { status: "success", message: "Thank you for your thoughts.", errors: {} };
}
