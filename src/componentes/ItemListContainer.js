function ItemListContainer(props) {
    return(
        <div>
            <h1>{ props.producto }</h1>
            <h2>$ { props.precio }</h2>
        </div>
    )
}

export default ItemListContainer