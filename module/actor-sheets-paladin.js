/**
 * DCC Paladin character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Paladin
 * @extends {DCCActorSheet}
 */
class ActorSheetPaladin extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-paladin.html'
    data.data.class.className = 'Paladin'

    // Add in Paladin specific data if missing
    if (!data.data.skills.smiteDie) {
      this.actor.update({
        'data.skills.smiteDie': {
          label: 'Paladin.SmiteDie',
          die: '1d3'
        }
      })
    }
    if (!data.data.skills.holyDeeds) {
      this.actor.update({
	'data.skills.holyDeeds': {
	   label: 'Paladin.HolyDeeds',
	   value: '+1'
 	}
      })
     }
    if (data.data.details.sheetClass !== 'Paladin') {
      this.actor.update({
        'data.details.sheetClass': 'Paladin',
        'data.class.spellCheckAbility': 'per',
        'data.details.critRange': 20
      })
    }
    if (data.data.details.sheetClass !== 'Paladin') {
      this.actor.update({
	'data.config.rollAttackBonus': 'True',
       })
    }
    return data
  }
}

export {
  ActorSheetPaladin
}
