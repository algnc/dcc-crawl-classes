/**
 * DCC Ranger character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Ranger
 * @extends {DCCActorSheet}
 */
class ActorSheetRanger extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-ranger.html'
    data.data.class.className = 'Ranger'
    if (data.data.details.sheetClass !== 'Ranger') {
      this.actor.update({
	 'data.config.attackBonusMode': 'manual',
       })
    }
    if (data.data.skills.climb) {
      this.actor.update({
	'data.skills.climb': {
	  label: 'Ranger.Climb',
	  value: ''
      }
    })
    }
    if (data.data.skills.FindTrap) {
      this.actor.update({
        'data.skills.findTrap': {
          label: 'Ranger.findTrap',
	  value: ''
      }
    })
    }
    if (data.data.skills.sneak) {
      this.actor.update({
        'data.skills.sneak': {
          label: 'Ranger.Sneak',
	  value: ''
      }
    }) 
    }
    if (data.data.skills.strider) {
      this.actor.update({
        'data.skills.strider': {
          label: 'Ranger.Strider',
	  value: ''
      }
    }) 
    }
    if (data.data.skills.survival) {
      this.actor.update({
        'data.skills.survival': {
          label: 'Ranger.Survival',
	  value: ''
      }
    })
    }
    if (data.data.skills.favoredEnemies) {
      this.actor.update({
	'data.skills.favoredEnemies': {
	  label: 'Ranger.FavoredEnemies',
      }
    })
    }
    return data
  }
}

export {
  ActorSheetRanger
}
