import "./lib/jquery-3.7.1.min.js";
import { apiCall, apiResponseParser } from "./api.js";

const mostWanted = [
    { character_id: 2119210388, name: "Bedjes", bounty: 10000 },
    { character_id: 2119210388, name: "Bedjes", bounty: 10000 },
    { character_id: 2119210388, name: "Bedjes", bounty: 10000 },
    { character_id: 2119210388, name: "Bedjes", bounty: 10000 },
    { character_id: 2119210388, name: "Bedjes", bounty: 10000 },
];

function updateData(mostWanted) {
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

// updateData(mostWanted);
let mostWantedEndpoint = "/api/mostWanted";
apiCall(mostWantedEndpoint, "GET")
    .then(apiResponseParser)
    .then((data) => {
        updateData(data.mostWanted);
    });
