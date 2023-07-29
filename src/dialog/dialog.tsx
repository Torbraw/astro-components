import type { ParentComponent, ComponentProps } from 'solid-js';
import { splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const DialogHeader: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  const className = local.class ?? '';

  return (
    <div class={twMerge('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...rest}>
      {props.children}
    </div>
  );
};

const DialogTitle: ParentComponent<ComponentProps<'h2'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  const className = local.class ?? '';

  return (
    <h2 class={twMerge('text-lg font-semibold leading-none tracking-tight', className)} {...rest}>
      {props.children}
    </h2>
  );
};

const DialogDescription: ParentComponent<ComponentProps<'p'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  const className = local.class ?? '';

  return (
    <p class={twMerge('text-sm text-muted-foreground', className)} {...rest}>
      {props.children}
    </p>
  );
};

const DialogFooter: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  const className = local.class ?? '';

  return (
    <div class={twMerge('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...rest}>
      {props.children}
    </div>
  );
};

export { DialogHeader, DialogTitle, DialogDescription, DialogFooter };
