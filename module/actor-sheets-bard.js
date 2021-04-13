/**
 * DCC Bard character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Bard
 * @extends {DCCActorSheet}
 */
class ActorSheetBard extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-bard.html'
    data.data.class.className = 'Bard'

    // Add in Bard specific data if missing
    if (!data.data.skills.talentDie) {
      this.actor.update({
        'data.skills.talentDie': {
          label: 'Bard.TalentDie',
          die: '1d14'
        }
      })
    }
    return data
  }
}

export {
  ActorSheetBard
}