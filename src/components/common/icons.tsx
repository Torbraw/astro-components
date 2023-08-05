import { type ParentComponent, type ComponentProps, splitProps } from 'solid-js';

export const DeleteIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <svg class={props.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const EditIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <svg class={props.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const ArrowDownIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <svg class={props.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const ArrowUpIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <svg class={props.class} {...rest} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const CaretSortIcon: ParentComponent<ComponentProps<'svg'>> = (props) => {
  const [, rest] = splitProps(props, ['class']);

  return (
    <svg class={props.class} {...rest} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};
