import { type JSX, createMemo, splitProps, Show } from 'solid-js';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';
import { twMerge } from 'tailwind-merge';

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
  const [, inputProps] = splitProps(props, ['class', 'value', 'error', 'name', 'label']);

  // Create memoized value
  const getValue = createMemo<string | number | undefined>(
    (prevValue) => (props.value === undefined ? '' : !Number.isNaN(props.value) ? props.value : prevValue),
    '',
  );

  return (
    <div class="flex flex-col gap-1.5">
      <Show when={props.label}>
        <Label for={props.name}>
          {props.label}
          <Show when={props.required}>
            <span class="text-destructive">&nbsp;*</span>
          </Show>
        </Label>
      </Show>
      <Input
        class={twMerge(props.error ? 'border-destructive' : '', props.class)}
        {...inputProps}
        id={props.name}
        value={getValue()}
      />
      <Show when={props.error}>
        <p class="text-sm text-destructive" id={`${props.name}-error`}>
          {props.error}
        </p>
      </Show>
    </div>
  );
}
