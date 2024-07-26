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
	/**  getData () {
		#const data = super.getData()*/
		async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-bard.html'
    if (data.system.details.sheetClass !== 'Bard') {
      this.actor.update({
        'system.class.className': game.i18n.localize('Bard.Bard')
      })
    }

    // Add in Bard specific data if missing
    if (!data.system.skills.talentDie) {
      this.actor.update({
        'system.skills.talentDie': {
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
