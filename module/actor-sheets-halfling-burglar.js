/**
 * DCC HalflingBurglar character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for HalflingBurglar
 * @extends {DCCActorSheet}
 */
class ActorSheetHalflingBurglar extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-halfling-burglar.html'
    data.data.class.className ='Halfling Burglar'
    return data
  }
}

export {
  ActorSheetHalflingBurglar
}
