'use client'
import { usePathname } from "next/navigation";
import useNavigation from '../hooks/useNavigation';

const Footer = ({
    nextPagePath,
    prevPagePath,
    isNextBtnShow,
    isPrevBtnShow,
}) => {
    const pathName = usePathname();
    const { navigateTo } = useNavigation();
    const btnWrapper = 'btn-wrapper';
    const btnWrapperForNextBtn = 'btn-wrapper-for-next-btn';

    return (
        <div className={pathName === '/' ? btnWrapperForNextBtn : btnWrapper}>
            {isPrevBtnShow &&
                <div className='prev-btn'>
                    <button onClick={() => navigateTo(prevPagePath)}>Prev</button>
                </div>
            }
            {isNextBtnShow && 
                <div className='next-btn'>
                    <button onClick={() => navigateTo(nextPagePath)}>Next</button>
                </div>
            }
        </div>
    );
}
 
export default Footer;
