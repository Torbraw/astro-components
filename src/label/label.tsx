import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

export const Label: ParentComponent<ComponentProps<'label'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <label
      class={twMerge(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )}
      {...rest}
    >
      {props.children}
    </label>
  );
};
