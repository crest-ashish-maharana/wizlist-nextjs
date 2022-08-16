export const getStaticPaths = async () => { 
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(wizard => {
        return {
            params: { id: wizard.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    const data = await response.json();
    console.log("Wizards", response);
    return {
        props: { wizard: data }
    }
}

const Details = ({ wizard }) => {
    return (
        <div>
            <h1>{ wizard.name }</h1>
            <p>{ wizard.email }</p>
            <p>{ wizard.website }</p>
            <p>{ wizard.address.city }</p>
        </div>
    );
}
 
export default Details;