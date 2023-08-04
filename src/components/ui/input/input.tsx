import { type Component, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

export const Input: Component<ComponentProps<'input'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <input
      class={twMerge(
        'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )}
      {...rest}
    />
  );
};
