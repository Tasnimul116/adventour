
import "../components/DestinationStyle.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/4.jpg";
import Mountain2 from "../assets/7.jpg";



const Destination=()=>{


    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
     
        <DestinationData 
        className="first-des"
        heading="Rangamati, Bangladesh"
        
            text="The Chakma King's residence and nearby monastery.
            The Parjatan sites - motel, hanging bridge etc.Kaptai Lake - Peda Ting Ting resort, Shubolong, Chakma Villages
            There is a new private resort and park named Tuk Tuk Eco village which also provides lodging in natural wooden made banglows hanging on hills within forest where you can enjoy fantastic natural scenery. The room rent is 1200tk. They have a restaurant where you can enjoy the natural beauty while taking your meal. Most of the boat man avoid this place but this is one of the most scenic place to visit. You can directly come to this place by shared engine boat with only 10~15 tk fare."

            img1={Mountain1}
            img2={Mountain2}
        />


<DestinationData 
        className="first-des-reverse"

heading="Bandarban, Bangladesh"
        
        text="Bandarban Hill District is the remotest and least populated district in Bangladesh. The lure of the tallest peaks of Bangladesh, treks through virgin forests and chance to meet more than 15 tribes of the region up close is growing both among Bangladeshis and tourists from other countries.Bandarban, a 4,479 km² wide area with a population of 292,900 (2003 est.) inside Bangladesh is bordered by Cox’s Bazaar, Chittagong, Rangamati and Khagrachari. On the other side of the 129 kilometer international border lies Myanmar provinces of Chin and Arakan.
        Bandarban has only one town that approaches anything near a city – the Bandraban town. The rest of the area is divided into 7 upazilas, which are in turn divided into varying numbers of unions. Each union is a cluster of paras and villages."
        
        img1={"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0d/77/22/14/amiakhum.jpg"}
        img2={"https://i.ytimg.com/vi/QcrmaKMwQ-c/maxresdefault.jpg"}
        />
           
        </div>


    );
}


export default Destination;