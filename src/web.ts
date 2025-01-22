/* eslint-disable @typescript-eslint/no-unused-vars */
import { WebPlugin } from '@capacitor/core';

import type { CapacitorShakePlugin, RegisterUserOptions, ShakeScreen, ShakeStartOptions } from './definitions';

export class CapacitorShakeWeb extends WebPlugin implements CapacitorShakePlugin {
  start(_options: ShakeStartOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
  show(_shakeScreen: ShakeScreen): void {
    throw this.unimplemented('Not implemented on web.');
  }
  registerUser(_options: RegisterUserOptions): void {
    throw this.unimplemented('Not implemented on web.');
  }
}
