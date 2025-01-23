import { WebPlugin } from '@capacitor/core';
import type { CapacitorShakePlugin, RegisterUserOptions, ShakeScreen, ShakeStartOptions } from './definitions';
export declare class CapacitorShakeWeb extends WebPlugin implements CapacitorShakePlugin {
    start(_options: ShakeStartOptions): Promise<void>;
    show(_shakeScreen: ShakeScreen): void;
    registerUser(_options: RegisterUserOptions): void;
}
