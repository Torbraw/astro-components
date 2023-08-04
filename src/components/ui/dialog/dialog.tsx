import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

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

export { DialogHeader, DialogTitle, DialogDescription, DialogFooter };
