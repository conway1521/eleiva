# ELEIVA

Website for ELEIVA olive oil. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it locally

You need Node.js 20 or later.

```bash
git clone https://github.com/conway1521/eleiva.git
cd eleiva
npm install
npm run dev
```

Then open http://localhost:3000. The page reloads as you save.

## Where things are

| What you want to change | File |
| --- | --- |
| Any text on the site | `lib/site.ts` |
| Colours and fonts | `app/globals.css`, `app/layout.tsx` |
| Page layout and sections | `app/page.tsx` |
| Header and logo | `app/components/Header.tsx`, `app/components/Logo.tsx` |
| Feedback form | `app/components/FeedbackForm.tsx` |
| Feedback validation | `app/actions.ts` |
| Where feedback is stored | `lib/feedback.ts` |

## Working together

`main` should always be in a working state. For each change:

```bash
git checkout main
git pull
git checkout -b short-description-of-change
# make your changes
npm run lint
npm run build
git add -A
git commit -m "Describe the change"
git push -u origin short-description-of-change
```

Then open a pull request on GitHub and ask the other person to look at it before merging.

## Not done yet

- Feedback is only written to the server log (`lib/feedback.ts`). It needs a database or an email send before launch.
- The copy in `lib/site.ts` marked "Placeholder" or "To be confirmed" needs real details.
- The logo in `app/components/Logo.tsx` is a placeholder.
- The pre-order section is a stub. Contact details and amount are still to be added.
