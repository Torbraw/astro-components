import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const Card: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('rounded-xl border bg-card text-card-foreground shadow', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

const CardHeader: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('flex flex-col space-y-1.5 p-6', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

const CardTitle: ParentComponent<ComponentProps<'h3'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <h3 class={twMerge('font-semibold leading-none tracking-tight', props.class)} {...rest}>
      {props.children}
    </h3>
  );
};

const CardDescription: ParentComponent<ComponentProps<'p'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <p class={twMerge('text-sm text-muted-foreground', props.class)} {...rest}>
      {props.children}
    </p>
  );
};

const CardContent: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('p-6 pt-0', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

const CardFooter: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class={twMerge('flex items-center justify-between p-6 pt-0', props.class)} {...rest}>
      {props.children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
