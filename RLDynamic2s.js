// JavaScript source code
// JavaScript source code
const personalAccounts = [];
const teamAccounts = [];

account = { name: "Fortiethbuckle8", id: "76561198135636563", client: "steam" }; personalAccounts.push(account);
account = { name: "Keyboardrebel", id: "76561198816114530", client: "steam" }; personalAccounts.push(account);
account = { name: "Feedmemoi", id: "76561198363142506", client: "steam" }; personalAccounts.push(account);
account = { name: "Keyboardxilo", id: "76561199043955764", client: "steam" }; personalAccounts.push(account);
account = { name: "Meepmeepxilo", id: "76561199041429306", client: "steam" }; personalAccounts.push(account);
account = { name: "XiloPlays", id: "76561199046539900", client: "steam" }; personalAccounts.push(account);
account = { name: "meepPanther", id: "76561199054654929", client: "steam" }; personalAccounts.push(account);
account = { name: "n7rocksss", id: "76561199058071833", client: "steam" }; personalAccounts.push(account);
account = { name: "GENGAR Only", id: "GENGAR%20Only", client: "epic", email: "pantherhor6@gmail.com" }; personalAccounts.push(account);
account = { name: "ItzMePeng", id: "ItzMePenguinooo", client: "epic", email: "pantherhor7@gmail.com" }; personalAccounts.push(account);
account = { name: "ItzMeWuthy", id: "ItzMeWuthy", client: "epic", email: "pantherhor8@gmail.com" }; personalAccounts.push(account);
account = { name: "ItzMeFir", id: "ItzMeFir", client: "epic", email: "pantherhor5@gmail.com" }; personalAccounts.push(account);
account = { name: "ItzMeSubbb", id: "ItzMeSubbb", client: "epic", email: "pantherhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "ItsWuthy2", id: "ItsWuthy2", client: "epic", email: "p.antherhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "MeepPanther", id: "MeepPanther", client: "epic", email: "pa.ntherhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "ItsZerosHero", id: "ItsZerosHero", client: "epic", email: "pan.therhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "NickZero52", id: "NickZero52", client: "epic", email: "pant.herhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "ItzZachyWacky", id: "ItzZachyWacky", client: "epic", email: "panth.erhoreu@gmail.com" }; personalAccounts.push(account);
account = { name: "MannyDaGranny", id: "MannyDaGranny", client: "epic", email: "panthe.rhoreu@gmail.com" }; personalAccounts.push(account);

function getTwos(arrayItems) {
    var allItems = "";
    for (index = 0; index < arrayItems.length; index++) {
        if (index % 6 == 5) {
            allItems += "<div class='row'>";
        }
        allItems += "<div class='col-2 col-m-4 col-p-6' style='border-style: groove'><h2 style=text-align:center><a href='https://rocketleague.tracker.network/rocket-league/profile/";
        allItems += arrayItems[index].client;
        allItems += "/";
        allItems += arrayItems[index].id;
        allItems += "/mmr?playlist=11'>";
        allItems += arrayItems[index].name;
        allItems += "</a></h2><div id='div_iframe2'><iframe id='frame' src='https://rocketleague.tracker.network/rocket-league/profile/";
        allItems += arrayItems[index].client;
        allItems += "/";
        allItems += arrayItems[index].id;
        allItems += "/mmr?playlist=11'></iframe></div>";// 2's is 11, 3's is 13 and tourney is 34
        allItems += "</div>";
        if (index % 6 == 5) {
            allItems += "</div>";
        }
    }
    allItems += "</div>";
    return allItems;
}

document.getElementById("Twos").innerHTML = getTwos(personalAccounts);
