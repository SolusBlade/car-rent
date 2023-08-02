import FavoritesEl from "components/FavoritesEl/FavoritesEl";

const FavoritesPage = ({adverts}) => {

  return (
    <>
          <FavoritesEl adverts={adverts} /> 
    </>
  );
};

export default FavoritesPage;