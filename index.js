var modelList = [
    "prissyblaire",
    "minniemars_",
    "jacking_uneek",
    "modelparislee",
    "itsannemoore",
    "sheisrakim",
    "shaun_necole",
    "elle_jones",
    "uchemba",
    "ellietheempress",
    "itshernewyork",
    "theofficial_divabasss",
    "alexxusmariee",
    "rayven.chanel",
    "reallaytonbenton"
];

function randomInsta() {
    var url = "https://www.instagram.com/" + modelList[Math.floor(Math.random() * modelList.length)];
    window.open(url);
}