/**
 * DCC Kith character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Kith
 * @extends {DCCActorSheet}
 */
class ActorSheetKith extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-kith/templates/actor-sheet-kith.html'
    data.data.class.className = 'Kith'

    // Add in Kith specific data if missing
    if (!data.data.skills.tracking) {
      this.actor.update({
        'data.skills.tracking': {
          label: 'Kith.Tracking',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.detectTraps) {
      this.actor.update({
        'data.skills.detectTraps': {
          label: 'Kith.DetectTraps',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.detectHiddenFoes) {
      this.actor.update({
        'data.skills.detectHiddenFoes': {
          label: 'Kith.DetectHiddenFoes',
          value: '+1'
        }
      })
    }
    if (!data.data.skills.burnDie) {
      this.actor.update({
        'data.skills.burnDie': {
          label: 'Kith.BurnDie',
          die: '1d3'
        }
      })
    }

    return data
  }
}

export {
  ActorSheetKith
}
