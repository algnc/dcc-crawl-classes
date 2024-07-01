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
	async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-halfling-burglar.html'
    if (data.system.details.sheetClass !== 'Halfling-Burglar') {
      this.actor.update({
        'system.class.className': game.i18n.localize('HalflingBurglar.HalflingBurglar')
      })
    }
    return data
  }
}

export {
  ActorSheetHalflingBurglar
}
