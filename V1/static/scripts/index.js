import "./lib/jquery-3.7.1.min.js";
import { apiCall, apiResponseParser } from "./api.js";

const mostWanted = [
    { character_id: 2119210388, name: "Bedjes", reward: 10000 },
    { character_id: 2119210388, name: "Bedjes", reward: 10000 },
    { character_id: 2119210388, name: "Bedjes", reward: 10000 },
    { character_id: 2119210388, name: "Bedjes", reward: 10000 },
    { character_id: 2119210388, name: "Bedjes", reward: 10000 },
];

function refreshWantedData() {
    let mostWantedEndpoint = "/api/mostWanted";
    apiCall(mostWantedEndpoint, "GET")
        .then(apiResponseParser)
        .then((data) => {
            insertWantedData(data.mostWanted);
        });
}

function insertWantedData(mostWanted) {
    for (let i = 0; i < 5; ++i) {
        let target = mostWanted[i];
        let wantedItem = $("#wanted-item-" + i);
        wantedItem
            .children()
            .eq(1)
            .attr("src", "https://images.evetech.net/characters/" + target.character_id + "/portrait");
        wantedItem.children().eq(3).text(target.name);
        wantedItem
            .children()
            .eq(4)
            .text(target.bounty + " isk");
    }
}

function refreshHuntersData() {
    let bestHuntersEndpoint = "/api/bestHunters";
    apiCall(bestHuntersEndpoint, "GET")
        .then(apiResponseParser)
        .then((data) => {
            insertHuntersData(data.bestHunters);
        });
}

function insertHuntersData(bestHunters) {
    for (let i = 0; i < 5; ++i) {
        let target = bestHunters[i];
        let hunterItem = $("#hunter-item-" + i);
        hunterItem
            .children()
            .eq(0)
            .attr("src", "https://images.evetech.net/characters/" + target.character_id + "/portrait");
        hunterItem.children().eq(1).text(target.name);
        hunterItem
            .children()
            .eq(3)
            .text(target.reward + " isk");
    }
}

function refreshData() {
    refreshWantedData();
    refreshHuntersData();
}

refreshData();
