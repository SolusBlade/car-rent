import Container from "components/Container/Container";
import s from "./CatalogEl.module.scss"
import Icon from "components/Icon/Icon";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import ModalInfo from "components/Modal/ModalInfo/ModalInfo";

const CatalogEl = ({ adverts }) => {
  const ITEMS_PER_PAGE = 8;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [modalData, setModalData] = useState(null);
  const showLoadMore = visibleItems < adverts.length;

  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(storedFavorites);



  const toggleFavorite = (id) => {
    const index = favorites.indexOf(id);
    if (index !== -1) {

      const updatedFavorites = [...favorites];
      updatedFavorites.splice(index, 1);
      setFavorites(updatedFavorites);
    } else {

      setFavorites([...favorites, id]);
    }
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <>
      <Container>
      <ul className={s.list}>
        {adverts.slice(0, visibleItems).map((el) => (
          <li key={el.id} className={s.card}>
            <div className={s.imgWrap}>
              <img src={el.img} alt={el.description} className={s.img}/>
            </div>
            <p className={s.title}>
              {el.make}
              {
                el.model && <span className={s.model}>{el.model}</span>
              }
              , {el.year}
              <span className={s.price}>{el.rentalPrice}</span>
            </p>
            <button className={s.learnBtn} onClick={() => setModalData(el)}>Learn more</button>
            <button className={s.favoritesBtn} onClick={() => toggleFavorite(el.id)}>
              <Icon width={18} height={18}  name={!favorites.includes(el.id) ? "icon-heart" : "icon-fill-heart"} />
            </button>
          </li>
        ))}
      </ul>
      {showLoadMore && (
        <button className={s.loadMore} onClick={handleLoadMore}>
          Load more
        </button>
      )}
      </Container>
      {
        modalData && (
          <Modal handleCloseModal={() => setModalData(null)}>
            <ModalInfo modalData={modalData} handleCloseModal={() => setModalData(null)}/>
          </Modal>
        )
      }
    </>
  );
};

export default CatalogEl;