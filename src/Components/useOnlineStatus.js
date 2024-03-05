import { useEffect, useState } from "react"


const useStatusOnline = () => {

    const [Status, setStatus] = useState(true);
    useEffect ( () => {

        window.addEventListener( "offline" , () => {
            setStatus(false);
        })
        window.addEventListener("online" , () =>
        {
            setStatus(true);
        })
    }, [] )
    return Status;
}

export default useStatusOnline;