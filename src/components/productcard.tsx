import { txtSlicer } from "../utiles/functions";
import { IProduct } from "./data/interfaces";
import Image from "./image";
import Button from "./ui/button";
interface IProps {
    product:IProduct;

}

const Productcard=({product}:IProps) => {
    const {title,description,imageURL,price,category,colors}=product;
    return (
        <div className="border rounded-md p-2 flex flex-col max-w-sm md:max-w-lg mx-auto md:max-0">
            <Image 
            imageURL={imageURL}
            alt={"product name"}
            classname="rounded-md mb-2"/>
             <h3 className="text-lg font-semibold">{title}</h3>
             <p className="text-sm text-gray-500 break-words">{txtSlicer(description)}</p>
             <div className="flex items-center my-4 space-x-2">
             <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer" />
             <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer"/>
             <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer"/>
             </div>

             <div className="flex items-center justify-between">
                <span className="text-lg text-indigo-600 font-semibold" >${price}</span>
                <div className="flex items-center space-x-2">
                    
                    <Image imageURL={category.imageURL} alt={category.name} classname="w-10 h-10 rounded-full object-top"/>
                </div>
             </div>

             <div className="flex items-center justify-between space-x-2 mt-5">
                <Button className="bg-indigo-700 hover:bg-indigo-800" width="w-full"
                 onClick={()=>{
                     console.log("clicked");

                }}
                >Edit</Button>
                <Button className="bg-[#c2344d] hover:bg-red-800 "width="w-full">Remove</Button>
             </div>

        </div>
    )

}

export default Productcard;