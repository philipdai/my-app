import './CompareDialog.css';
import { DialogTrigger, ActionButton, Dialog, Heading, Flex, Divider, Text, Content } from "@adobe/react-spectrum";
import { BreedCardColumn } from '../BreedCardColumn';
import { BreedType, CompareDialogPropsType } from '../../types';
import { useEffect, useState } from 'react';

export const CompareDalog = (props: CompareDialogPropsType) => {
  const { comparedBreedIds, allBreeds } = props;
  const [ uniqueComparedBreedIds, setUniqueComparedBreedIds ] = useState(comparedBreedIds);
  useEffect(() => {
    const uniqueSet = [...comparedBreedIds];
    setUniqueComparedBreedIds([...uniqueSet]);
  }, [ comparedBreedIds, allBreeds ]);

  return (
    <DialogTrigger isDismissable>
        <ActionButton isDisabled={uniqueComparedBreedIds.length <= 1} margin="40px">Show Compared Breeds</ActionButton>
        {(close) => {
          const comparedBreeds = allBreeds.filter((breed: BreedType) => uniqueComparedBreedIds.includes(breed.id));
          return (
            <Dialog minWidth="1200px">
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
                    <BreedCardColumn breed={breed} idx={idx} key={`${breed.id}_BreedCardColumn`} keyIndicator="CompareDialog" />))}
                </Flex>
              </Content>
            </Dialog>
          );
        }}
      </DialogTrigger>
  );
}