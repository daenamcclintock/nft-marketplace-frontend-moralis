import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMoralisQuery, useMoralis } from 'react-moralis'
import NFTCard from '../components/NFTCard'


export default function Home() {

  const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
    // TableName
    "ActiveItem",
    // Function for the query
    (query) => query.limit(10).descending("tokenId")
  )

  console.log(listedNfts)

  return (
    <div className={styles.container}>
      {fetchingListedNfts
      ? 
      <div>Loading...</div> 
      : 
      listedNfts.map((listedNft) => {
        console.log(listedNft.attributes)
        const { price, nftAddress, tokenId, marketplaceAddress, seller } = listedNft.attributes
        return (
          <div>Price: {price / 1e18} ETH</div>
          
        )}
    )}
    </div>
  )
}
