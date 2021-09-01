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
    data.data.class.className ='Halfling Champion'
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
