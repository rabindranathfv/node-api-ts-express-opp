export interface Ticket {
  _id?: string;
  nameEvent: string;
  description: string;
  typeEvent: string; // concert | conference | musical |
  price: number;
  owner: string;
  email: string;
}
