'use client'
import Footer from '../components/footer';

const Navbar = () => {

    return (
        <>
            <div className='container'>
                <h2>This is a navbar page</h2>
            </div>
            <Footer prevPagePath={'/calculator'} nextPagePath={'/findTargetIndexes'} isNextBtnShow isPrevBtnShow />
        </>
    );
}
 
export default Navbar;