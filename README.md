# astro-components

Library of astro + tailwincss components that I use on my projects, heavily inspired by [shadcn/ui](https://ui.shadcn.com).  
This is not mean to be a complete port of shadcn/ui, I only port the components I need for my projects and I sometimes tweak them if I need to.

## How to use

You are free to use those components if you want, you simply need to copy and paste the components you want from the `src` directory and paste them into your own project.

You will need to add `applyBaseStyles: false` to your tailwind ingreration in your `astro.config.mjs` file and those dependencies:

```bash
npm i astro @astrojs/tailwind tailwind-merge
npm i -D tailwindcss
```

Finally, you will need a tailwind config file and a global css file that contains the variables in the exemple below.

You have a README.md file in each component directory that explains how to use them.

## Global CSS

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;

    --success: 120 100% 50%;

    --ring: 215 20.2% 65.1%;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;

    --success: 120, 90%, 35%;

    --ring: 216 34% 17%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

## Tailwind Config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'
    ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      }
    },
  }
}
```
