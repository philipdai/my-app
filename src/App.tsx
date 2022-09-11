import './App.css';
import { defaultTheme, Flex, Provider } from '@adobe/react-spectrum';
import React from 'react';
import { fetchBreeds } from './services';
import { BreedCard, CompareDalog } from './components';
import { BreedType } from './types';

function App() {
  const [ breeds, setBreeds ] = React.useState([] as BreedType[]);
  const [ comparedBreedIds, setComparedBreedIds ] = React.useState([] as number[]);
  const getBreeds = async () => {
    const breedsFetched = await fetchBreeds();
    setBreeds(breedsFetched);
  }

  React.useEffect(() => {
    getBreeds();
   }, []);

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
  
  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <CompareDalog breeds={breeds} comparedBreedIds={comparedBreedIds} />
        <Flex direction="row" gap="size-100" justifyContent="left" wrap>
          {
            breeds.map((breed, idx) => (
              <BreedCard breed={breed} comparedBreedIds={comparedBreedIds} toggleSelect={toggleSelect} key={`${breed.id}_breedcard`} idx={idx}/>
            ))
          }
        </Flex>
      </div>
    </Provider>
  );
}

export default App;
