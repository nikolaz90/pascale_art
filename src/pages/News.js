import React from 'react'
import { Link } from 'react-router-dom'
import {useGlobalContext} from '../context'

import montsales from '../photos/news/montsalès.jpg'
import mos2023 from '../photos/news/mos_2023.jpg'

function News() {
  const {loading} = useGlobalContext()
  const videoLink = "//videos.ctfassets.net/fol21n7kmioh/2Qga1iOJGIG5XN1hgn4Ajm/0ae9df0b5385cb1fcf698679d59f13ad/VID-20220702-WA0011.mp4" 
  const mosLink = "https://www.marlboroughopenstudios.co.uk/"
  const tomLink = "https://tomhiscocks.co.uk/"
  const cmafLink = "https://www.cmaf.org.uk/"
  const richardLink = "https://www.richarddraper.co.uk/"
  return (
    <main>
      <section className='section text-container'>
        <h2 className='page-title'>News</h2>
        { loading ?  <h3>Loading</h3>:
        <>
        <article className='news-article-container'>
          <div className='news-article-info'>
            <h4>Galerie de la Tour Montsalès, Aveyron</h4>
            <p>2023</p>
            <p className='news-article-para'>
              Exhibition at the Galerie De La Tour Montsalès in August 2023 alongside Marie Claude Very.
            </p>
          </div>
          <div className='news-article-media'>
            <img src={montsales} className='artist-img' alt='Montsalès galerie exhibition' />
          </div>
        </article>
        <article className='news-article-container'>
          <div className='news-article-info'>
            <h4>Marlborough Open Studios</h4>
            <p>2023</p>
            <p className='news-article-para'>
              Thank you all for comming to this year's Marlborough Open Studios. Richard Draper (photographer)
              and myself very much enjoyed your visit and sharing ideas. You came in large number this year !
            </p>
            <p className='news-article-para'><a href={mosLink} target='_blank' rel="noreferrer" className='mos-link'>marlboroughopenstudios.co.uk</a></p>
            <p className='news-article-para'><a href={richardLink} target='_blank' rel="noreferrer" className='mos-link'>richarddraper.co.uk</a></p>
          </div>
          <div className='news-article-media'>
            <img src={mos2023} className='artist-img' alt='Painting by Pascale Stacey of a house and tractor' />
          </div>
        </article>
        <article className='news-article-container'>
          <div className='news-article-info'>
            <h4>Marlborough Open Studios</h4>
            <p>2022</p>
            <p className='news-article-para'>
              Marlborough Open Studios has started! Tom Hiscock's scupltures and Pascale Stacey's paintings 
              are exhibited side by side in Avebury. Watch the video for a sneak peak of their work. Marlborough 
              Open Studios is running every Saturday and Sunday from 2nd July to 24th July.
            </p>
            <p className='news-article-para'>For more information on Marlborough Open Studios and other artists exhibiting, visit </p>
            <p className='news-article-para'><a href={mosLink} target='_blank' rel="noreferrer" className='mos-link'>marlboroughopenstudios.co.uk</a></p>
            <p className='news-article-para'><a href={tomLink} target='_blank' rel="noreferrer" className='mos-link'>tomhiscocks.co.uk</a></p>
          </div>
          <div className='news-article-media'>
            <video width='320' height='500' controls>
              <source src={videoLink}/>
              <p>Woops... Looks like something went wrong with the video player. 
                Try this <a href={videoLink} target='_blank' rel="noreferrer">link</a> to watch the video.</p>
            </video>
          </div>
        </article> 
        <article className='news-article-container'>
          <div className='news-article-info'>
            <h4>Calne Open Art Exhibition</h4>
            <p>2022</p>
            <p className='news-article-para'>
              I will be taking part in this year’s Calnes Open Art Exhibition as part of the Music and 
              Art Festivals 2022 from the 7th to 16th October at Marden House, Calnes.  
              For information please visit <a href={cmafLink} target='_blank' rel="noreferrer" className='mos-link'>cmaf.org.uk</a> 
              or email me at <Link to='/contact' className='mos-link'>here</Link>.
            </p>
          </div>
        </article>
        </>
        }
        
      
    </section>
    </main>
    
  )
}

export default News