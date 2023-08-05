import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

const Table: ParentComponent<ComponentProps<'table'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <div class="w-full overflow-auto">
      <table class={twMerge('w-full text-sm', props.class)} {...rest}>
        {props.children}
      </table>
    </div>
  );
};

const TableHeader: ParentComponent<ComponentProps<'thead'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <thead class={twMerge('[&_tr]:border-b', props.class)} {...rest}>
      {props.children}
    </thead>
  );
};

const TableBody: ParentComponent<ComponentProps<'tbody'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <tbody class={twMerge('[&_tr:last-child]:border-0', props.class)} {...rest}>
      {props.children}
    </tbody>
  );
};

const TableRow: ParentComponent<ComponentProps<'tr'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <tr
      class={twMerge('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)}
      {...rest}
    >
      {props.children}
    </tr>
  );
};

const TableHead: ParentComponent<ComponentProps<'th'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <th class={twMerge('h-10 px-2 text-left align-middle font-medium text-muted-foreground', props.class)} {...rest}>
      {props.children}
    </th>
  );
};

const TableCell: ParentComponent<ComponentProps<'td'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <td class={twMerge('p-2 align-middle', props.class)} {...rest}>
      {props.children}
    </td>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
