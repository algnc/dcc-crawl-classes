/**
 * DCC Orc character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Orc
 * @extends {DCCActorSheet}
 */
class ActorSheetOrc extends DCCActorSheet {
  /** @override */
  getData () {
    const data = super.getData()
    this.options.template = 'modules/dcc-crawl-classes/templates/actor-sheet-orc.html'
    data.data.class.className = 'Orc'
	if (data.data.details.sheetClass !== 'Orc') {
      this.actor.update({
	'data.skills.rageDie': {
	  label: 'Orc.rageDie',
	  die: '1d3',
	  value: '1'
      }
    })
    }
    return data
  }
}

export {
  ActorSheetOrc
}
