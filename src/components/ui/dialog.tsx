import { CloseIcon } from '@/components/common/icons';
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
  Show,
} from 'solid-js';
import { cn } from '@/lib/utils';

type DialogContextValue = {
  dialogRef: Accessor<HTMLDialogElement | undefined>;
  isAlert: Accessor<boolean>;
  setDialogRef: Setter<HTMLDialogElement | undefined>;
};

const DialogContext = createContext<DialogContextValue>();

const useDialogContext = () => {
  const context = useContext(DialogContext);

  if (context === undefined) {
    throw new Error('useDialogContext must be used within a DialogRoot component');
  }

  return context;
};

type DialogRootProps = {
  isAlert?: boolean;
};
const DialogRoot: ParentComponent<DialogRootProps> = (props) => {
  const [local, _rest] = splitProps(props, ['isAlert', 'children']);

  const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement | undefined>(undefined);
  const [isAlert] = createSignal(local.isAlert ?? false);

  const context: DialogContextValue = {
    dialogRef,
    setDialogRef,
    isAlert,
  };

  return <DialogContext.Provider value={context}>{local.children}</DialogContext.Provider>;
};

const Dialog: ParentComponent<ComponentProps<'dialog'>> = (props) => {
  const context = useDialogContext();
  const [local, rest] = splitProps(props, ['class', 'children']);

  onMount(() => {
    const dialogRef = context.dialogRef();

    if (dialogRef) {
      dialogRef.addEventListener('webkitAnimationEnd', () => {
        if (dialogRef.dataset.closing === 'true') {
          dialogRef.dataset.closing = 'false';
          dialogRef.close();
        }
      });

      if (!context.isAlert()) {
        dialogRef.addEventListener('click', (event) => {
          if (event.target === dialogRef) {
            dialogRef.dataset.closing = 'true';
          }
        });
      }

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
      class={cn(
        'left-[50%] top-[50%] m-0 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background text-primary shadow-lg duration-200 backdrop:bg-background/80 backdrop:backdrop-blur-sm open:animate-in open:fade-in-0 open:zoom-in-95 open:slide-in-from-left-1/2 open:slide-in-from-top-[48%] open:backdrop:animate-in open:backdrop:fade-out-0 data-[closing=true]:animate-out data-[closing=true]:fade-out-0 data-[closing=true]:zoom-out-95 data-[closing=true]:slide-out-to-left-1/2 data-[closing=true]:slide-out-to-top-[48%] sm:rounded-lg',
        local.class,
      )}
      {...rest}
    >
      {local.children}
    </dialog>
  );
};

const DialogContent: ParentComponent<ComponentProps<'div'>> = (props) => {
  const context = useDialogContext();
  const [local, rest] = splitProps(props, ['class', 'children']);

  const closeDialog = () => {
    const dialogRef = context.dialogRef();
    if (dialogRef) {
      dialogRef.dataset.closing = 'true';
    }
  };

  return (
    <div class={cn('relative grid gap-4 p-6 ', local.class)} {...rest}>
      {local.children}
      <button
        onClick={() => closeDialog()}
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <Show when={!context.isAlert()}>
          <CloseIcon width="15" height="15" class="h-4 w-4" />
        </Show>
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
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

const DialogTitle: ParentComponent<ComponentProps<'h2'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <h2 class={cn('text-lg font-semibold leading-none tracking-tight', local.class)} {...rest}>
      {local.children}
    </h2>
  );
};

const DialogDescription: ParentComponent<ComponentProps<'p'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <p class={cn('text-sm text-muted-foreground', local.class)} {...rest}>
      {local.children}
    </p>
  );
};

const DialogFooter: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

export { DialogRoot, Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription, DialogFooter };
