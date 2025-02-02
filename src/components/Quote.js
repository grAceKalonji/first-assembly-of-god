import React, { useState, useEffect } from 'react';
import './Quote.css';


function Quote() {
    const quotes = [
        "Above all, keep loving one another earnestly, since love covers a multitude of sins. — 1 Peter 4:8",
        "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. — John 13:34",
        "Love is patient, love is kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth. — 1 Corinthians 13:4-6",
        "Whoever does not love does not know God, because God is love. — 1 John 4:8",
        "And may the Lord make you increase and abound in love for one another and for all, as we do for you. — 1 Thessalonians 3:12"
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const words = quotes[currentQuoteIndex].split(' '); // this will essentially Split the current quote into words
        const interval = setInterval(() => {
            setFade(false); // Start fade-out

            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => {
                    if (prevIndex + 1 < words.length) {
                        return prevIndex + 1; // Move to the next word
                    } else {
                        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Move to the next quote
                        return 0; // Reset word index
                    }
                });
                setFade(true); // Start fade-in
            }, 1500); // Duration of the fade-out effect
        }, 475); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [quotes, currentQuoteIndex]);

    return (
        <div className="quote-container">
            <p className={`quote-text ${fade ? 'fade-in' : 'fade-out'}`}>
                {quotes[currentQuoteIndex].split(' ').map((word, index) => (
                    <span key={index} className={index === currentWordIndex ? 'highlight' : ''}>
                        {word}{' '}
                    </span>
                ))}
            </p>
        </div>
    );
}

export default Quote
