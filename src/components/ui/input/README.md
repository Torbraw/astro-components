# Input

## Default

```jsx
import { Input } from '@/components/ui/input/input';

<Input type="text" placeholder="Email" id="email" />
```

## With Label

```jsx
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';

<Label for="email">Label</Label>
<Input type="text" placeholder="Email" id="email" />
```

## Text Input

This input is meant to be used in a [modular form](https://modularforms.dev/) with solidjs for text inputs.  
It needs the `input.tsx` and `label.tsx` components.

```jsx
import { TextInput } from '@/components/ui/input/text-input';

{/* Field is a modular form component. ref: https://modularforms.dev/solid/guides/add-fields-to-form */}
<Field name="name">
  {(field, props) => (
    <TextInput
      {...props}
      name={field.name}
      value={field.value}
      error={field.error}
      required={true}
      type="text"
      label="Name"
    />
  )}
</Field>
```

## File Input

This input is meant to be used in a [modular form](https://modularforms.dev/) with solidjs for file inputs.  
It needs the `input.tsx` and `label.tsx` components.

```jsx
import { FileInput } from '@/components/ui/input/file-input';

{/* Field is a modular form component. ref: https://modularforms.dev/solid/guides/add-fields-to-form */}
<Field name="image" type="File">
  {(field, props) => (
    <FileInput
      {...props}
      name={field.name}
      error={field.error}
      type="File"
      label="Image"
      accept=".jpg,.png"
    />
  )}
</Field>
```
