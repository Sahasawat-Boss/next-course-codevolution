const DocID = async ({ params }: {
    params: { docId: string };
}) => {
    const docId = params.docId;

    return (
        <>
            <h1>Document No: {docId}</h1>
            <h1>Document Title: {docId}</h1>
            <h1>Document Description: {docId}</h1>
        </>
    );
};
export default DocID;