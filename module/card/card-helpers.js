import { HeroSystem6eCard } from "./card.js";
import { HeroSystem6eAttackCard } from "./attack-card.js";
import { HeroSystem6eToHitCard2 } from "./toHit-card2.js"
import * as Attack from "../item/item-attack.js"

export class HeroSystem6eCardHelpers {
    static onMessageRendered(html) {
        HeroSystem6eAttackCard.onMessageRendered(html);
        HeroSystem6eToHitCard2.onMessageRendered(html);
        Attack.onMessageRendered(html);
    }

    static chatListeners(html) {
        HeroSystem6eCard.chatListeners(html);
        HeroSystem6eAttackCard.chatListeners(html);
        HeroSystem6eToHitCard2.chatListeners(html);
        Attack.chatListeners(html);
    }
}