import { useSelector } from 'react-redux';
import { selectAdvertId } from 'redux/modal/modalSelectors';
import {
  ConditionsStyled,
  DescStyled,
  DetailsModalCarStyled,
  ImgWrapperStyled,
  LinkTelStyled,
  ListAccesorStyled,
  ModalTitleWrapStyled,
  ModalWrapStyled,
  ParTitleStyled,
} from './AdvertModal.styled';
import { capitalizeFirstLetter } from 'utils/functions';

export const AdvertModal = () => {
  const advertId = useSelector(selectAdvertId);

  const formatAge = advertId.rentalConditions.split('\n');
  const age = formatAge[0].split(':').pop();
  return (
    <ModalWrapStyled>
      <ImgWrapperStyled>
        <img src={advertId.img} alt={advertId.make} />
      </ImgWrapperStyled>

      <ModalTitleWrapStyled>
        <p>{advertId.make}</p>
        <span>{advertId.model},</span>
        <p>{advertId.year}</p>
      </ModalTitleWrapStyled>

      <DetailsModalCarStyled>
        <li>{advertId.address.split(', ').slice(1, 2)}</li>
        <li>{advertId.address.split(', ').pop()}</li>
        <li>Id: {advertId.id}</li>
        <li>Year: {advertId.year}</li>
        <li>Type: {capitalizeFirstLetter(advertId.type)}</li>
        <li>FuelConsumption: {advertId.fuelConsumption}</li>
        <li>Engine Size: {advertId.engineSize}</li>
      </DetailsModalCarStyled>

      <DescStyled>{advertId.description} </DescStyled>

      <ParTitleStyled>Accessories and functionalities:</ParTitleStyled>
      <ListAccesorStyled>
        {advertId.accessories.join(' | ')} |{' '}
        {advertId.functionalities.join(' | ')}
      </ListAccesorStyled>

      <ParTitleStyled>RentalConditions:</ParTitleStyled>
      <ConditionsStyled>
        <li>
          Minimum age: <span>{age}</span>
        </li>
        <li>{advertId.rentalConditions.split('\n').slice(1, 2)}</li>
        <li>{advertId.rentalConditions.split('\n').pop()}</li>
        <li>
          Mileage:
          <span>{advertId.mileage.toLocaleString('en-US')}</span>
        </li>
        <li>
          Price:
          <span>{advertId.rentalPrice.substring(1)}&#36;</span>
        </li>
      </ConditionsStyled>

      <LinkTelStyled href="tel:+380730000000">Rental car</LinkTelStyled>
    </ModalWrapStyled>
  );
};
