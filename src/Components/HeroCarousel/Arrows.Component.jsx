import React from "react";

// const Arrows = () => {
//   return (
//     <div>Arrows</div>
//   )
// }

// export default Arrows ;

export function NextArrow(props) {
    return(
        <>
            <div className={props.className} style={{color:"red" , padding: "10px"}} onClick={props.onClick}>
                {/* these styles and properties are there in react-slick which is 3rd party application */}
            </div>
        </>
    )
}

export function PrevArrow(props) {
    return(
        <>
            <div className={props.className} style={{...props.style}} onClick={props.onClick}>
                {/* these styles and properties are there in react-slick which is 3rd party application */}
                {/* if we don't want object within object we use spread operator */}
            </div>
        </>
    )
}
