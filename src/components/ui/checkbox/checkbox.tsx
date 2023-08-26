import { CheckIcon } from '@/components/common/icons';
import { splitProps, type Component, type ComponentProps, Show } from 'solid-js';
import { twMerge } from 'tailwind-merge';

type Props = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
} & ComponentProps<'button'>;
export const Checkbox: Component<Props> = (props) => {
  const [local, rest] = splitProps(props, ['checked', 'onCheckedChange', 'class']);

  return (
    <button
      data-checked={local.checked}
      onClick={() => local.onCheckedChange(!local.checked)}
      class={twMerge(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[checked=true]:bg-primary data-[checked=true]:text-primary-foreground',
        local.class,
      )}
      {...rest}
    >
      <Show when={local.checked}>
        <CheckIcon class="flex items-center justify-center text-current" />
      </Show>
    </button>
  );
};
