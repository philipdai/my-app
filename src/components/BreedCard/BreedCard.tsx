import './BreedCard.css';
import { Flex, View, Checkbox, DialogTrigger, ActionButton, Dialog, Heading, Divider, Content, Footer, ButtonGroup, Button, Image, Text } from "@adobe/react-spectrum";
import { BreedCardColumn } from '../BreedCardColumn';
import { BreedCardPropsType } from '../../types/BreedTypes';

export const BreedCard = (props: BreedCardPropsType) => {
  const { breed, comparedBreedIds, toggleSelect, idx } = props;
  return (
    <Flex direction='column'  key={breed.name}>
      <View height="size-600" width="size-1600">
        {breed.name}
      </View>
      <Flex height="100%" width="120px">
        <Image src={breed.image.url} alt={breed.name} objectFit="cover" />
      </Flex>
      <Checkbox isSelected={ comparedBreedIds.includes(breed.id) } isDisabled>
        { comparedBreedIds.includes(breed.id) ? 'Selected' : 'Unselected'}
      </Checkbox>
      <DialogTrigger isDismissable>
        <ActionButton>See Details</ActionButton>
        {(close) => (
          <Dialog>
            <Heading>
              <Flex alignItems="center" gap="size-100">
                <Text>
                  { breed.name }
                </Text>
              </Flex>
            </Heading>
            <Divider />
            <Content>
              <BreedCardColumn breed={breed} idx={idx} keyIndicator="BreedCard"/>
            </Content>
            <Footer>
              <Checkbox isSelected={ comparedBreedIds.includes(breed.id) } isDisabled>
                Select to compare
              </Checkbox>
              <ButtonGroup>
                <Button variant="secondary" onPress={() => toggleSelect(breed.id)} isDisabled={comparedBreedIds.length > 4 && !comparedBreedIds.includes(breed.id)}>{comparedBreedIds.includes(breed.id) ? 'Unselect' : 'Select'}</Button> 
                <Button variant="primary" onPress={close}>Close</Button>
              </ButtonGroup>
            </Footer>
          </Dialog>
        )}
      </DialogTrigger>
    </Flex>
  )
}