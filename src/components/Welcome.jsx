import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, defaultWeight: 100 },
    title: { min: 400, max: 900, defaultWeight: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={`${char}-${i}`}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if (!container) return () => {};

    const letters = container.querySelectorAll("span");
    const { min, max } = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight) => {
        gsap.to(letter, {
            duration: 0.3,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;

        letters.forEach((letter) => {
            const l = letter.getBoundingClientRect();
            const center = l.left + l.width / 2;

            const distance = Math.abs(mouseX - center);

            const intensity = Math.exp(-(distance * distance) / 20000);

            const weight = min + (max - min) * intensity;

            animateLetter(letter, weight);
        });
    };

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetter(letter, FONT_WEIGHTS[type].defaultWeight));
    };


    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    };
};


const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(
        () => {

            const titleCleanup = setupTextHover(titleRef.current, "title");
            const subtitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
            return () => {
                subtitleCleanup();
                titleCleanup();
            };
        },
        { dependencies: [] }
    );

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText(
                    "Hey, I'm Alina! Welcome to my",
                    "text-3xl font-georama",
                    100
                )}
            </p>

            <h1 ref={titleRef} className="mt-7">
                {renderText(
                    "portfolio",
                    "text-9xl italic font-georama",
                    400
                )}
            </h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    );
};

export default Welcome;
