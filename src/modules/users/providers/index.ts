import { container } from 'tsyringe';

// eslint-disable-next-line import/no-self-import
import '@modules/users/providers';

import IHashProvider from './HashProvider/models/IHashProvider';

import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
