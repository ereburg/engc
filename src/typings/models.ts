export type UserProfile = {
  id: number;
  email: string;
  phone: string;
  name: string;
  surname: string;
  balance: number;
  referral_code: string;
  role: string;
  saved_time: number;
  address: Array<object>;
  last_order: null;
  subscription: object;
};
