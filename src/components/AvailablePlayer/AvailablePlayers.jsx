import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";


const AvailablePlayers = ({ playerPromise }) => {
    const Playerdata = use(playerPromise)
    console.log(Playerdata);
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            {
                Playerdata.map(player => <PlayerCard player={player}></PlayerCard>)
            }


        </div>
    );
};

export default AvailablePlayers;