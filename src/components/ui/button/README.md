# Button

## Default

```jsx
---
import Button from '@/components/ui/button/button.astro'; // astro
import { Button } from '@/components/ui/button/button'; // solidjs
---

<Button>Button</Button>
```

Defaullt is primary variant and md size

## Specify variant

```jsx
---
import Button from '@/components/ui/button/button.astro';
---

<Button variant="secondary">Button</Button>
```

Available variant: primary, secondary, destructive, outline

## Specify size

```jsx
---
import Button from '@/components/ui/button/button.astro';
---

<Button size="sm">Button</Button>
```

Available size: sm, md, lg, icon
