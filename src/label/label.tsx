import type { ParentComponent, ComponentProps } from 'solid-js';
import { splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

export const Label: ParentComponent<ComponentProps<'label'>> = (props) => {
  const [local, rest] = splitProps(props, ['class']);
  const className = local.class ?? '';

  return (
    <label
      class={twMerge(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...rest}
    >
      {props.children}
    </label>
  );
};
