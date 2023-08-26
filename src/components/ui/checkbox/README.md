# Checkbox

## Solidjs

```jsx
import { Checkbox } from '@/components/ui/checkbox/checkbox';

const [isChecked, setIsChecked] = createSignal(false);

<Checkbox checked={isChecked()} onCheckedChange={(value) => setIsChecked(value)} />
```
