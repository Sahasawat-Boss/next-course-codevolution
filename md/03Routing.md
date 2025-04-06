# Routing 

Next is a file base routing system

## Routing Convention
- All routes live inside the app folder
- All file must name page.

## Nested Route 
- App Router

/app
  ├── layout.tsx         
  ├── page.tsx           
  ├── about/
  │   └── page.tsx       
  ├── product/
  │   └── page.tsx       
  

## Dynamic Route
- /products/[Productid]

  ├── products/
  │   └── page.tsx
  │   └── [ProductId]
  │       └── page.tsx   

```
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
```
---
##Nested Dynamic Route