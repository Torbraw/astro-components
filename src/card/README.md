# Card

```jsx
---
import Card from '@/components/ui/card/card.astro';
import CardHeader from '@/components/ui/card/card-header.astro';
import CardTitle from '@/components/ui/card/card-title.astro';
import CardDescription from '@/components/ui/card/card-description.astro';
import CardContent from '@/components/ui/card/card-content.astro';
import CardFooter from '@/components/ui/card/card-footer.astro';
---

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Button</Button>
  </CardFooter>
</Card>
```
