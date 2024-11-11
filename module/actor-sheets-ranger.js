/**
 * DCC Ranger character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Ranger
 * @extends {DCCActorSheet}
 */
class ActorSheetRanger extends DCCActorSheet {
    static height = 635

    /** @override */
    async getData(options) {
        const data = await super.getData(options)
        this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-ranger.html'
        if (data.system.details.sheetClass !== 'Ranger') {
            this.actor.update({
                'system.class.className': game.i18n.localize('ranger.Ranger')
            })
        }

        if (data.system.details.sheetClass !== 'Ranger') {
            this.actor.update({
                'system.config.attackBonusMode': 'manual',
            })
        }
        if (data.system.skills.climb) {
            this.actor.update({
                'system.skills.climb': {
                    label: 'Ranger.Climb',
                }
            })
        }
        if (data.system.skills.FindTrap) {
            this.actor.update({
                'system.skills.findTrap': {
                    label: 'Ranger.findTrap',
                }
            })
        }
        if (data.system.skills.sneak) {
            this.actor.update({
                'system.skills.sneak': {
                    label: 'Ranger.Sneak',
                }
            })
        }
        if (data.system.skills.strider) {
            this.actor.update({
                'system.skills.strider': {
                    label: 'Ranger.Strider',
                }
            })
        }
        if (data.system.skills.survival) {
            this.actor.update({
                'system.skills.survival': {
                    label: 'Ranger.Survival',
                }
            })
        }
        if (data.system.skills.favoredEnemies) {
            this.actor.update({
                'system.skills.favoredEnemies': {
                    label: 'Ranger.FavoredEnemies',
                }
            })
        }
        return data
    }
}

export {
    ActorSheetRanger
}
