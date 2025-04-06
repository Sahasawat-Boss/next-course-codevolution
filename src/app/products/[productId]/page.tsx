const Products = async ({
    params,
}: {
    params: { productId: string };
}) => {
    const productId = params.productId;

    return (
        <>
            <h1>Product: {productId}</h1>
        </>
    );
};

export default Products;
