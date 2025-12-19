export type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Client = {
  id: string;
  name: string;
  designation: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type Contact = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  createdAt: Date;
};

export type Subscription = {
  id: string;
  email: string;
  createdAt: Date;
};
