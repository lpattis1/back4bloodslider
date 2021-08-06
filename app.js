let currentCharacter = 0;
let characterOpacity = 100;
const aboutRow = document.querySelector(".about-row");
const characterThumbnails = document.querySelectorAll(".character-thumbnail");

const characters = [
  {
    img: "hoffman.jpeg",
    title: "Hoffman",
    traitOne: "Smart",
    traitTwo: "Crafty",
    traitThree: "Meticulous",
    about:
      "A meticulous individual, enthusiastic prepper, and conspiracy theorist. When the infection hit, he and his mother hunkered down and rode out the storm as the rest of the world fell into chaos. After his mother passed away in her sleep and his supplies ran out, he left his boarded-up house to face the world of the Devil Worm. Howard Robert Hoffman is genuinely skilled and good hearted, with an earnest desire to be a useful part of the team. As part of the Cleaners, he’s finally come across the family that he’s always wanted – he just had to wade through the zombie apocalypse to find it.",
  },

  {
    img: "evangelo.jpeg",
    title: "Evangelo",
    traitOne: "Agile",
    traitTwo: "Stealthy",
    traitThree: "Adaptive",
    about:
      "He may be the youngest and least experienced Cleaner on the team but has proven to be a quick study. Besides being good in a fight, Evangelo has established himself as a loyal and reliable member of the team. He tends to talk a lot, especially when he’s nervous, but is eager to show that he has what it takes to be a Cleaner.",
  },

  {
    img: "doc.jpeg",
    title: "Doc",
    traitOne: "Genius",
    traitTwo: "Healer",
    traitThree: "Pragmatic",
    about:
      "He may be the youngest and least experienced Cleaner on the team but has proven to be a quick study. Besides being good in a fight, Evangelo has established himself as a loyal and reliable member of the team. He tends to talk a lot, especially when he’s nervous, but is eager to show that he has what it takes to be a Cleaner.",
  },

  {
    img: "holly.jpeg",
    title: "Holly",
    traitOne: "Street-smart",
    traitTwo: "Leader",
    traitThree: "Resilient",
    about:
      "After losing her family to the Devil Worm, Holly Forrester learned to channel all her energy into being a Cleaner and is known as the glue that keeps the team together. Armed with her trusty nail spiked baseball bat she affectionately calls “Dottie,” Holly’s resilience and never-say-die attitude helps boost the team's morale and is often seen as a ray of light in the darkness of the apocalypse.",
  },

  {
    img: "jim.jpeg",
    title: "Jim",
    traitOne: "Loner",
    traitTwo: "Knowledgable",
    traitThree: "Strong",
    about:
      "Nobody knows Finleyville and the surrounding county like Jim. From an early age, he would head out into the countryside with his father, hunting and trapping with the best of them. After a stint in the military, he returned home, only to see it ravaged by the Collapse. Now he’s found his place among the most trusted cleaners. When not fighting back-to-back with his team, he’s scouring the countryside of his beloved Pennsylvania routing out the Ridden infestation.",
  },

  {
    img: "karlee.jpeg",
    title: "Karlee",
    traitOne: "Badass",
    traitTwo: "Combative",
    traitThree: "Agile",
    about:
      "Surviving on the outskirts of Fort Hope since the Collapse, Karlee only trusted in herself. No one knows much about her, and she’s fine with that. Though originally seen as a nuisance at best and a looter at worst, her actions have proved time and time again which side she’s on. Now with the Ridden on the rise, she’s made the choice to fight alongside the survivors. She may not be a Cleaner by name, but she more than makes up for it in attitude.",
  },

  {
    img: "mom.jpeg",
    title: "Mom",
    traitOne: "Wise",
    traitTwo: "Peacemaker",
    traitThree: "Leader",
    about:
      "The only person surprised that Mom became the voice of survivors in Finleyville was herself. She’s never shirked from a challenge and always puts the needs of others over her own. Still, for one who’s used to bucking authority, her newfound responsibility sometimes weighs uneasily on her. Although she has faith in her Cleaners, Mom has questioned other leaders’ strategies on more than one occasion, especially since the death of her son. Mom’s goal is simple, make the Ridden pay.",
  },

  {
    img: "walker.jpeg",
    title: "Walker",
    traitOne: "Strong",
    traitTwo: "Soldier",
    traitThree: "Hardworking",
    about:
      "The oldest of five siblings, Elijah Walker was born in Evansburgh to a hardworking, blue collar family. The former Army Ranger and war-torn veteran is highly skilled with a wealth of front-line combat experience. Walker is a man of few words, but when he speaks, he commands the attention of his fellow Cleaners, who all respect his commitment to the fight.",
  },
];

function cycleThroughCharacters() {
  currentCharacter++;
  if (currentCharacter > characters.length) {
    currentCharacter = 0;
  }

  for (let i = 0; i < characterThumbnails.length; i++) {
    if (characterThumbnails[i] === characterThumbnails[currentCharacter]) {
      characterThumbnails[i].classList.add("active-thumbnail");
    } else {
      characterThumbnails[i].classList.remove("active-thumbnail");
    }
  }

  let characterTemplate = `
  <div class="col-12 col-md-6 about-col fade-in">
  <img
    src="/img/${characters[currentCharacter].img}"
    alt=""
    class="character-about-img img-fluid img-1"
  />
</div>
<div class="col-12 col-md-6 about-col fade-in" >
  <div class="character-about-txt txt-1">
    <h2 class="character-title">${characters[currentCharacter].title}</h2>
    <ul class="character-perks">
      <li class="perk">${characters[currentCharacter].traitOne}</li>
      <li class="perk">${characters[currentCharacter].traitTwo}</li>
      <li class="perk">${characters[currentCharacter].traitThree}</li>
    </ul>
    <p class="character-about">
    ${characters[currentCharacter].about}
    </p>
  </div>
</div>
  `;

  const aboutColumn = document.querySelector(".about-col");

  aboutRow.innerHTML = characterTemplate;
}

setInterval(cycleThroughCharacters, 4000);
