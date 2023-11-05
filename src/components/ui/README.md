# README

## Dialog

```jsx
import {
  DialogRoot,
  DialogTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog/dialog';
import Label from '@/components/ui/label/label';
import Button from '@/components/ui/button/button';

<DialogRoot isAlert={false}>
  <Dialog>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  <DialogTrigger>
    <Button>Open dialog</Button>
  </DialogTrigger>
</DialogRoot>
```

### How to use

- You need to englobe your `Dialog` and `DialogTrigger` components with the `DialogRoot` component.
- The `DialogTrigger` take a child component that can be any element.
- You can also register a ref to the `Dialog` component to open/close it programmatically or listen to the `open` and `close` events.
- The `isAlert` property is optional and false by default, if true it will render the dialog as an alert dialog (meaning you cannot close it by clicking outside and without the "close" button).

### Other infos

- The `Dialog` component use the `<dialog>` html element.
- The dialog can be closed via the `X` button, the `ESC` key or by clicking outside the dialog.
- The `DialogTrigger` don't take a "asChild" prop, it is simply a div with a click handler. Polymorphism was too dense for my use case.
- There is no "close" state for the dialog, so I had to use data attributes and override to get the close animation working.

## Input

### Text Input

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

### File Input

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

## Checkbox

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
