import { get, post } from '@services/api';
import { UserProfile } from '@typings/models';

export type Credentials = {
  login: string;
  password: string;
};

export function signIn(
  body: Credentials,
): Promise<{ jwt: string; profile: UserProfile }> {
  return post({ path: '/auth/login', body });
}

export function signOut(): Promise<{ jwt: string; profile: UserProfile }> {
  return post({ path: '/auth/logout' });
}

export function getUserProfile(): Promise<UserProfile> {
  return get({ path: '/auth/profile' });
}

export type CleaningAfterRepairCostRequestBody = {
  name: string;
  phone: string;
  rooms: number;
  bathrooms: number;
  services: Array<'DRY_CLEANING' | 'WINDOWS'>;
};

export function requestCleaningAfterRepairCost(
  body: CleaningAfterRepairCostRequestBody,
) {
  return post({
    path: '/landing/repair',
    body,
  });
}

export type OfficeCleaningCostRequestBody = {
  name: string;
  phone: string;
  services: Array<'AFTER_REPAIR' | 'WINDOWS'>;
};

export function requestOfficeCleaningCost(body: OfficeCleaningCostRequestBody) {
  return post({
    path: '/landing/office',
    body,
  });
}
