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

## Text Input

This input is meant to be used in a [modular form](https://modularforms.dev/) with solidjs for text inputs.  
It needs the `input.tsx` and `label.tsx` components.

```jsx
---
import { TextInput } from '@/components/ui/input/text-input';
---

{/* Field is a modular form component. ref: https://modularforms.dev/solid/guides/add-fields-to-form */}
<Field name="name">
  {(field, props) => (
    <>
      <TextInput
        {...props}
        name={field.name}
        value={field.value}
        error={field.error}
        type="text"
        label="Name"
      />
    </>
  )}
</Field>
```
