import React from "react";

function Player(props) {
    
    if (props.type === 'mobile'){
        return (
            <ul className="w-3/4 flex justify-between bg-red-200 mb-4">
                <li className="">{props.ranking}</li>
                <li className="">{props.name}</li>
                <li className="">{props.country}</li>
                <li className="">{props.rating}</li>
            </ul>
      );
    }else{
        return (
            <ul className="w-2/3 ml-auto mr-auto grid grid-cols-5 bg-gray-200 p-6">
                <li className="p-5">{props.ranking}</li>
                <li className="p-5">{props.name}</li>
                <li className="p-5">{props.country}</li>
                <li className="p-5">{props.rating}</li>
                <li className="p-5">{props.avgRating}</li>
            </ul>
      );
    }

}

export default Player;