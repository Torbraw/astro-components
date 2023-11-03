import { type JSX, splitProps, Show } from 'solid-js';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { twMerge } from 'tailwind-merge';

type Props = JSX.IntrinsicElements['input'] & {
  name: string;
  required?: boolean;
  label?: string;
  error?: string;
};

/**
 * File input field.
 */
export function FileInput(props: Props) {
  // Split input element props
  const [local, inputProps] = splitProps(props, ['class', 'error', 'name', 'label', 'required']);

  return (
    <div class="flex flex-col gap-1.5">
      <Show when={local.label}>
        <Label for={local.name}>
          {local.label}
          <Show when={local.required}>
            <span class="text-destructive">&nbsp;*</span>
          </Show>
        </Label>
      </Show>
      <Input
        class={twMerge(local.error ? 'border-destructive' : '', local.class)}
        {...inputProps}
        id={local.name}
        type="file"
      />
      <Show when={local.error}>
        <p class="text-sm text-destructive" id={`${local.name}-error`}>
          {local.error}
        </p>
      </Show>
    </div>
  );
}
