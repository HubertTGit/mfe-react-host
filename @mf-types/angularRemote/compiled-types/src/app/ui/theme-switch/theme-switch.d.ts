import { OnDestroy, OnInit } from '@angular/core';
export declare class ThemeSwitch implements OnInit, OnDestroy {
    isDark: import("@angular/core").WritableSignal<boolean>;
    readonly Moon: import("lucide-angular").LucideIconData;
    readonly Sun: import("lucide-angular").LucideIconData;
    private observer;
    ngOnInit(): void;
    ngOnDestroy(): void;
    switchTheme(): void;
    private checkTheme;
}
