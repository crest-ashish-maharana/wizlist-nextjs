import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Wizards.module.css'

export const getStaticProps = async () => {
    // This function never runs on browser, so dont write any code you expect to run in browser 
    // because it's not gonna work
    // This function runs before this Wizards component is rendered

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { wizards: data }
    }
}

const Wizards = ({ wizards }) => {
    return ( 
        <>
            <Head>
                <title>WizList | All Wizards</title>
                <meta name="keywords" content="wizlists" />
            </Head>
            <div>
                <h1>All Wizards</h1>
                {wizards.map(wizard => (
                    <Link href={'/wizards/' + wizard.id} key={wizard.id}>
                        <a className={styles.single}>
                            <h3>{ wizard.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Wizards;