import './CompareDialog.css';
import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text, Image, TableView, TableHeader, Column, TableBody, Row, Cell, Content } from "@adobe/react-spectrum";
import { BreedCardColumn } from '../BreedCardColumn';

export const CompareDalog = (props: any) => {
  const { breeds, comparedBreedIds } = props;
  return (
    <DialogTrigger isDismissable>
        <ActionButton isDisabled={comparedBreedIds.length <= 1} margin="40px">Show Compared Breeds</ActionButton>
        {(close) => {
          const comparedBreeds = breeds.filter((b: any) => comparedBreedIds.includes(b.id));
          return (
            <Dialog size="L">
              <Heading>
                <Flex alignItems="center" gap="size-100">
                  <Text>
                    Compared Breeds
                  </Text>
                </Flex>
              </Heading>
              <Divider />
              <Content>
                <Flex alignItems="start" direction="row" width="single-line-width">
                {
                  comparedBreeds.map((breed: any, idx: number) => (
                    <BreedCardColumn breed={breed} idx={idx} keyIndicator="CompareDialog" />))}
                </Flex>
              </Content>
            </Dialog>
          );
        }}
      </DialogTrigger>
  );
}