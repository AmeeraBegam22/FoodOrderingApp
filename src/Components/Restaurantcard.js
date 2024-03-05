 import { CDN_URL } from "../utils/Constant";
const Rescard = (props) => {
    const {resData} = props //destructure
    console.log(resData);
    const {cloudinaryImageId,
            name,
            cuisines, 
            costForTwo,
            avgRating,
            sla } = resData?.info //.? optional chaining  // destructering
    return( 
        <div className="res-card m-4 p-5 w-[200px] bg-gray-50 rounded-md shadow-md">
            <img className="res-logo" alt="res logo" src={CDN_URL 
            + cloudinaryImageId}>
            </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4> {cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
    </div>
    );
};

export default Rescard;