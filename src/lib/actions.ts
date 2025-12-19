'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import * as db from './data';
import type { Project, Client } from './definitions';

const projectSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  imageUrl: z.string().url('Must be a valid URL'),
  imageHint: z.string().optional().default(''),
});

const clientSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    designation: z.string().min(2, 'Designation must be at least 2 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    imageUrl: z.string().url('Must be a valid URL'),
    imageHint: z.string().optional().default(''),
});

const contactSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits."),
    city: z.string().min(2, "City must be at least 2 characters."),
});

const subscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type ActionResponse = {
  success: boolean;
  message?: string;
};

// Project Actions
export async function addProject(values: unknown): Promise<ActionResponse> {
  const validatedFields = projectSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: validatedFields.error.flatten().fieldErrors.toString() };
  }
  try {
    await db.addProject(validatedFields.data);
    revalidatePath('/admin/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to create project.' };
  }
}

export async function updateProject(id: string, values: unknown): Promise<ActionResponse> {
  const validatedFields = projectSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  try {
    await db.updateProject(id, validatedFields.data);
    revalidatePath('/admin/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to update project.' };
  }
}

export async function deleteProject(id: string): Promise<ActionResponse> {
  try {
    await db.deleteProject(id);
    revalidatePath('/admin/projects');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to delete project.' };
  }
}

// Client Actions
export async function addClient(values: unknown): Promise<ActionResponse> {
  const validatedFields = clientSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  try {
    await db.addClient(validatedFields.data);
    revalidatePath('/admin/clients');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to create client.' };
  }
}

export async function updateClient(id: string, values: unknown): Promise<ActionResponse> {
  const validatedFields = clientSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  try {
    await db.updateClient(id, validatedFields.data);
    revalidatePath('/admin/clients');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to update client.' };
  }
}

export async function deleteClient(id: string): Promise<ActionResponse> {
  try {
    await db.deleteClient(id);
    revalidatePath('/admin/clients');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to delete client.' };
  }
}

// Contact Action
export async function addContact(values: unknown): Promise<ActionResponse> {
  const validatedFields = contactSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  try {
    await db.addContact(validatedFields.data);
    revalidatePath('/admin/contacts');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to submit form.' };
  }
}

// Subscription Action
export async function addSubscription(values: unknown): Promise<ActionResponse> {
  const validatedFields = subscriptionSchema.safeParse(values);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid email provided.' };
  }
  try {
    await db.addSubscription(validatedFields.data.email);
    revalidatePath('/admin/subscriptions');
    return { success: true };
  } catch (error) {
    return { success: false, message: 'Failed to subscribe.' };
  }
}
