import Container from "components/Container/Container";
import carBg from "../../assets/images/carBg.jpg"
import s from "./HomeEl.module.scss"

const HomeEl = () => {

  return (
    <Container>
        <h1 className={s.title}>Car Rental in Kyiv</h1>
        <p className={s.text}>In modern society, values such as time and comfort have become increasingly important, turning car rental from a luxury into a daily necessity. Depending on the situation, buying a car may not always be a wise investment.</p>
        <p className={s.text}>For example, for tourists or business travelers visiting Kyiv, the best solution would be a daily car rental, which is cost-effective for temporary needs. For Kyiv residents, this service will also be beneficial for various purposes like renting a car for weddings, leisure trips, photo shoots, or simply for entertainment.</p>
        <p className={s.text}>Life is unpredictable, and you never know when you might urgently need to rent a car. To address this issue, the TopRent company offers the #1 car rental service in Kyiv. We provide the opportunity to take a car on rent under the most favorable conditions, starting from $18 per day.</p>
        <img src={carBg} alt="car in forest" className={s.img} />  
    </Container>
  );
};

export default HomeEl;