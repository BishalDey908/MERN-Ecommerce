import Card from "./Card"
import Navbar from "./Navbar"

const Handcraft = () => {
  return (
    <>
     <Navbar />
     <h3 className="pt-24 text-center text-2xl  font-bold">Samsung Phones</h3>
     <div className="w-[90%] mx-auto flex pt-11 xl:flex-row md:flex-col flex-col">
        <Card title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus " img="https://m.media-amazon.com/images/I/81PcAHZxgLL._SX569_.jpg"/>
        <Card title="Samsung Galaxy M14 5G (ICY Silver,4GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor" img="https://m.media-amazon.com/images/I/81ZSn2rk9WL._SX569_.jpg"/>
        <Card title="Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera " img="https://m.media-amazon.com/images/I/81xJ80yRRzL._SX569_.jpg"/>
        <Card title="Samsung Galaxy F54 5G (Stardust Silver, 256 GB) (8 GB RAM) " img="https://m.media-amazon.com/images/I/81cjnxL6jbL._SX569_.jpg"/>
     </div> 

     <h3 className="pt-24 text-center text-2xl  font-bold">Motorola Phones</h3>
     <div className="w-[90%] mx-auto flex pt-11 xl:flex-row md:flex-col flex-col">  
       <Card title="MOTOROLA g14 (Pale Lilac, 128 GB)  (4 GB RAM)" img="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/v/2/-original-imagsmshnfvucsvc.jpeg?q=70"/>
       <Card title="MOTOROLA e13 (Cosmic Black, 64 GB)  (4 GB RAM)" img="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/o/z/-original-imagmmmhjsjru7c2.jpeg?q=70"/>
       <Card title="MOTOROLA G32 (Mineral Gray, 64 GB)  (4 GB RAM)" img="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/l/z/-original-imaggvfzzt7qhhax.jpeg?q=70"/>
       <Card title="MOTOROLA g72 (Polar Blue, 128 GB)  (6 GB RAM)" img="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/q/x/-original-imaggm6tvdakghdb.jpeg?q=70"/>
     </div> 
    </>
  )
}

export default Handcraft
