import Icon from 'components/Icon/Icon';
import s from './ModalInfo.module.scss';

const ModalInfo = ({ modalData, handleCloseModal }) => {
  const addressParts = modalData.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
    
  const str = modalData.rentalConditions;
  const parts = str.split("\n");

  const formatStringWithAccent = (inputString) => {
    const regex = /(\D+|\d+)/g;
    const parts = inputString.match(regex);

    return parts.map((part, index) => {
        if (/\d+/.test(part)) {
        return (
            <span key={index} className={s.accent}>
            {part}
            </span>
        );
        } else {
        return part;
        }
    });
    };

  return (
    <div className={s.infoWrap}>
        <button className={s.close} onClick={handleCloseModal}>
            <Icon secondaryClassName={s.closeIcon} width={24} height={24} name={"icon-close"}/>
          </button>
          <div className={s.imgWrap}>
            <img className={s.img} src={modalData.img} alt={modalData.description} />
          </div>
          <p className={s.title}>
              {modalData.make}
              {
                modalData.model && <span className={s.model}>{modalData.model}</span>
              }
              , {modalData.year}
          </p>
          <div className={s.infoBlock}>
              <p>{city}</p>
              <p>{country}</p>
              <p>Id: {modalData.id}</p>
              <p>Year: {modalData.year}</p>
              <p>Type: {modalData.type}</p>
              <p>Fuel Consumption: {modalData.fuelConsumption}</p>
              <p>Engine Size: {modalData.engineSize}</p>
          </div>
          <p className={s.description}>{modalData.description}</p>
          <p className={s.text}>Accessories and functionalities:</p>
          <div className={s.secondInfoBlock}>
              {modalData.accessories.map((el, index) => (
                  <p key={index}>{el}</p>
              ))}
              {modalData.functionalities.map((el, index) => (
                  <p key={index}>{el}</p>
              ))}
          </div>
          <p className={s.text}>Rental Conditions:</p>
          <div className={s.thirdInfoBlock}>
              {parts.map((el, index) => (
                  <p key={index} className={s.conditionsText}>
                    {formatStringWithAccent(el)}
                  </p>
              ))}
              <p className={s.conditionsText} >Mileage: <span className={s.accent}>{(modalData.mileage / 1000).toFixed(3)}</span></p>
              <p className={s.conditionsText} >Price: <span className={s.accent}>{modalData.rentalPrice}</span></p>
          </div>
          <a className={s.rentBtn} href="tel:+380730000000">Rental car</a>
    </div>
  );
};

export default ModalInfo;