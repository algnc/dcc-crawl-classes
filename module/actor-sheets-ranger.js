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
	  if (data.data.details.sheetClass !== 'Ranger') {
      this.actor.update({
        'data.class.className': game.i18n.localize('ranger.Ranger')
      })
    }

    if (data.data.details.sheetClass !== 'Ranger') {
      this.actor.update({
	 'data.config.attackBonusMode': 'manual',
       })
    }
    if (data.data.skills.climb) {
      this.actor.update({
	'data.skills.climb': {
	  label: 'Ranger.Climb',
      }
    })
    }
    if (data.data.skills.FindTrap) {
      this.actor.update({
        'data.skills.findTrap': {
          label: 'Ranger.findTrap',
      }
    })
    }
    if (data.data.skills.sneak) {
      this.actor.update({
        'data.skills.sneak': {
          label: 'Ranger.Sneak',
      }
    }) 
    }
    if (data.data.skills.strider) {
      this.actor.update({
        'data.skills.strider': {
          label: 'Ranger.Strider',
      }
    }) 
    }
    if (data.data.skills.survival) {
      this.actor.update({
        'data.skills.survival': {
          label: 'Ranger.Survival',
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
