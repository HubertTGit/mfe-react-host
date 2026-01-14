import { User } from '@angular/fire/auth';
export declare class Profile {
    private elementRef;
    user: import("@angular/core").InputSignal<User | null>;
    isMenuOpen: import("@angular/core").WritableSignal<boolean>;
    onLogout: import("@angular/core").OutputEmitterRef<void>;
    toggleMenu(): void;
    closeMenu(): void;
    logout(): void;
    onClick(event: MouseEvent): void;
}
