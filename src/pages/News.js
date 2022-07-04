import React from 'react'
import {useGlobalContext} from '../context'

function News() {
  const {loading} = useGlobalContext()
  const videoLink = "//videos.ctfassets.net/fol21n7kmioh/2Qga1iOJGIG5XN1hgn4Ajm/0ae9df0b5385cb1fcf698679d59f13ad/VID-20220702-WA0011.mp4" 
  const mosLink = "https://www.marlboroughopenstudios.co.uk/"
  const tomLink = "https://tomhiscocks.co.uk/"
  return (
    <main>
      <section className='section text-container'>
        <h2 className='page-title'>News</h2>
        { loading ?  <h3>Loading</h3>:<article className='news-article-container'>
          <div className='news-article-info'>
            <h4>Marlborough Open Studios</h4>
            <p>2022</p>
            <p className='news-article-para'>
              Marlborough Open Studios has started! Tom Hiscocks scupltures and Pascale Stacey's paintings 
              are exhibited side by side in Avebury. Watch the video for a sneak peak of their work. Marlborough 
              Open Studios is running every Saturday and Sunday from 2nd July to 24th July.
            </p>
            <p className='news-article-para'>For more information on Marlborough Open Studios and other artists exhibiting, visit </p>
            <p className='news-article-para'><a href={mosLink} target='_blank' rel="noreferrer" className='mos-link'>https://www.marlboroughopenstudios.co.uk/</a></p>
            <p className='news-article-para'><a href={tomLink} target='_blank' rel="noreferrer" className='mos-link'>https://tomhiscocks.co.uk/</a></p>
          </div>
          <div className='news-article-media'>
            <video width='320' height='500' controls>
              <source src={videoLink}/>
              <p>Woops... Looks like something went wrong with the video player. 
                Try this <a href={videoLink} target='_blank' rel="noreferrer">link</a> to watch the video.</p>
            </video>
          </div>
        </article> }
        
      
    </section>
    </main>
    
  )
}

export default News