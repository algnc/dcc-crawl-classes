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
	async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-dwarven-priest.html'
    if (data.system.details.sheetClass !== 'Dwarven-Priest') {
      this.actor.update({
        'data.system.class.className': game.i18n.localize('DwarvenPriest.DwarvenPriest')
      })
    }
    // Add in DwarvenPriest specific data if missing
    if (!data.system.skills.deedDie) {
      this.actor.update({
        'data.skills.deedDie': {
          label: 'DwarvenPriest.DeedDie',
          die: ''
        }
      })
    }
    if (data.system.details.sheetClass !== 'DwarvenPriest') {
      this.actor.update({
        'data.details.sheetClass': 'Dwarven Priest',
        'data.class.spellCheckAbility': 'per',
        'data.details.critRange': 20
      })
    }
    if (data.system.details.sheetClass !== 'DwarvenPriest') {
      this.actor.update({
        'data.config.attackBonusMode': 'manual',	
       })
    }
    return data
  }
}

export {
  ActorSheetDwarvenPriest
}
