/*Premier exercice*/

// Create your variables here
// ==========================================
let numberOfSeasons = 8;
let numberOfEpisodes = 10;
// ==========================================

/*Deuxième exercice*/
//===========================================
let numberOfSeasons = 8;
let numberOfEpisodes = 10; 
let episodeTime = 45;
let commercialTime = 5; 
//===========================================

//===========================================
let totalShowTime = numberOfSeasons * numberOfEpisodes * (episodeTime + commercialTime)
// ==========================================

/* Troisième exercice */
// =========================================
let episodeTitle = 'Odin le redoutable';
let episodeDuration = 48;
let hasBeenWatched = true;
// =========================================

/* Quatrième exercice */
// =========================================
let episode = {
    title: "odin le surpuissant",
    duration: 45,
    hasBeenWatched: true
  }; 
//   ======================================

/*Cinquième exercice */
// =====================================
let  episodeTitle = episode.Title;
let episodeDuration = episode.duration;
let episodeHasBeenWatched = episode.hasBeenWatched;
// =====================================

/* Sixième exercice*/
// Create a class here
// =====================================
class episode {
  constructor (title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
    
} let firstEpisode = new episode("le chat surpuissant", 45, true);
  let secondEpisode = new episode("Les souris redoutable", 50, true);
  let thirdEpisode = new episode("Le moustique sauvage", 50, false);  

console.log(firstEpisode,secondEpisode,thirdEpisode);
// =====================================
