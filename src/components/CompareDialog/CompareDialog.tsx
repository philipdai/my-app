import './CompareDialog.css';
import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text, Content } from "@adobe/react-spectrum";
import { BreedCardColumn } from '../BreedCardColumn';
import { BreedType, CompareDialogPropsType } from '../../types';

export const CompareDalog = (props: CompareDialogPropsType) => {
  const { breeds, comparedBreedIds } = props;
  return (
    <DialogTrigger isDismissable>
        <ActionButton isDisabled={comparedBreedIds.length <= 1} margin="40px">Show Compared Breeds</ActionButton>
        {(close) => {
          const comparedBreeds = breeds.filter((breed: BreedType) => comparedBreedIds.includes(breed.id));
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
                  comparedBreeds.map((breed: BreedType, idx: number) => (
                    <BreedCardColumn breed={breed} idx={idx} keyIndicator="CompareDialog" />))}
                </Flex>
              </Content>
            </Dialog>
          );
        }}
      </DialogTrigger>
  );
}