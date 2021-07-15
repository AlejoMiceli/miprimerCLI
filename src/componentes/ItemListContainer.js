/*pasar los datos de los productos como props de item list 
dentro de itemList pasar los props a item
itemlistcontainer - itemlist - item */


function ItemListContainer(props) {
    return(
        /*<ItemList/> -- Item*/
        <div>
            <h1>{ props.producto }</h1>
            <h2>$ { props.precio }</h2>
        </div>
    )
}

export default ItemListContainer