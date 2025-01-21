import React from 'react';
import './BookCard.css';
import pAbrahamImage from './pAbraham.png';
import pBilla from './pBilla.png';

function BookCard() {
  return (
    <div className="book-card">
    <div className='bbackground'>
    <div id="wrapper">
      <div id="container">

        <section className="open-book">
            <header>
                <h1>Book Layout</h1>
                <h6>Erin E. Sullivan</h6>
            </header>
            <article>
                <h2 className="chapter-title">Meeting the Pastors</h2>
                <div className="float-image">
                    <img 
                        src={pAbrahamImage}
                        alt="Pastor M.S. Abraham"
                        className="chapter-image"
                    />
                    <em className="image-caption">Pastor M.S. Abraham</em>
                </div>
                <p>
                    <span className="first-letter">P</span><span className="underline">astor M.S. Abraham</span>, born and raised in India as the son of a pioneering missionary pastor, experienced God's calling through <mark>numerous miracles</mark> during his seminary and secular education.
                </p>
                <p>
                    After completing his studies, he <mark className="blue">trained ministers in seminaries</mark> for five years, served as a <span className="underline">convention speaker, church planter, and youth leader</span> before immigrating to the USA.
                </p>
                <p>
                    In Portland, ME, he joined <span className="underline">First Assembly of God</span>, assisting Pastors Hinman and Johnson while earning a <mark className="green">Master's Degree in Counseling</mark> from the University of Southern Maine.
                </p>
                <p>
                    Pastor Abraham became the senior pastor in <span className="underline">May 2001</span>, bringing spiritual growth and equipping believers for ministry. His <mark className="orange">visionary leadership</mark> continues to bless the church, alongside his wife, Molly, and their children, Faith, Evangeline, and Justin.
                </p>
                <dl>
                    <dt><strong>mis&bull;sion&bull;ar&bull;y</strong></dt>
                    <dd>
                        <em>noun</em><br />
                        a person sent on a religious mission, especially one sent to promote Christianity in a foreign country.
                    </dd>
                </dl>
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>1</li>
                    <li>2</li>
                </ol>
            </footer>
        </section>

      </div>
    </div>
    <div id="wrapper">
      <div id="container">

        <section className="open-book">
            <header>
                <h1>Book Layout</h1>
                <h6>Erin E. Sullivan</h6>
            </header>
            <article>
                <h2 className="chapter-title">Meeting the Pastors</h2>
                <div className="float-image">
                    <img 
                        src={pBilla}
                        alt="Pastor Billa"
                        className="chapter-image"
                    />
                    <em className="image-caption">Pastor M.S. Abraham</em>
                </div>
                <p>
                    <span className="first-letter">P</span><span className="underline">astor M.S. Abraham</span>, born and raised in India as the son of a pioneering missionary pastor, experienced God's calling through <mark>numerous miracles</mark> during his seminary and secular education.
                </p>
                <p>
                    After completing his studies, he <mark className="blue">trained ministers in seminaries</mark> for five years, served as a <span className="underline">convention speaker, church planter, and youth leader</span> before immigrating to the USA.
                </p>
                <p>
                    In Portland, ME, he joined <span className="underline">First Assembly of God</span>, assisting Pastors Hinman and Johnson while earning a <mark className="green">Master's Degree in Counseling</mark> from the University of Southern Maine.
                </p>
                <p>
                    Pastor Abraham became the senior pastor in <span className="underline">May 2001</span>, bringing spiritual growth and equipping believers for ministry. His <mark className="orange">visionary leadership</mark> continues to bless the church, alongside his wife, Molly, and their children, Faith, Evangeline, and Justin.
                </p>
                <dl>
                    <dt><strong>mis&bull;sion&bull;ar&bull;y</strong></dt>
                    <dd>
                        <em>noun</em><br />
                        a person sent on a religious mission, especially one sent to promote Christianity in a foreign country.
                    </dd>
                </dl>
            </article>
            <footer>
                <ol id="page-numbers">
                    <li>3</li>
                    <li>4</li>
                </ol>
            </footer>
        </section>

      </div>
    </div>
    </div>
    </div>
  );
}

export default BookCard;