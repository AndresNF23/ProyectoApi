interface characterData {
  id: number,
  image: string,
  name: string,
  status: string,
  origin: string,
  species: string,
  gender: string,
};

export const getData = async () =>{
  const myData: characterData[] = [];
  try{
    for (let i = 1; i < 6; i ++){
      const response = await fetch('https://rickandmortyapi.com/api/character/' + i);
      const data = await response.json();
      myData.push(data);
    }
    return myData;
  } catch (error){
    console.log(error);
  }
};



