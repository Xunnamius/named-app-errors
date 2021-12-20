import { makeNamedError } from '../../make-named-error';
import { AppError } from '../app';

/**
 * Represents a generic auth error.
 */
export class AuthError extends AppError {
  constructor(message?: string) {
    super(message ?? 'auth failed');
  }
}
makeNamedError(AuthError, 'AuthError');
