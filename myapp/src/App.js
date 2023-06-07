// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';


function App() {
  const arr=[
    {
      image:"https://images.justwatch.com/poster/117239386/s718/power-rangers-s-p-d.%7Bformat%7D",
      title:"S.P.D",
      rating: 9.5,
      genre:"Action, Adventure, Sci-Fi"
  },
  {
    image:"https://m.media-amazon.com/images/M/MV5BYzFhNjY5OWEtNWQwYi00Zjk5LWEyNjAtNDliNjFlZjk5MGUwXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_FMjpg_UX1000_.jpg",
    title:"Mystic Force",
    rating: 9.1,
    genre:"Action, Adventure, Family"
  },
  {
    image:"https://m.media-amazon.com/images/M/MV5BMTk1MDc4MjY0MV5BMl5BanBnXkFtZTcwNjExNzMzNw@@._V1_.jpg",
    title:"Samurai",
    rating: 8.7 ,
    genre:"Action, Adventure, Comedy"
  },
  {
    image:"https://m.media-amazon.com/images/M/MV5BMWM2ZTFlYjYtMzhiNS00NWVlLWI4N2UtZGMwYTZhOTZiMTZmXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_FMjpg_UX1000_.jpg",
    title:"Dino-Thunder",
    rating: 8.5,
    genre:"Action, Adventure, Crime"
  },

{
    image:"https://m.media-amazon.com/images/M/MV5BOTM1N2Y4ZjMtODU2NC00OWRjLWFhMDAtOGZiZGQ1ZTYyOTgzXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_FMjpg_UX1000_.jpg",
    title:"Jungle Fury",
    rating: 8.9,
    genre:"Action, Adventure, Comedy"
},
{
    image:"https://m.media-amazon.com/images/M/MV5BMTQ1MzU4NDU2NF5BMl5BanBnXkFtZTcwMjQ0ODQ2Mg@@._V1_FMjpg_UX1000_.jpg",
    title:"R.P.M",
    rating: 9.2,
    genre:"Action, Adventure, Comedy"
},

{
    image:"https://m.media-amazon.com/images/M/MV5BMTM5NTIwMjg1Ml5BMl5BanBnXkFtZTcwOTY2MDY0OQ@@._V1_.jpg",
    title:"Megaforce",
    rating: 8.3,
    genre:"Action, Adventure, Family"
},
{
    image:"https://m.media-amazon.com/images/M/MV5BZmI1NWU4OTAtNGYxNi00NjUxLTgwNzktZTNiNTNjMWYzYmFlXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_.jpg ",
    title:"Wild Force",
    rating: 8.6,
    genre:"Action, Adventure, Drama"
    
},
{
  image:"https://m.media-amazon.com/images/M/MV5BMTM5NDQ0NjAyMl5BMl5BanBnXkFtZTcwNTMxMjAyMQ@@._V1_FMjpg_UX1000_.jpg",
  title:"LightSpeed Rescue",
  rating: 8.6,
  genre:"Action, Adventure, Drama"
  
},
{
    image:"https://m.media-amazon.com/images/M/MV5BY2U2MTg5ZjMtZmIxMi00YzhjLWI0MmYtNjIxZjc3MTdkODRiXkEyXkFqcGdeQXVyNzEzNjU1NDg@._V1_FMjpg_UX1000_.jpg",
    title:"ZEO",
    rating: 8.4,
    genre:"Action, Adventure,Family"
}

  ]
  return (
    <div className="App">
      <Navbar/>
      <div className='card'>
      {arr.map((el)=>{
        return(
          <Card
            image=
            {el.image}
            title={el.title}
            rating={el.rating}
            genre={el.genre}
      />
        )
      })}
      
      
    </div>


      
    </div>
  );
}

export default App;
