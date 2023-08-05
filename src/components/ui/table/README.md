# Table

## Astro

```jsx
---
import Table from '@/components/ui/table/table.astro';
import TableHeader from '@/components/ui/table/table-header.astro';
import TableBody from '@/components/ui/table/table-body.astro';
import TableRow from '@/components/ui/table/table-row.astro';
import TableHead from '@/components/ui/table/table-head.astro';
import TableCell from '@/components/ui/table/table-cell.astro';
---

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Solidjs

```jsx
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table/table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```
