import './BreedCardColumn.css';
import { Flex, Text, Image, Divider } from "@adobe/react-spectrum";
import { BreedCardColumnPropsType } from "../../types";

export const BreedCardColumn = (props: BreedCardColumnPropsType) => {
  const { breed, idx, keyIndicator } = props;

  if (keyIndicator === 'BreedCard') {
    return (
      <Flex direction="column" gap="size-125" alignContent="center" key={breed.id} flex="1">
        <Text>Bred Name: {breed.name}</Text>
        <Divider size="S" />
        <Text>Height: {breed.height.metric}</Text>
        <Divider size="S" />
        <Text>Weight: {breed.weight.metric}</Text>
        <Divider size="S" />
        <Text>Bred For: {breed.bred_for}</Text>
        <Divider size="S" />
        <Text>Life Span: {breed.life_span}</Text>
        <Divider size="S" />
        <Text>Origin: {breed.origin}</Text>
        <Divider size="S" />
        <Text>Temperament: {breed.temperament}</Text>
        <Divider size="S" />
        <Text>Bred Name: {breed.name}</Text>
        <Divider size="S" />
        <Image src={breed.image.url} alt={breed.name} objectFit="cover" maxWidth="100%" />
      </Flex>
    );
  }

  return (
  <Flex direction="column" alignContent='center' flex="1" key={`${breed.id}_${keyIndicator}_${idx}`}>
    <div className='row'>
      <Text UNSAFE_className="label">Bred Name</Text>
      <div>{ breed.name }</div>
    </div>
    <div className='row'>
      <Flex height="100%" width="100%">
        <Image src={breed.image.url} alt={breed.name} objectFit="cover" />
      </Flex>
    </div>
    <div className='row'>
      <Text UNSAFE_className="label">Bred For</Text>
      <div>{ breed.bred_for }</div>
    </div>
    <div className='row'>
      <Text UNSAFE_className="label">Bred Group</Text>
      <div>{ breed.breed_group }</div>
    </div>
    <div className='row'>
      <Text UNSAFE_className="label">Life Span</Text>
      <div>{ breed.life_span }</div>
    </div>
    <div className='row'>
      <Text UNSAFE_className="label">Temperament</Text>
      <div>{ breed.temperament }</div>
    </div>
    <div className='row'>
      <Text UNSAFE_className="label">Origin</Text>
      <div>{ breed.origin }</div>
    </div>
  </Flex>
)};