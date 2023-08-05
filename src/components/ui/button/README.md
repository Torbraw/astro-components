# Button

## Astro

### Default

```jsx
---
import Button from '@/components/ui/button/button.astro';
---

<Button>Button</Button>
```

Default is primary variant and md size

### Specify variant

```jsx
---
import Button from '@/components/ui/button/button.astro';
---

<Button variant="secondary">Button</Button>
```

Available variant: primary, secondary, destructive, outline, success, ghost

### Specify size

```jsx
---
import Button from '@/components/ui/button/button.astro';
---

<Button size="sm">Button</Button>
```

Available size: sm, md, lg, icon

## Solidjs

```jsx
import { Button } from '@/components/ui/button/button';

<Button>Button</Button>
```

Same properties as astro component also available
