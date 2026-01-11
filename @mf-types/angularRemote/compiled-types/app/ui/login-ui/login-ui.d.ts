export declare class LoginUi {
    onLogin: import("@angular/core").OutputEmitterRef<"google" | "github">;
    isLoading: import("@angular/core").InputSignal<boolean>;
    loginWithGithub(): void;
    loginWithGoogle(): void;
}
