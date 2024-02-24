interface IProps {
    imageURL:string;
    alt:string;
    classname:string;

}

const Image=({imageURL,alt,classname}:IProps) => {
    return (
        <img src={imageURL}alt={alt} className={classname} />
    )

}

export default Image;