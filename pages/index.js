import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import styles from '../styles/Home.module.css'
import requests from '../utils/requests'

export default function Home({data}) {

  return (
    <>
    
    <Header/>
    <Nav/>
    <Result results={data.results}/>
    </>
  )
}
export async function getServerSideProps(context) {

  const genre = context.query.genre
  const request = await fetch(`https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`)
  const data = await request.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}