import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="bg-dark">
				<Navbar/>
			</div>
			<Jumbotron/>
			<div className="container mt-2">
                <div className="row">
                    <div className="col-md-3">
                        <Card title="After Hours" btn="Spotify" content="After Hours es el cuarto álbum de estudio del cantante canadiense The Weeknd. Fue lanzado el 20 de marzo de 2020 por XO y Republic Records." url="https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Starboy" btn="Spotify" content="Starboy es el título del tercer álbum de estudio del cantante y compositor canadiense The Weeknd. XO y Republic Records lanzaron el disco el 25/11/2016" url="https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Hurry Up Tomorrow" btn="Spotify" content="Hurry Up Tomorrow será el sexto álbum de estudio del cantautor canadiense The Weeknd que se lanzará en 2024 XO y Republic Records." url="https://upload.wikimedia.org/wikipedia/en/f/fc/Hurry_Up_Tomorrow_cover.jpg" />
                    </div>
                    <div className="col-md-3">
                        <Card title="Beauty Behind the Madness" btn="Spotify" content="Beauty Behind the Madness es el segundo álbum de estudio del cantante canadiense The Weeknd. Republic Records y XO lo lanzaron alrededor del mundo." url="https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b" />
                    </div>
                </div>
            </div>
			<div className="bg-dark text-center mt-4 pt-2 pb-1">
				<Footer/>
			</div>
		</div>
	);
};

export default Home;
