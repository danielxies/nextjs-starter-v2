# Next.js Starter Template

A beautiful, ready-to-use Next.js starter template with custom fonts, dark/light mode, and a clean design.

## Features

- 🌓 Dark and light mode with smooth transitions
- 🔤 Custom fonts pre-configured (Alice, Vastago, VastagoThin, Cooper)
- 🎨 Beautiful color scheme with customizable variables
- 📱 Fully responsive design
- ⚡ Fast loading with initial loading animation
- 🧩 Modular components ready to use
- 🛠️ TypeScript for type safety
- 🎭 Tailwind CSS for styling

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/nextjs-starter-template.git my-project
cd my-project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` - Next.js app router directory
  - `page.tsx` - Homepage
  - `layout.tsx` - Root layout
  - `fonts.ts` - Font configuration
  - `globals.css` - Global styles
  - `lib/hooks/useTheme.tsx` - Theme context provider
  - `not-found.tsx` - 404 page
- `components/` - Reusable components
  - `danielxie/dxButton.tsx` - Custom button component
- `public/` - Static assets
  - `fonts/` - Custom font files

## Customization

### Colors

Edit the Tailwind configuration in `tailwind.config.ts` to customize your color scheme. The main colors used in this template are:

- Light mode background: `#e8e6d9`
- Dark mode background: `#1a1a1a`
- Light mode text: `#1a1a1a`
- Dark mode text: `#d1cfbf`
- Accent color: `#d87758` (claude-orange)

### Fonts

Custom fonts are configured in `app/fonts.ts` and used throughout the template. The following fonts are included:

- Alice - Used for headings
- Vastago - Used for body text and buttons
- VastagoThin - A thinner version of Vastago
- Cooper - An additional decorative font

### Components

The template includes a custom button component (`DxButton`) that can be used throughout your application. It supports various customizations including colors, padding, rounded corners, and more.

## License

This project is open source and available under the [MIT License](LICENSE).
