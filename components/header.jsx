 import React from 'react'
 import Image from 'next/dist/client/image'
import HeaderItem from './HeaderItem'
import{HomeIcon,LightningBoltIcon, BadgeCheckIcon, CollectionIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'

 
 const Header = () => {
   return (
     <>
     <header className='flex justify-between items-center flex-col sm:flex-row'>
       <div className='flex flex-grow justify-evenly max-w-2xl mt-2'>
         <HeaderItem Icon = {HomeIcon} title="HOME"/>
         <HeaderItem Icon = {LightningBoltIcon} title="TREANDING"/>
         <HeaderItem Icon = {BadgeCheckIcon} title="VERIFIED"/>
         <HeaderItem Icon = {CollectionIcon} title="COLLECTION"/>
         <HeaderItem Icon = {SearchIcon} title="SEARCH"/>
         <HeaderItem Icon = {UserIcon} title="ACCOUNT"/>



       </div>
         <Image className="object-contain" src={`/hulu.svg`} width={200} height={100}/>
     </header>
     </>
   )
 }
 
 export default Header