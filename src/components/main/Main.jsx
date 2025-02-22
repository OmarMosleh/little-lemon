import React from 'react'
import styles from './Main.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import Item from '../foodItem/Item'
const Main = () => {
  const sampleItems = [
    {
      id:1,
      itemName: "Greek Salad",
      price: "12.80",
      description: "the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: require('../../Assets/downloads/greek-salad.jpg'),
      alt: "Greek salad"
    },
    {
      id:2,
      itemName: "Bruschetta",
      price: "5.86",
      description: "Our Bruschetta is made from the grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: require('../../Assets/downloads/bruchetta.jpg'),
      alt: "Bruschetta"
    },
    {
      id:3,
      itemName: "Lemon Dessert",
      price: "5.00",
      description: "This cones straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
      image: require('../../Assets/downloads/lemmon_dessert.jpg'),
      alt: "Lemon Dessert"
    },

  ]
  return (
    <main>
      <div className={styles.heading}>
      <h2>This weeks specials !</h2>
      <PrimaryButton name="Online Menu" />
      </div>
      <div className={styles.items}>
        {sampleItems.map(item => {
          return <Item key={item.id} itemName={item.itemName} price={item.price} description={item.description} image={item.image} alt={item.alt} />
        })}
      </div>
    </main>
  )
}

export default Main