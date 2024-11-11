/**
 * DCC Paladin character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Paladin
 * @extends {DCCActorSheet}
 */
class ActorSheetPaladin extends DCCActorSheet {
    static height = 635

    /** @override */
    async getData(options) {
        const data = await super.getData(options)
        this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-paladin.html'
        if (data.system.details.sheetClass !== 'Paladin') {
            this.actor.update({
                'system.class.className': game.i18n.localize('paladin.Paladin')
            })
        }


        // Add in Paladin specific data if missing
        if (!data.system.skills.smiteDie) {
            this.actor.update({
                'system.skills.smiteDie': {
                    label: 'Paladin.SmiteDie',
                    die: '1d3'
                }
            })
        }
        if (!data.system.skills.holyDeeds) {
            this.actor.update({
                'system.skills.holyDeeds': {
                    label: 'Paladin.HolyDeeds',
                    value: '+1'
                }
            })
        }
        if (data.system.details.sheetClass !== 'Paladin') {
            this.actor.update({
                'system.details.sheetClass': 'Paladin',
                'system.class.spellCheckAbility': 'per',
                'system.details.critRange': 20
            })
        }
        if (data.system.details.sheetClass !== 'Paladin') {
            this.actor.update({
                'system.config.rollAttackBonus': 'True',
            })
        }
        return data
    }
}

export {
    ActorSheetPaladin
}
