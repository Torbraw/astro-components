# Checkbox

## Solidjs

### Default

```jsx
import { Checkbox } from '@/components/ui/checkbox/checkbox';

const [isChecked, setIsChecked] = createSignal(false);

<Checkbox checked={isChecked()} onCheckedChange={(value) => setIsChecked(value)} />
```

### Checkbox-input

This checkbox is meant to be used in a [modular form](https://modularforms.dev/) with solidjs for checkbox input.  
It needs the `input.tsx` and `label.tsx` components.

```jsx
import { TextInput } from '@/components/ui/input/text-input';
import { setValue } from '@modular-forms/solid';

{/* Field is a modular form component. ref: https://modularforms.dev/solid/guides/add-fields-to-form */}
<Field name="name" type="boolean">
  {(field) => (
    <CheckboxInput
      name={field.name}
      checked={field.value}
      error={field.error}
      required={true}
      label="Name"
      onCheckedChange={(c) => setValue(formName, name, c)}
    />
  )}
</Field>
```
