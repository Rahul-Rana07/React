
import styles from "./Netflix.module.css";
import styled from "styled-components"


const ButtonRana = styled.button
           `padding:1.2rem 2.4rem;
            border: none;
            font-Size: 1.6rem;
            background-Color: ${(props) =>
                props.rating >=8.5 ?"#7dcea0" : "#f7dc6f"};
            color: var(--btn-color);
            font-Weight: bold;
            cursor:  pointer;
       `;

       const Rating = styled.h3
       `
       font-size : 1.6rem;
       font-color : #7dcea0;
       text-transform : capitalize;
       `;
export const SeriesCard = ({data}) =>
{
     
    const {id , name , rating ,img_url, description,cast , genre, watch_url }= data;


   // const btn_Style ={}
   
   //styeld component using object
    //    const ButtonRana = styled.button(
    //     {
    //         padding:"1.2rem 2.4rem",
    //         border:"none",
    //         fontSize:"1.6rem",
    //         backgroundColor: `${rating >=8.5 ?"#7dcea0" : "#f7dc6f"}`,
    //         color:"var(--btn-color)",
    //         fontWeight: "bold",
    //         cursor:  "pointer"
    //     }
    //    )

       //using tempral literal styled comonent both react component and 
       
    

    const ratingClass =rating >= 8.5 ? styles.super_hit : styles.average;


    return(
        <li className={styles.card} >         
        <div>
            <img src ={img_url} 
                alt= {name} 
                width = "40%" 
                height="40%" 
            />
        </div>
        {/* <div className={styles["card-content"]}> */}
        <div className="flex flex-col gap-1.6 py-6 px-6">
        <h2>Name :{name}</h2>
        <Rating>
            Rating:
           <span className={`${styles.rating} ${ratingClass}`}>{rating} </span> 
        </Rating>
        <p className="text-3xl font-bold underline"> Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <a href={watch_url} target="_blank">    
            {/* <button style ={btn_Style}>Watch Now</button> */}
            <ButtonRana rating = {rating}>Watch Now</ButtonRana>
        </a>

        </div>
        </li>
    );
}