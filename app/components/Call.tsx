'use client'
import axios from 'axios';
import { Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useQuery } from 'react-query';

type ImageData = {
  height: number;
  width: number;
  url: string;
  id: string;
};

const fetchData = async() => {
    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
    return data;
}
const Cats = () => {
  const { data, error, isLoading,refetch  } = useQuery<ImageData[], Error>('cats',fetchData);
  if (isLoading) return <h1 className='text-danger my-2 text-center'>Loading...</h1>;
  if (error) return <h1 className='text-danger my-2 text-center'>An error occurred: {error.message}</h1>;

  return (
    <div>
      <h1 className='text-center my-2 text-danger'>Cat Images</h1>
      <hr />
 
        {data?.map((item:ImageData) => (
    <div key={item.id} className=' my-3 d-flex align-content-center justify-content-center'>
     <Image src={item.url} className='border border-3 rounded' height={300} width={300} alt={item.id} />
    </div>
        ))}
<div className='d-flex align-content-center justify-content-center'>
        <Button variant='contained' color='error' onClick={()=>refetch()}><CachedIcon/></Button></div>
    </div>
  );
};

export default Cats;
