# Input

## Default

```jsx
---
import Input from '@/components/ui/input/input.astro'; // astro
import { Input } from '@/components/ui/input/input'; // solidjs
---

<Input type="text" placeholder="Email" id="email" />
```

## With Label

```jsx
---
import Label from '@/components/ui/label/label.astro';
import Input from '@/components/ui/input/input.astro';
---

<Label for="email">Label</Label>
<Input type="text" placeholder="Email" id="email" />
```
