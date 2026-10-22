# Tamzid Idrish Portfolio

A multi-page creative portfolio website for Tamzid Idrish, built with Next.js and React. It includes portfolio and project pages, articles, contact forms, and several visual portfolio layouts.

## Features

- Portfolio home page, about page, work and project showcases, and blog pages.
- Multiple portfolio layouts, including grid, carousel, half-slider, and interactive variants.
- Shared navigation menus, footers, contact details, and social profile links.
- Contact forms on the Contact and Landing pages, submitted to Formspree.
- Static production export for deployment to static hosting platforms.
- Local fonts, styles, images, videos, and other site assets.

## Technology

- Next.js 13 with the App Router
- React 18
- Sass
- Swiper
- GSAP and ScrollTrigger, loaded from the local assets

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

From the repository root:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build the site

```bash
npm run build
```

The build creates a static site in `out/`, as configured by `output: 'export'` in `next.config.js`. Deploy the contents of that directory using a static hosting provider. Vercel can build and host the repository as a Next.js static export.

To preview the generated export locally, use a static file server, for example:

```bash
npx serve@latest out
```

Because this project uses static export, `next start` is not the production preview command.

## Pages

The App Router pages are defined in `src/app/`. The main routes include:

| Route | Page |
| --- | --- |
| `/` | Creative portfolio home |
| `/about` | About |
| `/work` | Work and experience |
| `/contact` | Contact details, map, and contact form |
| `/blog` | Blog listing |
| `/blog-details` | Blog article |
| `/blog-farmer-run` | Farmer Run article |
| `/blog-farmer-run-trailer` | Farmer Run trailer article |
| `/blog-local-ai` | Local AI article |
| `/blog-rg-learning-session` | Rural Games learning session article |
| `/creative-agency` | Creative agency layout |
| `/creative-portfolio` | Creative portfolio layout |
| `/landing` | Landing page with an inquiry form |
| `/carousel-slider`, `/half-slider` | Slider portfolio layouts |
| `/interactive-center`, `/interactive-full`, `/interactive-inline`, `/interactive-vertical` | Interactive portfolio layouts |
| `/portfolio-fixed-text`, `/portfolio-grid`, `/portfolio-grid-classic` | Grid and fixed-text portfolio layouts |
| `/diabolus`, `/mmtps`, `/mythilo`, `/project1`, `/project2`, `/project3`, `/project4`, `/zerodrag` | Project detail pages |

## Contact form

The Contact and Landing pages share `src/components/Contact/ContactForm.jsx`. Form submissions are sent to the configured Formspree endpoint:

```text
https://formspree.io/f/xbdebyzn
```

No Resend API key or local `.env` file is required. Manage the form and submission notifications in the Formspree account associated with that endpoint. If you replace the endpoint, update the form's `action` in `ContactForm.jsx`.

The form displays a success or error message after an AJAX submission. It needs JavaScript enabled for those inline messages; without JavaScript, the browser can submit the form directly to Formspree.

## Project structure

```text
src/
  app/              App Router pages and shared layout
  common/           Shared JavaScript utilities
  components/       Page sections and reusable UI components
  data/             JSON content and shared contact/social details
  styles/           Global CSS entry point
public/
  assets/           Site CSS, fonts, images, videos, and JavaScript
  landing-preview/  Assets for the preview page
```

## Updating content

- **Portfolio, blog, and page content:** edit the relevant JSON files in `src/data/`.
- **Contact and social links:** update `src/data/contact.js`.
- **Shared page sections and layout:** edit the related components in `src/components/`.
- **Page routes and composition:** edit the corresponding `src/app/**/page.js` file.
- **Images, fonts, and scripts:** place or update files under `public/` and reference them with a root-relative URL such as `/assets/imgs/example.png`.
- **Styling:** global styles are imported from `src/styles/globals.css`; the site's primary template styles are in `public/assets/css/`.

## Available npm scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Next.js development server |
| `npm run build` | Build and export the static site into `out/` |
| `npm run start` | Run `next start` (not compatible with static-export production output) |
| `npm run lint` | Run Next.js linting; the first run may prompt to configure ESLint |

