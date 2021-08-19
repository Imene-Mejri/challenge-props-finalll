




const Item = ({ product }) => {
    // const item = { image, type, price ,alert}
    console.log(product)

    return (
        
        <div className='item'>
   

   

            <h3>
                {
                    product.type
                }

            </h3>
            <h5> {<img src={product.image} />}</h5>
            <h4>{product.price}</h4>


        </div>




    )
}





export default Item;