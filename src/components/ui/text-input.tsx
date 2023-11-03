import { type JSX, createMemo, splitProps, Show } from 'solid-js';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type Props = JSX.IntrinsicElements['input'] & {
  type: 'text' | 'email' | 'tel' | 'password' | 'url' | 'number' | 'date';
  name: string;
  value: string | number | undefined;
  required?: boolean;
  label?: string;
  error?: string;
};

/**
 * Text input field that users can type into.
 * Ref: https://github.com/fabian-hiller/modular-forms/blob/main/playgrounds/solid/src/components/TextInput.tsx
 */
export function TextInput(props: Props) {
  // Split input element props
  const [local, inputProps] = splitProps(props, ['class', 'value', 'error', 'name', 'label', 'required']);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) => (local.value === undefined ? '' : !Number.isNaN(local.value) ? local.value : prevValue),
    '',
  );

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
        class={cn(local.error ? 'border-destructive' : '', local.class)}
        {...inputProps}
        id={local.name}
        value={getValue()}
      />
      <Show when={local.error}>
        <p class="text-sm text-destructive" id={`${local.name}-error`}>
          {local.error}
        </p>
      </Show>
    </div>
  );
}
