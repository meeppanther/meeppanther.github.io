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

function getStats(arrayAcc) {
    var allStats = "";
    for (index = 0; index < arrayAcc.length; index++) {
        allStats += "<div class='a' style='margin-top: -150px;'><div class='b' id='div_iframe2'><iframe id='frame' src='https://rocketleague.tracker.network/rocket-league/profile/";
        allStats += arrayAcc[index].client;
        allStats += "/";
        allStats += arrayAcc[index].id;
        allStats += "/mmr?playlist=11'></iframe></div><div class='c'>";
        allStats += "<p style='text-align:center; font-size: 30px; margin-top: 10px;'>";
        allStats += arrayAcc[index].name;
        allStats += "</p></div><div class='d' id='div_iframe2'><iframe id='frame' src='https://rocketleague.tracker.network/rocket-league/profile/";
        allStats += arrayAcc[index].client;
        allStats += "/";
        allStats += arrayAcc[index].id;
        allStats += "/mmr?playlist=13'></iframe></div><div class='e' id='div_iframe2'><iframe id='frame' src='https://rocketleague.tracker.network/rocket-league/profile/";
        allStats += arrayAcc[index].client;
        allStats += "/";
        allStats += arrayAcc[index].id;
        allStats += "/mmr?playlist=34'></iframe></div></div>";
    }

    allStats += "<div class='b' style='margin-top: -150px; width: 300px; height: 150px; border: 130px solid white;'><p></p></div><div class='d' style='margin-top: -150px; width: 300px; height: 150px; border: 130px solid white;'><p></p></div><div class='e' style='margin-top: -150px; width: 300px; height: 150px; border: 130px solid white;'><p></p></div>";
    return allStats;
}

document.getElementById("personal").innerHTML = getStats(personalAccounts);
