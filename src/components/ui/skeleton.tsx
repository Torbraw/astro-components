import { type Component, type ComponentProps, splitProps } from "solid-js";
import { cn } from "../../lib/utils";

export const Skeleton: Component<ComponentProps<"div">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return <div class={cn("animate-pulse rounded-md bg-muted", local.class)} {...rest} />;
};
