import Card from "./Card"
import Navbar from "./Navbar"

const Clothes = () => {
    return (
        <>
            <Navbar />
            <h3 className="pt-24 text-center text-2xl  font-bold">Men Wear </h3>
            <div className="w-[90%] mx-auto flex pt-8 xl:flex-row md:flex-col flex-col">
            <Card title="Bewakoof Men's Printed 100% Cotton T-Shirt" img="https://m.media-amazon.com/images/I/61pCCSai-aL._SX569_.jpg"/>
            <Card title="VEIRDO® Men's Oversized Cotton Black" img="https://m.media-amazon.com/images/I/61vWSaQ2NML._SX425_.jpg"/>
            <Card title="Allen Solly Men's Cotton Crew Neck Sweatshirt" img="https://m.media-amazon.com/images/I/81JHBT92imL._SY550_.jpg"/>
            <Card title="Allen Solly Men's Regular Fit Polo" img="https://m.media-amazon.com/images/I/81YQK2fT9dL._SL1500_.jpg"/>
            </div>

            
            <h3 className="pt-10 text-center text-2xl  font-bold">Woman Wear </h3>
            <div className="w-[90%] mx-auto flex pt-16 xl:flex-row md:flex-col flex-col">
            <Card title="OOMPH! Women Top" img="https://m.media-amazon.com/images/I/81FYVt2CK4L._SY679_.jpg"/>
            <Card title="Solid Boho Style Regular Fit Short Flared Butterfly Sleeve Cold" img="https://m.media-amazon.com/images/I/719ntqi+8-L._SY741_.jpg"/>
            <Card title="OOMPH! Women's Crepe Tank Top" img="https://m.media-amazon.com/images/I/81CW3jLBXTL._SY741_.jpg"/>
            <Card title="oxolloxo Bomb of red with lace Design Women Linned top " img="https://m.media-amazon.com/images/I/71xRlIUzQ4L._SX569_.jpg"/>
            </div>

            <h3 className="pt-10 text-center text-2xl  font-bold">Kids Wear</h3>
            <div className="w-[90%] mx-auto flex pt-16 xl:flex-row md:flex-col flex-col">
            <Card title="Bold N Elegant Full Sleeve Elephant Print Tshirt Sweatshirt Joggers Pyjama Pant Clothing Set for Baby Boy Girl " img="https://m.media-amazon.com/images/I/610oT9QxQ9L._SX679_.jpg"/>
            <Card title="LILPICKS Girls' Satin Floral Print Puff Sleeves Top Dhoti Saree Set (Green & Multicolor) " img="https://m.media-amazon.com/images/I/61D8EjiQJVL._SX679_.jpg"/>
            <Card title="Hopscotch Baby Boy's Cotton Blend Shorts Set " img="https://m.media-amazon.com/images/I/51ROa2y5YOL._SX679_.jpg"/>
            <Card title="Girl's Lehenga Choli | micron Lehenga Choli Trending Polyester Blend Readymade Designer Choli with dupatta- full Stitched Satin Silk " img="https://m.media-amazon.com/images/I/51izO16t94L.jpg"/>
            </div>
            
        </>
    )
}

export default Clothes




