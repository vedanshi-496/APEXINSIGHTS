'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Subscription } from '@/lib/definitions';

export function SubscriptionsClient({ data }: { data: Subscription[] }) {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email Address</TableHead>
              <TableHead className="text-right">Subscribed At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
             {data.length === 0 && (
                <TableRow>
                    <TableCell colSpan={2} className="text-center h-24">No subscriptions yet.</TableCell>
                </TableRow>
            )}
            {data.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.email}</TableCell>
                <TableCell className="text-right">{new Date(subscription.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
