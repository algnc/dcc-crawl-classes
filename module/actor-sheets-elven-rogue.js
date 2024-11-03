/**
 * DCC ElvenRogue character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for ElvenRogue
 * @extends {DCCActorSheet}
 */
class ActorSheetElvenRogue extends DCCActorSheet {
    static height = 635

    /** @override */
    async getData(options) {
        const data = await super.getData(options)
        this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-elven-rogue.html'
        if (data.system.details.sheetClass !== 'Elven-Rogue') {
            this.actor.update({
                'system.class.className': game.i18n.localize('ElvenRogue.ElvenRogue')
            })
        }

        return data
    }
}

export {
    ActorSheetElvenRogue
}
