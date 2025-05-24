# Intercom Clone (Next.js + Tailwind CSS)

This project is a clone of the Intercom marketing site (or "Intercom clone") built using Next.js (with the App Router) and Tailwind CSS. It mimics the look and feel of Intercom's AI customer service suite, featuring a modern, responsive UI.

## Overview

- **Hero Section:**  
  The hero section (located in `src/components/sections/hero.tsx`) displays two "boxes" (Fin and Intercom Suite) that use webp background images (from `/public/images/fin-background.webp` and `/public/images/suite-background.webp`) as their container backgrounds. (Previously, these boxes had a black background.)  
  In addition, the hero section (and other sections) are built using Tailwind CSS (and inline styles) for styling, and Framer Motion (via the "motion" component) for animations.

- **Other Sections:**  
  The project also includes additional sections (for example, a "Trusted By" section, a "Testimonials" section, and a "CTA" section) that further mimic Intercom's marketing site.

- **Tailwind CSS:**  
  Tailwind is used extensively (via utility classes and custom configurations) to style the UI, ensuring a responsive and modern design.

- **Next.js (App Router):**  
  The project is built on Next.js (using the App Router) so that you can leverage server‑rendered pages, dynamic routing, and other Next.js features.

## Running the Project Locally

1. **Clone the repository** (or download the project folder) so that you have the project (for example, in a folder named "my-nextjs-app") on your machine.

2. **Install dependencies:**  
   Open a terminal (or command prompt) in the project folder (for example, "my-nextjs-app") and run:
   
   npm install

3. **Run the development server:**  
   In the same terminal, run:
   
   npm run dev

   (This starts the Next.js dev server, usually on [http://localhost:3000](http://localhost:3000).)

4. **Open your browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port printed in your terminal) to view the Intercom clone.

## Notes

- **Background Images:**  
  The Fin and Intercom Suite "boxes" (in the hero section) use webp images (located in `/public/images/`) as their background. (Previously, they had a black background.)  
  (If you'd like to change or add a fallback, you can update the inline style in `src/components/sections/hero.tsx`.)

- **Tailwind & Next.js:**  
  Tailwind CSS (and its configuration in `tailwind.config.ts`) is used for styling, and Next.js (with the App Router) powers the project's routing and rendering.

- **Framer Motion:**  
  The "motion" component (from Framer Motion) is used (for example, in the hero section) to animate elements (such as the Fin and Intercom Suite boxes).

---

Feel free to explore the project (or modify it) as you see fit. Happy coding!
