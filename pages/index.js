import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import MenuCard from '../components/MenuCard'
import MenuLayout from '../components/MenuLayout'
import Navbar from '../components/Navbar'

export default function Home(data) {
  return (
    <div >
      <Head>
        <title>Territory Foods Menu | Healthy Meal Delivery</title>
        <meta name="description" content="Territory Foods Menu - Ernesto Velasco" />
        <link rel="icon" href="https://powersupply-assets.s3.amazonaws.com/favicons/favicon-16x16-v2.png" />
      </Head>
      <MenuLayout data={data.data}/>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    let response = await fetch(`http://localhost:3000/meals`)
    const data = await response.json()

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        data: data
      }
    }


  } catch (error) {
      console.error('runtime error: ', error)
  }
}