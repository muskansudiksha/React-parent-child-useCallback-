import React,{useState,useEffect,useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { AppBar,Toolbar, Typography } from '@mui/material';

const Photos = ()=>{
    const [photos,setPhotos] = useState([]);
    const {id} = useParams();
    //console.log(id);
    const fetchData = useCallback(async ()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            const filteredData = data.filter((photo)=>
                photo.albumId === Number(id)
            )
            //console.log(filteredData);
            setPhotos(filteredData);
        } catch(e){
            console.log('Error',e);
        }
        
    },[id]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);
    return(
        <React.Fragment>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                    </Typography>
                </Toolbar>
            </AppBar>
            {photos.map((photo)=>{
                return <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
            })}
        </React.Fragment>
    );
}

export default Photos;

   
