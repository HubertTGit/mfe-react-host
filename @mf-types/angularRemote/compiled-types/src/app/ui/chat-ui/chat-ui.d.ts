import { User } from '@angular/fire/auth';
import { IChatMessage } from './chat.interface';
export declare class ChatUi {
    private scrollContainer;
    constructor();
    scrollToBottom(): void;
    user: import("@angular/core").InputSignal<User | null | undefined>;
    onChat: import("@angular/core").OutputEmitterRef<IChatMessage>;
    messages: import("@angular/core").InputSignal<IChatMessage[] | undefined>;
    title: import("@angular/core").InputSignal<string>;
    online: import("@angular/core").Signal<number>;
    private initialChatMessage;
    readonly sendHorizontal: import("lucide-angular").LucideIconData;
    chatModel: import("@angular/core").WritableSignal<IChatMessage>;
    chatForm: import("@angular/forms/signals").FieldTree<IChatMessage, string | number>;
    sendMessage(): void;
}
