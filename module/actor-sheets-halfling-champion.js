/**
 * DCC HalflingChampion character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for HalflingChampion
 * @extends {DCCActorSheet}
 */
class ActorSheetHalflingChampion extends DCCActorSheet {
  /** @override */
	async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-halfling-champion.html'
    if (data.system.details.sheetClass !== 'Halfling-Champion') {
      this.actor.update({
        'system.class.className': game.i18n.localize('HalflingChampion.HalflingChampion')
      })
    }
        if (data.system.details.sheetClass !== 'HalflingChampion') {
      this.actor.update({
        'system.config.attackBonusMode': 'manual', 
       })
    }

    return data
  }
}

export {
  ActorSheetHalflingChampion
}
