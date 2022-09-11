import './CompareDialog.css';
import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text, Image, TableView, TableHeader, Column, TableBody, Row, Cell, Content } from "@adobe/react-spectrum";

export const CompareDalog = (props: any) => {
  const { breeds, comparedBreedIds } = props;
  return (
    <DialogTrigger isDismissable>
        <ActionButton isDisabled={comparedBreedIds.length <= 1}>Show Compared Breeds</ActionButton>
        {(close) => {
          const comparedBreeds = breeds.filter((b: any) => comparedBreedIds.includes(b.id));
          return (
            <Dialog>
              <Heading>
                <Flex alignItems="center" gap="size-100">
                  <Text>
                    Compared Breeds
                  </Text>
                </Flex>
              </Heading>
              <Divider />
              <Content>
                <Flex alignItems="start" gap="size-100" direction="row" width="single-line-width">
                {
                  comparedBreeds.map((breed: any, idx: number) => (
                    <div key={breed.id + '_' + idx}>
                      <div className='row'>
                        <Text>Bred Name</Text>
                        <div>{ breed.name }</div>
                      </div>
                      <div className='row'>
                        <Flex height="100%" width="100%">
                          <Image src={breed.image.url} alt={breed.name} objectFit="cover" />
                        </Flex>
                      </div>
                      <div className='row'>
                        <Text>Bred For</Text>
                        <div>{ breed.bred_for }</div>
                      </div>
                      <div className='row'>
                        <Text>Bred Group</Text>
                        <div>{ breed.bred_group }</div>
                      </div>
                      <div className='row'>
                        <Text>Life Span</Text>
                        <div>{ breed.life_span }</div>
                      </div>
                      <div className='row'>
                        <Text>Temperament</Text>
                        <div>{ breed.temperament }</div>
                      </div>
                      <div className='row'>
                        <Text>Origin</Text>
                        <div>{ breed.origin }</div>
                      </div>
                    </div>))}
                </Flex>
              </Content>
            </Dialog>
          );
        }}
      </DialogTrigger>
  );
}