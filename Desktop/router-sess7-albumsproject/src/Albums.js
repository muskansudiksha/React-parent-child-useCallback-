import React,{useEffect,useState, useCallback} from 'react';
import { Link} from 'react-router-dom';
import { AppBar,Toolbar, Typography, Card, Box } from '@mui/material';

const Albums = ()=>{
    const [albums,setAlbums] = useState([]);
    const fetchData = useCallback(async ()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/albums');
            const data = await response.json();
            //console.log(data);
            setAlbums(data);
        } catch(e){
            console.log('Error',e);
        }
        
    },[]);
    useEffect(()=>{
        fetchData();
    },[fetchData]);
    return (
        <React.Fragment>
            <AppBar sx= {{mb:2}}position="static" color="secondary">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" sx={{backgroundColor:'#2b2b2b'}}>
                        Albums
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box  sx = {{display:'flex', flexDirection:'row', flexWrap:'wrap', columnGap:'8px', rowGap:'8px', mx:1}}>
                {albums.map((album)=>{
                    return (
                        <Card key={album.id} variant="outlined" sx={{padding:'10px', width:'100px', minHeight:'80px'}}>
                            <Link to={`photos/${album.id}`}>
                                <ul>
                                    <li>Album id : {album.id}</li>
                                    <li>Album Title : {album.title}</li>
                                </ul>
                            </Link>
                        </Card>                      
                    );
                })}
            </Box>
        </React.Fragment>
    );
};

export default Albums;