let bandMembers = [
  (singer1 = {
    name: "singer1",
    email: "singer1@band.com",
    instruments: ["voice", "piano"],
  }),
  (singer2 = {
    name: "singer2",
    email: "singer2@band.com",
    instruments: ["guitar", "voice"],
  }),
  (piano1 = {
    name: "piano1",
    email: "piano1@band.com",
    instruments: ["piano", "voice"],
  }),
  (piano2 = {
    name: "piano2",
    email: "piano2@band.com",
    instruments: ["piano", "backup"],
  }),
  (guitar1 = {
    name: "guitar1",
    email: "guitar1@band.com",
    instruments: ["guitar", "voice"],
  }),
  (guitar2 = {
    name: "guitar2",
    email: "guitar2@band.com",
    instuments: ["guitar"],
  }),
  (bass1 = {
    name: "bass1",
    email: "bass1@band.com",
    instruments: ["bass", "backup"],
  }),
  (bass2 = { name: "bass2", email: "bass2@band.com", instruments: ["bass"] }),
  (drums1 = {
    name: "drums1",
    email: "drums1@band.com",
    instruments: ["drums", "backup"],
  }),
  (drums2 = {
    name: "drums2",
    email: "drums2@band.com",
    instruments: ["drums"],
  }),
  (sax1 = { name: "sax1", email: "sax1@band.com", instruments: ["sax"] }),
  (sax2 = { name: "sax2", email: "sax2@band.com", instruments: ["sax"] }),
];

let band = [
  {
    name: "Jazz Piano Duo",
    style: "jazz",
    size: "duo",
    eventSite: ["0-50", "50-100", "100-200"],
    members: [piano1, sax1],
    membersBackup: [piano2, sax2],
  },
  {
    name: "Rock Duo",
    style: "rock",
    size: "duo",
    eventSite: ["0-50", "50-100", "100-200"],
    members: [singer2, guitar1],
    membersBackup: [singer1, guitar2],
  },
  {
    name: "Jazz Trio",
    style: "jazz",
    size: "trio",
    eventSite: ["0-50", "50-100", "100-200", "200-300"],
    members: ["singer1@band.com", "siner"],
  },
  {
    name: "Rock Trio",
    style: "rock",
    size: "trio",
    eventSite: ["0-50", "50-100", "100-200", "200-300"],
  },
];

const bandSize = document.getElementById("size");
const bandStyle = document.getElementById("style");
const findBand = document.getElementById("btn1");
const bandSuggestion = document.getElementById("bandSuggestion");

findBand.addEventListener("click", () => {
  if (bandSize.value === band[0].size && bandStyle.value === band[0].style) {
    bandSuggestion.innerText = band[0].name;
  } else if (
    bandSize.value === band[1].size &&
    bandStyle.value === band[1].style
  ) {
    bandSuggestion.innerText = band[1].name;
  } else if (
    bandSize.value === band[2].size &&
    bandStyle.value === band[2].style
  ) {
    bandSuggestion.innerText = band[2].name;
  } else if (
    bandSize.value === band[3].size &&
    bandStyle.value === band[3].style
  ) {
    bandSuggestion.innerText = band[3].name;
  }
});

// var userInput = document.getElementById("userName");
// var btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   console.log(userInput.value);
// });
