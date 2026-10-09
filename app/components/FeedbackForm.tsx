"use client";

import { useActionState } from "react";
import { submitFeedback, type FeedbackState } from "@/app/actions";

const initialState: FeedbackState = { status: "idle", message: "", errors: {} };

const inputClass =
  "w-full rounded-md border border-olive/25 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/30";

export function FeedbackForm() {
  const [state, formAction, pending] = useActionState(submitFeedback, initialState);

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-md bg-olive/10 px-5 py-4 text-olive-dark">
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name <span className="font-normal text-ink/50">(optional)</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={100} className={inputClass} />
          {state.errors.name && <p className="mt-2 text-sm text-red-700">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email <span className="font-normal text-ink/50">(optional)</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} className={inputClass} />
          {state.errors.email && <p className="mt-2 text-sm text-red-700">{state.errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Your thoughts
        </label>
        <textarea id="message" name="message" rows={5} maxLength={2000} required className={inputClass} />
        {state.errors.message && <p className="mt-2 text-sm text-red-700">{state.errors.message}</p>}
      </div>

      {/* Honeypot field, hidden from visitors and assistive technology. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-olive px-7 py-3 font-medium text-cream transition-colors hover:bg-olive-dark disabled:opacity-60"
        >
          {pending ? "Sending..." : "Send"}
        </button>
        <p aria-live="polite" className="text-sm text-red-700">
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}
