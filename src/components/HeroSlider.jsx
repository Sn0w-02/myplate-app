import React, { useEffect, useState } from 'react'

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1470",
        alt: "그릴드 연어 헬시 플레이트"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=1470",
        alt: "프레쉬 그린 샐러드"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1539735776517-befcae86494d?q=80&w=1479",
        alt: "아보카도 에그 토스트"
    }
]
console.log(slides)
slides.map((img) => {
    console.log('img', img)
})

function HeroSlider() {
    const [slideIndex, setSlideIndex] = useState(0);
    console.log(slideIndex)

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % slides.length)
        }, 3000);
        /* 
            현재 인덱스         3초 후 인덱스
                0                   (0 + 1) / 3 = 1
                1                   (1 + 1) / 3 = 2
                2                   (2 + 1) / 3 = 0
        */

        return () => clearInterval(timer); //화면을 다른 페이지로 이동
    }, []);

    const prevSlider = () =>
        setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
    /* 
        현재 인덱스 => 현재 인덱스 - 1 + 3 / 3 = 
            0               (0 - 1 + 3) / 3 = 2
            0               (2 - 1 + 3) / 3 = 1
            0               (1 - 1 + 3) / 3 = 0
    */

    const nextSlider = () => {
        setSlideIndex((prev) => (prev + 1) % slides.length)
    }
    /* 
        현재 인덱스 => 현재 인덱스 + 1 / 3 = 
            0               (0 + 1) / 3 = 1
            0               (1 + 1) / 3 = 2
            0               (2 + 1) / 3 = 0    
    */

    return (
        <div className="hero-slide">
            <img
                src={slides[slideIndex].image}
                alt={slides[slideIndex].alt} />

            <button
                className='slide-btn prev'
                onClick={prevSlider}
                aria-label='이전 이미지'
            ><CircleChevronLeft size={44}
                color="rgba(255,255,255,0.8)" />
            </button>
            <button
                className='slide-btn next'
                onClick={nextSlider}
                aria-label='다음 이미지'
            ><CircleChevronRight size={44}
                color="rgba(255,255,255,0.8)" />
            </button>

            <div className="slide-dots">
                {
                    slides.map((slide, index) => (
                        <button
                            key={index}
                            className={index === slideIndex ? 'on' : ''}
                            onClick={() => setSlideIndex(index)}
                            aria-label={`${index + 1}번 이미지`}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default HeroSlider