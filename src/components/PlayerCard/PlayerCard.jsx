
import userImg from "../../assets/user-1.png"
import report from "../../assets/report-1.png"
import { useState } from "react";
const PlayerCard = ({ player }) => {
    const [isSelected,setIsSelected] = useState (false )
    return (
        <div className="card bg-base-100  shadow-sm p-4">
            <figure>
                <img className="w-[300px] h-[400px] object-cover" src={player.player_image} alt="Shoes" />
            </figure>
            <div className="mt-4">
                <div className="flex">
                    <img src={userImg} alt="" />   <h2 className="card-title ml-2">{player.player_name
                    }</h2>
                </div>
                <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
                    <div className="flex items-center  ">
                        <img className="w-[20px] h-[20px] " src={report} alt="" />
                        <span className="ml-2" >{player.player_country
                        }</span>
                    </div>
                    <button className="btn">{player.
                        playing_role}</button>
                </div>
                <div className="flex justify-between">
                    <span className="font-bold">Rating</span>
                    <span>{player.
                        rating
                    }</span>
                </div>
                <div className="flex justify-between mt-2">
                    <span className="font-bold">{player.
                        bating_style
                    }</span>
                    <div>
                        <span>{player.
                            bowling_style
                        }</span>
                    </div>
                </div>
                <div className="flex justify-between mt-2">
                    <span> {player.price
                    }</span>
                    <div>
                        <button disabled={isSelected} onClick={()=> setIsSelected(true )} className="btn">{isSelected===true?"Selected":"Chose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;