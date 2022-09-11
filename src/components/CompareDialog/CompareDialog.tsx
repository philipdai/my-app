import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text } from "@adobe/react-spectrum";

export const CompareDalog = (props: any) => {
  const { breeds, comparedBreedIds } = props;
  return (
    <DialogTrigger isDismissable>
        <ActionButton>Show Compared Breeds</ActionButton>
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
              <Flex alignItems="start" gap="size-100" direction="row" width="single-line-width">
                {
                  comparedBreeds.map((breed: any, idx: number) => (
                    <div key={breed.id + '_' + idx}>
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
                    </div>))
                }
              </Flex>
            </Dialog>
          );
        }}
      </DialogTrigger>
  );
}