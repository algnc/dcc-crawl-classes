/**
 * DCC ElvenRogue character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for ElvenRogue
 * @extends {DCCActorSheet}
 */
class ActorSheetElvenRogue extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-elven-rogue.html'
    if (data.data.details.sheetClass !== 'Elven-Rogue') {
      this.actor.update({
        'data.class.className': game.i18n.localize('ElvenRogue.ElvenRogue')
      })
    }
	  
    return data
  }
}

export {
  ActorSheetElvenRogue
}
