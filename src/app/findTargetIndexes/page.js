'use client'
import Footer from '../components/footer';
import { twoSum } from './target'

const FindTargetIndexes = () => {

    return (
        <>
            <div className='container'>
                <h2>Two Sum II - Input Array Is Sorted</h2>
                <p>{JSON.stringify(twoSum([4, 11, 17, 25], 21))}</p>
                <p>{JSON.stringify(twoSum([0, 1, 2, 2, 3, 5], 4))}</p>
                <p>{JSON.stringify(twoSum([-1, 0], -1))}</p>
            </div>
            <Footer prevPagePath={'/navbar'} isPrevBtnShow />
        </>
    );
}
 
export default FindTargetIndexes;