# Dialog

## Astro

```jsx
---
import Dialog from '@/components/ui/dialog/dialog.astro';
import DialogContent from '@/components/ui/dialog/dialog-content.astro';
import DialogHeader from '@/components/ui/dialog/dialog-header.astro';
import DialogTitle from '@/components/ui/dialog/dialog-title.astro';
import DialogDescription from '@/components/ui/dialog/dialog-description.astro';
import DialogFooter from '@/components/ui/dialog/dialog-footer.astro';
import DialogTrigger from '@/components/ui/dialog/dialog-trigger.astro';
import Label from '@/components/ui/label/label.astro';
import Button from '@/components/ui/button/button.astro';

---

<Dialog dialogId="dialog">
  <DialogContent dialogId="dialog">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
    </DialogHeader>
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="username" class="text-right">Username</Label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

<DialogTrigger dialogId="dialog">
  <Button>Open dialog</Button>
</DialogTrigger>
```

### How to use

- You need to pass the same id to the `Dialog` and `DialogTrigger` components.
- The `DialogTrigger` component can be any element and can be placed anywhere in the DOM.
- Make sure you only have one `Dialog` component with the same id in the DOM.

### Other infos

- The `Dialog` component use the `<dialog>` html element.
- The dialog can be closed via the `X` button, the `ESC` key or by clicking outside the dialog.
- There is no "close" state for the dialog, so I had to use data attributes and override to get the close animation working.

## Solidjs

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

<DialogRoot>
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

### Other infos

- The `Dialog` component use the `<dialog>` html element.
- The dialog can be closed via the `X` button, the `ESC` key or by clicking outside the dialog.
- The `DialogTrigger` don't take a "asChild" prop, it is simply a div with a click handler. Polymorphism was too dense for my use case.
- There is no "close" state for the dialog, so I had to use data attributes and override to get the close animation working.
