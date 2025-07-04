import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

import montsales from '../photos/news/montsales.jpg'
import mos2023 from '../photos/news/mos_2023.jpg'
import mos2024 from '../photos/news/mos_2024.jpg'

function News() {
  const { loading } = useGlobalContext()
  const videoLink = "//videos.ctfassets.net/fol21n7kmioh/2Qga1iOJGIG5XN1hgn4Ajm/0ae9df0b5385cb1fcf698679d59f13ad/VID-20220702-WA0011.mp4"
  const videoLink2 = "//videos.ctfassets.net/fol21n7kmioh/5xXVqMtOjQhqyn7YX7xGFC/83f6cf15b381207dac5632154d788f94/VID-20250529-WA0008.mp4.crdownload"
  const mosLink = "https://www.marlboroughopenstudios.co.uk/"
  const tomLink = "https://tomhiscocks.co.uk/"
  const cmafLink = "https://www.cmaf.org.uk/"
  const richardLink = "https://www.richarddraper.co.uk/"
  const whiteHorseLink = "https://www.whitehorsebooks.co.uk/wh-gallery"

  return (
    <main>
      <section className='section text-container'>
        <h2 className='page-title'>News</h2>
        {loading ? <h3>Loading</h3> :
          <>
            <article className='news-article-container'>
              <div className='news-article-info'>
                <h4>Chelsea Flower Show 2025</h4>
                <p className='news-article-para'>
                  I was delighted and honoured to be invited by well known sculptor Tom Hiscocks to paint
                  two murals for his stand at this year’s show.
                  Working with the Sea Life Trust, Tom’s stand offered a sea garden with sea plants from
                  the Gabb estate in Shropshire with his sculptures of sharks, dolphins and other beautiful
                  works swimming in and around the plantings.
                  The subject for the murals had to complement the garden and I was inspired by the work
                  of Victor Pasmore (1908-1998) - see the video.
                  It was an incredible week! Thank you, Tom
                </p>
              </div>
              <div className='news-article-media'>
                <video width='380' height='250' controls>
                  <source src={videoLink2} />
                  <p>Woops... Looks like something went wrong with the video player.
                    Try this <a href={videoLink2} target='_blank' rel="noreferrer">link</a> to watch the video.</p>
                </video>
              </div>
            </article>
            <article className='news-article-container'>
              <div className='news-article-info-full-width mb-1'>
                <h4>Recent exhibitions</h4>
                <p className='news-article-para'>
                  <i>December 2023</i> <br />
                  I was invited in December 2023 to exhibit at the Brewin Dolphin Christmas
                  Exhibition with other local professional artists.  <br /> <hr />
                  <i>April 2024</i> <br />
                  This exhibition was followed by a solo exhibition of my work at the White Horse
                  Gallery In April 2024. <br /> <hr />
                  <i>July 2024</i> <br />
                  Marlborough Open Studios July 2024 brought many visitors to visit me and the
                  photographer Richard Draper in Avebury where new works were exhibited. <br /> <hr />
                  <i>October - November 2024 </i> <br />
                  Two of my paintings were selected to feature in the annual Oexmann Art Award
                  exhibition at Devizes Museum.
                  I thank everyone for their invaluable support in my work!
                </p>
              </div>
            </article>
            <article className='news-article-container'>
              <div className='news-article-media'>
                <img src={mos2024} className='artist-img' alt='Montsalès galerie exhibition' />
              </div>
              <div className='news-article-info'>
                <h4>Perspectives</h4>
                <p>2024</p>
                <p className='news-article-para'>
                  At the White Horse Gallery in Marlborough - from 8th March to 31st March, 2024
                </p>
                <p className='news-article-para'><a href={whiteHorseLink} target='_blank' rel="noreferrer" className='mos-link'>whitehorsebooks.co.uk</a></p>
              </div>
            </article>
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
              <div className='news-article-media'>
                <img src={mos2023} className='artist-img' alt='Painting by Pascale Stacey of a house and tractor' />
              </div>
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
                  <source src={videoLink} />
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