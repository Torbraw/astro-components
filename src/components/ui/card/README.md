# Card

## Astro

```jsx
---
import Card from '@/components/ui/card/card.astro';
import CardHeader from '@/components/ui/card/card-header.astro';
import CardTitle from '@/components/ui/card/card-title.astro';
import CardDescription from '@/components/ui/card/card-description.astro';
import CardContent from '@/components/ui/card/card-content.astro';
import CardFooter from '@/components/ui/card/card-footer.astro';
import Label from '@/components/ui/label/label.astro';
import Input from '@/components/ui/input/input.astro';
import Button from '@/components/ui/button/button.astro';
---

<Card class="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>
```

## Solidjs

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from '@/components/ui/card/card';


<Card class="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>
```
