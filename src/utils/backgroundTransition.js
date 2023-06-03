export const containerBackGround = {
    initial : {y : -20, opacity: 0},
    animate : {y:0, opacity: 1,
        transition : {
            duration: 0.7,
            delayChildren : 1.9,
            staggerChildren : 0.4,
            ease: [0.6, -0.05,0.01,0.99]
        }
    }
}
export const textBackGround = {
    initial : {y : -20, opacity: 0},
    animate : {y:0, opacity: 1}
}