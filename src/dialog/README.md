# Dialog

```html
<Dialog id="dialog">
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogHeader>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </div>
  <DialogFooter>
    <Button>Close</Button>
  </DialogFooter>
</Dialog>

<DialogTrigger id="dialog">
  <Button>Open dialog</Button>
</DialogTrigger>
```

## How to use

- You need to pass the same id to the `Dialog` and `DialogTrigger` components.
- The `DialogTrigger` component can be any element and can be placed anywhere in the DOM.
- Make sure you only have one `Dialog` component with the same id in the DOM.

## Other infos

- The dialog component use the `<dialog>` html element.
- The dialog can be closed via the `X` button, the `ESC` key or by clicking outside the dialog.  
- There is no "close" state for the dialog, so I had to use data attributes and override to get the close animation working.
