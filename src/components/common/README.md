# README

## Theme toggle

```jsx
---
import Button from '@/components/ui/theme-toggle/theme-toggle.astro';
---

<ThemeToggle />
```

It will toggle the "dark" class on the html element, make sure you have `darkMode: ["class"]` in your tailwind config and that you have a dark mode in your css.

### View transitions

If you are using astro view transitions on your header, you will need to change the script tag of the theme-toggle to this:

```jsx
<script>
  const handleTheme = () => {
    const theme = localStorage.getItem('theme') ?? 'light';
    const html = document.querySelector('html') as HTMLHtmlElement;
    html.classList.add(theme);

    const themeToggle = document.querySelector('#theme-toggle') as HTMLButtonElement;

    themeToggle.addEventListener('click', () => {
      const html = document.querySelector('html') as HTMLHtmlElement;
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
  };

  handleTheme();
  document.addEventListener('astro:after-swap', handleTheme);
</script>
```
