import Link from "next/link";
import Head from 'next/head'

export default function FirstPost(){
    return(
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Frist Post</h1>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
        </>
    )
}