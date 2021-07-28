import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Sedia() {
    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
    const typed = new Typed(el.current, {
        strings: [
            "Menyediakan: Alat Tulis.",
            "Menyediakan: Peralatan Olahraga.",
            "Menyediakan: Kebutuhan Rumah Tangga.",
            "Menyediakan: Kebutuhan Kantor.",
            "Menyediakan: Kebutuhan Sekolah."
    ],  // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 100,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 100,
        loop: true,
    });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
        {/* Element to display typing strings */}
        <span ref={el}></span>
        </div>
    );
}