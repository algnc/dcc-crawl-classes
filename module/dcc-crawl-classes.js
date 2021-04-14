/* global Actors */

import * as BardSheets from './actor-sheets-bard.js'
import * as GnomeSheets from './actor-sheets-gnome.js'
import * as PaladinSheets from './actor-sheets-paladin.js'
import * as RangerSheets from './actor-sheets-ranger.js'
import * as DwarvenPriestSheets from './actor-sheets-dwarven-priest.js'
import * as ElvenRogueSheets from './actor-sheets-elven-rogue.js'
import * as HalflingBurglarSheets from './actor-sheets-halfling-burglar.js'
import * as HalflingChampionSheets from './actor-sheets-halfling-champion.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)
  console.log(`Loading DCC Crawl! Classes`)

  // Register sheet application classes
  Actors.registerSheet('dcc-crawl-classes-bard', BardSheets.ActorSheetBard)
  Actors.registerSheet('dcc-crawl-classes-gnome', GnomeSheets.ActorSheetGnome)
  Actors.registerSheet('dcc-crawl-classes-paladin', PaladinSheets.ActorSheetPaladin)
  Actors.registerSheet('dcc-crawl-classes-ranger', RangerSheets.ActorSheetRanger)
  Actors.registerSheet('dcc-crawl-classes-dwarven-priest', DwarvenPriestSheets.ActorSheetDwarvenPriest)
  Actors.registerSheet('dcc-crawl-classes-elven-rogue', ElvenRogueSheets.ActorSheetElvenRogue)
  Actors.registerSheet('dcc-crawl-classes-halfling-burglar', HalflingBurglarSheets.ActorSheetHalflingBurglar)
  Actors.registerSheet('dcc-crawl-classes-halfling-champion', HalflingChampionSheets.ActorSheetHalflingChampion)
})

