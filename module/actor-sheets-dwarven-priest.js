/*
 * DCC DwarvenPriest character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for DwarvenPriest
 * @extends {DCCActorSheet}
 */
class ActorSheetDwarvenPriest extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-dwarven-priest.html'
    data.data.class.className = 'Dwarven Priest'

    // Add in DwarvenPriest specific data if missing
    if (!data.data.skills.deedDie) {
      this.actor.update({
        'data.skills.deedDie': {
          label: 'DwarvenPriest.DeedDie',
          die: ''
        }
      })
    }
    if (data.data.details.sheetClass !== 'DwarvenPriest') {
      this.actor.update({
        'data.details.sheetClass': 'Dwarven Priest',
        'data.class.spellCheckAbility': 'per',
        'data.details.critRange': 20
      })
    }
    if (data.data.details.sheetClass !== 'DwarvenPriest') {
      this.actor.update({
        'data.config.attackBonusRollMode': 'Manual',	
       })
    }
    return data
  }
}

export {
  ActorSheetDwarvenPriest
}
