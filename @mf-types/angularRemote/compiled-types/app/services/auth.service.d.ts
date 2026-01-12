import { User, NextOrObserver, ErrorFn, Unsubscribe, UserCredential } from '@angular/fire/auth';
import { Observable } from 'rxjs';
export declare class AuthService {
    private readonly auth;
    private readonly router;
    loginWithGoogle(): Promise<UserCredential>;
    loginWithGithub(): Promise<UserCredential>;
    logout(): void;
    authStateChangeHandler(cb: NextOrObserver<User | null>, error: ErrorFn): Unsubscribe;
    userState$(): Observable<User | null>;
    getUser(): User | null;
}
