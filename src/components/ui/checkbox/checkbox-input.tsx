import { splitProps, type Component, Show, type ComponentProps } from 'solid-js';
import { Label } from '@/components/ui/label/label';
import { Checkbox } from './checkbox';

type Props = {
  name: string;
  checked: boolean | undefined;
  required?: boolean;
  label?: string;
  error?: string;
  onCheckedChange: (checked: boolean) => void;
} & ComponentProps<'button'>;

export const CheckboxInput: Component<Props> = (props) => {
  const [local, rest] = splitProps(props, ['onCheckedChange', 'checked', 'error', 'name', 'label', 'required']);

  return (
    <div class="flex h-full flex-col gap-1.5">
      <Show when={local.label}>
        <Label for={local.name}>
          {local.label}
          <Show when={local.required}>
            <span class="text-destructive">&nbsp;*</span>
          </Show>
        </Label>
      </Show>
      <div class="flex h-9 items-center">
        <Checkbox {...rest} id={local.name} checked={local.checked || false} onCheckedChange={local.onCheckedChange} />
      </div>
      <Show when={local.error}>
        <p class="text-sm text-destructive" id={`${local.name}-error`}>
          {local.error}
        </p>
      </Show>
    </div>
  );
};
