import { HEROSYS } from "../herosystem6e.js";

export default class SettingsHelpers {
    // Initialize System Settings after the Init Hook
    static initLevelSettings() {
      let module = "hero6efoundryvttv2";

      game.settings.register(module, "stunned", {
        name: "Use Stunned",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "use endurance", {
        name: "Use Endurance",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "knockback", {
        name: "Use Knockback",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "hit locations", {
        name: "Hit Locations",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "hitLocTracking", {
        name: "Hit Location: Track Damage Done to Individual Body Parts",
        scope: "world",
        config: true,
        type: String,
        choices: {
          none: "Don't track",
          all: "Track for all"
        },
        default: "none",
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "optionalManeuvers", {
        name: "Optional Maneuvers",
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "automation", {
        name: "Attack Card Automation",
        scope: "world",
        config: true,
        type: String,
        choices: {
          none: "No Automation",
          npcOnly: "NPCs Only (end, stun, body)",
          pcEndOnly: "PCs (end) and NPCs (end, stun, body)",
          all: "PCs and NPCs (end, stun, body)"
        },
        default: "all",
        onChange: value=> HEROSYS.log(false, value)
      });

      game.settings.register(module, "alphaTesting", {
        name: "Alpha Testing",
        hint: "Enable testing of alpha features and changes.  Intended for system developer only.",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
        //onChange: foundry.utils.debouncedReload(),
      });

      // Keep track of last migration version
      game.settings.register(module, "lastMigration", {
        name: "Last Migration",
        scope: "world",
        config: game.settings.get(game.system.id, 'alphaTesting'),
        type: String,
        default: '1.0.0',
      });

    }
  }

