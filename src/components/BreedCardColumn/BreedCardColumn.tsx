import { Flex, Text, Image } from "@adobe/react-spectrum";

export const BreedCardColumn = (props: any) => {
  const { breed, idx=0, keyIndicator='' } = props;
  return (
  <div key={`${breed.id}_${keyIndicator}_${idx}`}>
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
      <div>{ breed.bred_group }</div>
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
  </div>
)};