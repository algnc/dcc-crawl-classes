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
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-halfling-champion.html'
    if (data.data.details.sheetClass !== 'Halfling-Champion') {
      this.actor.update({
        'data.class.className': game.i18n.localize('HalflingChampion.HalflingChampion')
      })
    }
        if (data.data.details.sheetClass !== 'HalflingChampion') {
      this.actor.update({
        'data.config.attackBonusMode': 'manual', 
       })
    }

    return data
  }
}

export {
  ActorSheetHalflingChampion
}
