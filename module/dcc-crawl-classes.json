/* global Actors */

import * as HealerSheets from './actor-sheets-healer.js';
import * as MutantSheets from './actor-sheets-mutant.js';
import * as RoverSheets from './actor-sheets-rover.js';
import * as SentinelSheets from './actor-sheets-sentinel.js';
import * as ShamanSheets from './actor-sheets-shaman.js';
import * as ManimalSheets from './actor-sheets-manimal.js';
import * as PlantientSheets from './actor-sheets-plantient.js';

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)

  // Register sheet application classes
  Actors.registerSheet('mcc-healer', HealerSheets.ActorSheetHealer)
  Actors.registerSheet('mcc-mutant', MutantSheets.ActorSheetMutant)
  Actors.registerSheet('mcc-rover', RoverSheets.ActorSheetRover)
  Actors.registerSheet('mcc-sentinel', SentinelSheets.ActorSheetSentinel)
  Actors.registerSheet('mcc-shaman', ShamanSheets.ActorSheetShaman)
  Actors.registerSheet('mcc-manimal', ManimalSheets.ActorSheetManimal)    
  Actors.registerSheet('mcc-plantient', PlantientSheets.ActorSheetPlantient)  
   
  // Register shared template for MCC characters
  const templatePaths = [
	'modules/mcc-classes/templates/actor-partial-pc-mcc-header.html',
	'modules/mcc-classes/templates/actor-partial-mutations.html',
	'modules/mcc-classes/templates/actor-partial-shaman-programs.html'	
	]
	loadTemplates(templatePaths)
})

