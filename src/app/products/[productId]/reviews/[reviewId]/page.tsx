//http://localhost:3000/products/test-product/reviews/1

const ProductReview = async ({ params }: {
    params: { productId: string; reviewId: string };
}) => {
    const { productId, reviewId } = params;

    return (
        <>
            <h1>Review: {reviewId} for Product: {productId}</h1>
        </>
    );
};

export default ProductReview;
