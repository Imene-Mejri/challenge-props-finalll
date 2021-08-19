import Item from "./item";








const listitem = (props) => {
    const listitem = props.product;
    return (
        <div className='listitem'>
       
        <h2> 

            {console.log (listitem)}
             {
            listitem.map(el=><Item product={el}/>) }
         
        </h2>
       
        
       
        </div>

    )
}
export default listitem;