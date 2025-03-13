import {motion} from 'framer-motion'
//@ts-ignore
const PlusMinus = ( {isOpen} ) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.line
                x1="5" y1="12" x2="19" y2="12"
                stroke="white" strokeWidth="2"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
            />
            <motion.line
                x1="12" y1="5" x2="12" y2="19"
                stroke="white" strokeWidth="2"
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
            />
        </svg>
    );
};

export default PlusMinus
