import type { Project, Client, Contact, Subscription } from './definitions';
import { PlaceHolderImages } from './placeholder-images';

let projects: Project[] = [
  {
    id: '1',
    name: 'Data Analytics Platform',
    description: 'A comprehensive platform for real-time data analysis and visualization, helping businesses make informed decisions.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-1')?.imageHint || '',
  },
  {
    id: '2',
    name: 'Mobile Finance App',
    description: 'A secure and user-friendly mobile application for personal finance management, budgeting, and investment tracking.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-2')?.imageHint || '',
  },
  {
    id: '3',
    name: 'Cloud Infrastructure Migration',
    description: 'Seamless migration of legacy systems to a modern, scalable, and cost-efficient cloud infrastructure.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'project-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'project-3')?.imageHint || '',
  },
];

let clients: Client[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    designation: 'CEO, TechCorp',
    description: 'Apex Insights transformed our business. Their expertise and dedication are unmatched. We saw a 200% ROI in the first six months!',
    imageUrl: PlaceHolderImages.find(p => p.id === 'client-1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'client-1')?.imageHint || '',
  },
  {
    id: '2',
    name: 'Michael Chen',
    designation: 'CTO, Innovate LLC',
    description: 'Working with Apex has been a game-changer. Their team is professional, responsive, and delivered results beyond our expectations.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'client-2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'client-2')?.imageHint || '',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    designation: 'Marketing Director, NextGen',
    description: 'The attention to detail and creative solutions provided by Apex Insights helped us launch a successful marketing campaign.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'client-3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'client-3')?.imageHint || '',
  },
    {
    id: '4',
    name: 'David Lee',
    designation: 'Founder, StartUpX',
    description: 'As a startup, we needed a reliable partner. Apex provided the technical excellence and strategic guidance we needed to grow.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'client-4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'client-4')?.imageHint || '',
  },
];

let contacts: Contact[] = [];
let subscriptions: Subscription[] = [];

// Simulate API latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Project Functions
export async function getProjects(): Promise<Project[]> {
  await delay(100);
  return projects;
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project> {
  await delay(100);
  const newProject: Project = { ...project, id: new Date().toISOString() };
  projects = [newProject, ...projects];
  return newProject;
}

export async function updateProject(id: string, updates: Partial<Project>): Promise<Project | null> {
    await delay(100);
    const projectIndex = projects.findIndex(p => p.id === id);
    if(projectIndex === -1) return null;
    projects[projectIndex] = { ...projects[projectIndex], ...updates };
    return projects[projectIndex];
}

export async function deleteProject(id: string): Promise<boolean> {
    await delay(100);
    const initialLength = projects.length;
    projects = projects.filter(p => p.id !== id);
    return projects.length < initialLength;
}

// Client Functions
export async function getClients(): Promise<Client[]> {
  await delay(100);
  return clients;
}

export async function addClient(client: Omit<Client, 'id'>): Promise<Client> {
  await delay(100);
  const newClient: Client = { ...client, id: new Date().toISOString() };
  clients = [newClient, ...clients];
  return newClient;
}

export async function updateClient(id: string, updates: Partial<Client>): Promise<Client | null> {
    await delay(100);
    const clientIndex = clients.findIndex(c => c.id === id);
    if(clientIndex === -1) return null;
    clients[clientIndex] = { ...clients[clientIndex], ...updates };
    return clients[clientIndex];
}

export async function deleteClient(id: string): Promise<boolean> {
    await delay(100);
    const initialLength = clients.length;
    clients = clients.filter(c => c.id !== id);
    return clients.length < initialLength;
}


// Contact Functions
export async function getContacts(): Promise<Contact[]> {
  await delay(100);
  return contacts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function addContact(contact: Omit<Contact, 'id'|'createdAt'>): Promise<Contact> {
  await delay(100);
  const newContact: Contact = { ...contact, id: new Date().toISOString(), createdAt: new Date() };
  contacts.push(newContact);
  return newContact;
}

// Subscription Functions
export async function getSubscriptions(): Promise<Subscription[]> {
  await delay(100);
  return subscriptions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function addSubscription(email: string): Promise<Subscription> {
  await delay(100);
  const newSubscription: Subscription = { email, id: new Date().toISOString(), createdAt: new Date() };
  subscriptions.push(newSubscription);
  return newSubscription;
}
