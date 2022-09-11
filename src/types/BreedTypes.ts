export type ImageType = {
  height: number;
  id: string;
  url: string;
  width: number
}

export type WeightTye = {
  imperial: string;
  metric: string;
}

export type HeightType = {
  imperial: string;
  metric: string;
}

export type BreedType = {
  id: number;
  height: HeightType;
  image: ImageType;
  weight: WeightTye;
  bred_for?: string;
  breed_group?: string;
  life_span?: string;
  name: string;
  origin?: string;
  reference_image_id: string;
  temperament: string;
}

export type BreedCardPropsType = {
  breed: BreedType; 
  comparedBreedIds: number[]; 
  toggleSelect: Function, 
  idx: number;
}