import {
  type ParentComponent,
  type ComponentProps,
  type Accessor,
  type Setter,
  splitProps,
  createContext,
  useContext,
  createSignal,
  onMount,
} from 'solid-js';
import { twMerge } from 'tailwind-merge';

type DialogContextValue = {
  dialogRef: Accessor<HTMLDialogElement | undefined>;
  setDialogRef: Setter<HTMLDialogElement>;
};

const DialogContext = createContext<DialogContextValue>();

const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error('useDialogContext must be used within a DialogRoot component');
  }

  return context;
};

const DialogRoot: ParentComponent = (props) => {
  const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement | undefined>(undefined);

  const context: DialogContextValue = {
    dialogRef,
    setDialogRef,
  };

  return <DialogContext.Provider value={context}>{props.children}</DialogContext.Provider>;
};

const Dialog: ParentComponent<ComponentProps<'dialog'>> = (props) => {
  const context = useDialogContext();
  const [, rest] = splitProps(props, ['class']);

  onMount(() => {
    const dialogRef = context.dialogRef();

    if (dialogRef) {
      dialogRef.addEventListener('webkitAnimationEnd', () => {
        if (dialogRef.dataset.closing === 'true') {
          dialogRef.dataset.closing = 'false';
          dialogRef.close();
        }
      });

      dialogRef.addEventListener('click', (event) => {
        if (event.target === dialogRef) {
          dialogRef.dataset.closing = 'true';
        }
      });

      dialogRef.addEventListener('cancel', (event) => {
        event.preventDefault();
        dialogRef.dataset.closing = 'true';
      });
    }
  });

  return (
    <dialog
      ref={context.setDialogRef}
      data-closing="false"
      class={twMerge(
        'left-[50%] top-[50%] m-0 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background text-primary shadow-lg duration-200 backdrop:bg-background/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 open:slide-in-from-left-1/2 open:slide-in-from-top-[48%] open:backdrop:animate-in open:backdrop:fade-out-0 data-[closing=true]:animate-out data-[closing=true]:fade-out-0 data-[closing=true]:zoom-out-95 data-[closing=true]:slide-out-to-left-1/2 data-[closing=true]:slide-out-to-top-[48%] sm:rounded-lg',
        props.class,
      )}
      {...rest}
    >
      {props.children}
    </dialog>
  );
};

const DialogContent: ParentComponent<ComponentProps<'div'>> = (props) => {
  const context = useDialogContext();
  const [, rest] = splitProps(props, ['class']);

  const closeDialog = () => {
    const dialogRef = context.dialogRef();
    if (dialogRef) {
      dialogRef.dataset.closing = 'true';
    }
  };

  return (
    <div class={twMerge('relative grid gap-4 p-6 ', props.class)} {...rest}>
      {props.children}
      <button
        onClick={() => closeDialog()}
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
          <path
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const DialogTrigger: ParentComponent = (props) => {
  const context = useDialogContext();

  const openDialog = () => {
    const dialogRef = context.dialogRef();
    if (dialogRef) {
      dialogRef.showModal();
    }
  };

  return <div onClick={() => openDialog()}>{props.children}</div>;
};

const DialogHeader: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('flex flex-col space-y-1.5 text-center sm:text-left', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

const DialogTitle: ParentComponent<ComponentProps<'h2'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <h2 class={twMerge('text-lg font-semibold leading-none tracking-tight', props.class)} {...rest}>
      {props.children}
    </h2>
  );
};

const DialogDescription: ParentComponent<ComponentProps<'p'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <p class={twMerge('text-sm text-muted-foreground', props.class)} {...rest}>
      {props.children}
    </p>
  );
};

const DialogFooter: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

export { DialogRoot, Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
