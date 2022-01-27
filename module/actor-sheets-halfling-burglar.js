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
    if (data.data.details.sheetClass !== 'Halfling-Burglar') {
      this.actor.update({
        'data.class.className': game.i18n.localize('HalflingBurglar.HalflingBurglar')
      })
    }
    return data
  }
}

export {
  ActorSheetHalflingBurglar
}
