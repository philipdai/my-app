import './App.css';
import { Button, defaultTheme, Flex, Provider, View, Text } from '@adobe/react-spectrum';
import React, { useState } from 'react';
import { fetchBreeds } from './services';
import { BreedCard, CompareDalog } from './components';
import { BreedType } from './types';

function App() {
  const [ breeds, setBreeds ] = React.useState([] as BreedType[]);
  const [ allBreeds, setAllBreeds ] = React.useState([] as BreedType[]);
  const [ comparedBreedIds, setComparedBreedIds ] = React.useState([] as number[]);
  const getBreeds = async (page: number) => {
    const breedsFetched = await fetchBreeds(10, page);
    setBreeds(breedsFetched);
    setAllBreeds(allBreeds.concat(breedsFetched.filter((bf: BreedType) => !allBreeds.map((ab: BreedType) => ab.id).includes(bf.id))));
  }
  const [page, setPage] = useState(0);

  React.useEffect(() => {
    getBreeds(page);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ page ]);

  const toggleSelect = (breedId: number) => {
    const copyComparedBreedIds = [...comparedBreedIds];
    
    const foundIdx = comparedBreedIds.findIndex(id => id === breedId);
    if (foundIdx !== -1) {
      copyComparedBreedIds.splice(foundIdx, 1);
    } else {
      copyComparedBreedIds.push(breedId);
    }
    setComparedBreedIds(copyComparedBreedIds);
  }

  const hanldeResetClick = () => {
    setAllBreeds([]);
    setBreeds([]);
    setComparedBreedIds([]);
    getBreeds(0);
  }

  const hanldeNextClick = () => {
    setPage(page => page + 1);
  }
  const hanldePrevClick = () => {
      if (page >= 1) {
          setPage(page => page - 1);
      }
  }
  
  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <CompareDalog allBreeds={allBreeds} comparedBreedIds={comparedBreedIds} />
        <Flex direction="row" gap="size-100" justifyContent="center" wrap>
          {
            breeds.map((breed, idx) => (
              <BreedCard breed={breed} comparedBreedIds={comparedBreedIds} toggleSelect={() => toggleSelect(breed.id)} key={`${breed.id}_breedcard`} idx={idx}/>
            ))
          }
        </Flex>
        <View paddingTop="size-500" paddingX="size-500">
            <Flex direction="row" justifyContent="center" gap="size-150">
                <Button variant="cta" onPress={hanldePrevClick} isDisabled={page === 0}>Prev</Button>
                <Button variant="cta" onPress={hanldeNextClick} isDisabled={breeds.length < 10}>Next</Button>
                <Button variant="primary" onPress={hanldeResetClick}>
                  <Text>Reset</Text>
                </Button>
            </Flex>
        </View>
      </div>
    </Provider>
  );
}

export default App;
