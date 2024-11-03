/**
 * DCC Gnome character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Gnome
 * @extends {DCCActorSheet}
 */
class ActorSheetGnome extends DCCActorSheet {
    static height = 635

    /** @override */
    async getData(options) {
        const data = await super.getData(options)
        this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-gnome.html'
        if (data.system.details.sheetClass !== 'Gnome') {
            this.actor.update({
                'system.class.className': game.i18n.localize('gnome.Gnome')
            })
        }


        // Add in Gnome specific data if missing
        if (!data.system.skills.trickDie) {
            this.actor.update({
                'system.skills.trickDie': {
                    label: 'Gnome.TrickDie',
                    die: 'd3'
                }
            })
        }
        return data
    }
}

export {
    ActorSheetGnome
}
