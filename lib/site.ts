// All site copy lives here so text can be edited without touching layout code.
// Anything marked "To be confirmed" is a placeholder awaiting real details.

export const site = {
  name: "ELEIVA",
  tagline: "Olive oil, made with care.",
  description:
    "ELEIVA is a new olive oil. Read about the oil, tell us what you think, and be first to hear when pre-orders open.",

  nav: [
    { label: "The oil", href: "#about" },
    { label: "Your thoughts", href: "#feedback" },
    { label: "Pre-order", href: "#pre-order" },
  ],

  hero: {
    eyebrow: "Coming soon",
    heading: "An olive oil worth waiting for.",
    body: "We are preparing our first bottles. Before they are ready, we would like to hear what you look for in an olive oil.",
    cta: { label: "Tell us what you think", href: "#feedback" },
  },

  about: {
    heading: "About the oil",
    paragraphs: [
      "Placeholder: one or two sentences on where the olives are grown and who grows them.",
      "Placeholder: one or two sentences on how the oil is made and how it tastes.",
    ],
    facts: [
      { label: "Origin", value: "To be confirmed" },
      { label: "Olive variety", value: "To be confirmed" },
      { label: "Harvest", value: "To be confirmed" },
    ],
  },

  feedback: {
    heading: "Let us know your thoughts",
    body: "We are still shaping ELEIVA. Tell us what matters to you in an olive oil, and what would make you try ours.",
  },

  preOrder: {
    heading: "Pre-order",
    body: "Pre-orders are not open yet. Bottle sizes, quantities and contact details will be added here soon.",
  },
} as const;
