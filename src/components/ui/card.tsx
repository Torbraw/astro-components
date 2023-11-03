import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const Card: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={twMerge('rounded-xl border bg-card text-card-foreground shadow', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

const CardHeader: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={twMerge('flex flex-col space-y-1.5 p-6', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

const CardTitle: ParentComponent<ComponentProps<'h3'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <h3 class={twMerge('font-semibold leading-none tracking-tight', local.class)} {...rest}>
      {local.children}
    </h3>
  );
};

const CardDescription: ParentComponent<ComponentProps<'p'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <p class={twMerge('text-sm text-muted-foreground', local.class)} {...rest}>
      {local.children}
    </p>
  );
};

const CardContent: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={twMerge('p-6 pt-0', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

const CardFooter: ParentComponent<ComponentProps<'div'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <div class={twMerge('flex items-center justify-between p-6 pt-0', local.class)} {...rest}>
      {local.children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
