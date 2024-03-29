/**
 * A collection of possible error and warning messages.
 */
export const ErrorMessage = {
  AuthFailure: () => 'auth failed',
  NotAuthenticated: () => 'not authenticated',
  NotAuthorized: () => 'not authorized',
  HttpFailure: (error?: string) => `HTTP failure${error ? `: ${error}` : ''}`,
  HttpSubFailure: (error: string | null, statusCode: number) =>
    `${error || 'sub-request failed'} [HTTP ${statusCode}]`,
  NotFound: () => 'item or resource was not found',
  ItemNotFound: (item: unknown, itemName: string) =>
    item ? `${itemName} "${item}" was not found` : 'item was not found',
  ItemOrItemsNotFound: (itemsName: string) => `one or more ${itemsName} were not found`,
  GuruMeditation: () => 'an impossible scenario occurred',
  NotImplemented: () => 'attempted to invoke unimplemented functionality',
  InvalidAppConfiguration: (details?: string) =>
    `invalid application configuration${details !== undefined ? `: ${details}` : ''}`,
  InvalidAppEnvironment: (details?: string) =>
    `invalid runtime environment${details !== undefined ? `: ${details}` : ''}`,
  InvalidClientConfiguration: (details?: string) =>
    `invalid client configuration${details !== undefined ? `: ${details}` : ''}`,
  InvalidItem: (item: unknown, itemName: string) =>
    `invalid ${itemName}${item !== undefined ? ` "${item}"` : ''}`,
  InvalidSecret: (secretType: string) =>
    ErrorMessage.InvalidItem(undefined, secretType ?? 'secret'),
  ValidationFailure: () => 'validation failed',
  AppValidationFailure: () => 'validation of application data failed',
  ClientValidationFailure: () => 'validation of client data failed'
};
