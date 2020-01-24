import { ID } from '@datorama/akita';
import { Draw } from './draw.entity';

export class User {
  id!: ID;
  created!: Date;
  updated!: Date;
  firstname!: string;
  lastname!: string;
  totalPoints!: number;
  draws?: Draw[];
  preferences!: UserPreferences;
  email!: string;
  phone!: string;
  paymentMethods!: UserPaymentMethod[];
}

export class UserPreferences {
  invoiceInformation!: UserInvoiceInformation;
}

export class UserPaymentMethod {}

export class UserInvoiceInformation {
  country!: string;
  address!: string;
  addressMore!: string;
  province!: string;
  postalCode!: string;
  city!: string;
}
