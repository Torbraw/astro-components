import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

export const Label: ParentComponent<ComponentProps<'label'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'children']);

  return (
    <label
      class={twMerge(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        local.class,
      )}
      {...rest}
    >
      {local.children}
    </label>
  );
};
