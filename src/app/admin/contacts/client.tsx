'use client';

import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Contact } from '@/lib/definitions';

export function ContactsClient({ data }: { data: Contact[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Submissions</CardTitle>
        <CardDescription>
          Recent submissions from your website contact form.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden sm:table-cell">
                Mobile Number
              </TableHead>
              <TableHead className="hidden md:table-cell">City</TableHead>
              <TableHead className="hidden lg:table-cell text-right">
                Submitted At
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24">
                  No contact submissions yet.
                </TableCell>
              </TableRow>
            )}
            {data.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="font-medium">{contact.fullName}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {contact.mobile}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {contact.city}
                </TableCell>
                <TableCell className="hidden lg:table-cell text-right">
                  {new Date(contact.createdAt).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
