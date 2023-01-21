import style from "./Card.module.css"

export default function Card({name, species, gender, image, onClose}) {
   return (

     
      <div className={style.contenedor}>
         <button className={style.boton} onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={style.imagen}src={image} alt="" />
      </div>
   );
}
