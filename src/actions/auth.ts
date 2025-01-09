'use server';

import { signIn, signOut } from '@/services/auth';
import { AuthError } from 'next-auth';

/**
 * Logs in a user with the provided form data.
 * @param {string | undefined} prevState - The previous state value
 * @param {FormData} formData - The form data containing user credentials.
 * @return {Promise<void>} A promise that resolves when the login process is complete.
 */
export async function loginAction(prevState: string | undefined, formData: FormData) {
  try {
    // Simulate a 2-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await signIn('credentials', {
      ...Object.fromEntries(formData.entries()),
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return 'Invalid credentials.';
      } else {
        return 'Something went wrong.';
      }
    }
    throw error;
  }
}

/**
 * Logs out a user.
 * @return {Promise<void>} A promise that resolves when the logout process is complete.
 */
export async function logoutAction() {
  await signOut();
}
