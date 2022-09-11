import { Flex, View, Checkbox, DialogTrigger, ActionButton, Dialog, Heading, Divider, Content, Footer, ButtonGroup, Button, Image, Text } from "@adobe/react-spectrum";

export const BreedCard = (props: any) => {
  const { breed, comparedBreedIds, toggleSelect } = props;
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
              <div>
                <Text>Bred For</Text>
                <Text>{ breed.bred_for }</Text>
              </div>
              <div>
                <Text>Bred Group</Text>
                <Text>{ breed.bred_group }</Text>
              </div>
              <div>
                <Text>Life Span</Text>
                <Text>{ breed.life_span }</Text>
              </div>
              <div>
                <Text>Temperament</Text>
                <Text>{ breed.temperament }</Text>
              </div>
              <div>
                <Text>Origin</Text>
                <Text>{ breed.origin }</Text>
              </div>
            </Content>
            <Footer>
              <Checkbox isSelected={ comparedBreedIds.includes(breed.id) } isDisabled>
                Select to compare
              </Checkbox>
              <ButtonGroup>
                <Button variant="secondary" onPress={() => toggleSelect(breed.id)}>{comparedBreedIds.includes(breed.id) ? 'Unselect' : 'Select'}</Button> 
                <Button variant="primary" onPress={close}>Close</Button>
              </ButtonGroup>
            </Footer>
            
          </Dialog>
        )}
      </DialogTrigger>
    </Flex>
  )
}